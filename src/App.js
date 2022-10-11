import React, { useState } from "react";
import AppHeader from "./components/AppHeader";
import AppContent from "./components/AppContent";
import { useUID } from "react-uid";

import "./App.sass";

function App() {
  const [appCardState, setAppCardState] = useState({
    cards: [
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
    ],
  });

  function appCardStateHandler(data) {
    setAppCardState((prevState) => {
      const cards = prevState.cards.map((item) => {
        if (item.id.toString() === data.id.toString()) return data;

        return item;
      });

      return { ...prevState, cards: cards };
    });
  }

  function setAllCardsToReadMode() {
    setAppCardState((prevState) => {
      const cards = prevState.cards.slice();
      cards.forEach((item) => {
        item.isEditMode = false;
      });
      return { ...prevState, cards: cards };
    });
  }

  return (
    <>
      <AppHeader />
      <AppContent
        appCardStateHandler={appCardStateHandler}
        setAllCardsToReadMode={setAllCardsToReadMode}
        appCardState={appCardState}
      />
    </>
  );
}

export default App;
