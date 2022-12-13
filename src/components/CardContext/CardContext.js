import React, { useEffect, useState } from "react";
import CardsService from "../../services/CardsService";

const CardContext = React.createContext({
  cards: [],
  deleteCards: () => {},
  addCard: () => {},
  changeCardsData: () => {},
});

export const CardContextProvider = (props) => {
  const [cardsState, setCardsState] = useState([]);

  useEffect(() => {
    getAndSetCards();
  }, []);

  async function getAndSetCards() {
    const cardsList = await CardsService.getCardsList();

    setCardsState(cardsList);
  }

  function deleteCardsHandler() {
    setCardsState((prevState) => {
      const newCards = prevState.filter((card) => !card.isChecked);

      return [...newCards];
    });
  }

  function addCardHandler(card) {
    setCardsState((prevState) => {
      const cards = prevState.slice();
      cards.push(card);
      return cards;
    });
  }

  function changeCardsDataHandler(data) {
    setCardsState((prevState) => {
      const cards = prevState.map((item) => {
        if (item.id.toString() === data.id.toString()) return data;

        return item;
      });
      return cards;
    });
  }

  return (
    <CardContext.Provider
      value={{
        cards: cardsState,
        deleteCards: deleteCardsHandler,
        addCard: addCardHandler,
        changeCardsData: changeCardsDataHandler,
      }}
    >
      {props.children}
    </CardContext.Provider>
  );
};

export default CardContext;
