import React from "react";

const CardContext = React.createContext({
  cards: [],
  deleteCards: () => {},
  addCard: () => {},
  changeCardsState: () => {},
});

export default CardContext;
