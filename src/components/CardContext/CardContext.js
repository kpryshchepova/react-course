import React, { useState } from "react";
import { useUID } from "react-uid";

const CardContext = React.createContext({
  cards: [],
  deleteCards: () => {},
  addCard: () => {},
  changeCardsData: () => {},
});

export const CardContextProvider = (props) => {
  const [cardsState, setCardsState] = useState([
    {
      id: useUID(),
      header: "Header1",
      content: "Content1",
    },
    {
      id: useUID(),
      header: "Header2",
      content: "Content2",
    },
    {
      id: useUID(),
      header: "Header3",
      content: "Content3",
    },
    {
      id: useUID(),
      header: "Header4",
      content: "Content4",
    },
    {
      id: useUID(),
      header: "Header5",
      content: "Content5",
    },
    {
      id: useUID(),
      header: "Header6",
      content: "Content6",
    },
    {
      id: useUID(),
      header: "Header7",
      content: "Content7",
    },
    {
      id: useUID(),
      header: "Header8",
      content: "Content8",
    },
    {
      id: useUID(),
      header: "Header9",
      content: "Content9",
    },
    {
      id: useUID(),
      header: "Header10",
      content: "Content10",
    },
  ]);

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
