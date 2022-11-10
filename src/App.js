import React, { useState } from "react";
import AppHeader from "./components/AppHeader";
import AppContent from "./components/AppContent";
import { useUID } from "react-uid";
import ReactDOM from "react-dom";

import "./App.sass";
import ModalWindow from "./components/UI/ModalWindow/ModalWindow";

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

  const [modalState, setModalState] = useState({
    isOpen: false,
    isAddNew: false,
  });

  const inputData = [
    {
      id: "header",
      labelText: "Input Card Header",
    },
    {
      id: "content",
      labelText: "Input Card Content",
    },
  ];

  const modalText = modalState.isAddNew
    ? "Add New Card"
    : "Do you want to delete cards?";
  const primaryButtonText = modalState.isAddNew ? "Add" : "Delete";

  function updateOpenModalState() {
    setModalState((prevState) => {
      return {
        ...prevState,
        isOpen: !prevState.isOpen,
      };
    });
  }

  function deleteCardsHandler() {
    setAppCardState((prevState) => {
      const newCards = prevState.cards.filter((card) => !card.isChecked);

      return { ...prevState, cards: newCards };
    });
  }

  function addNewCardHandler(card) {
    setAppCardState((prevState) => {
      const cards = prevState.cards.slice();
      cards.push(card);
      return { ...prevState, cards: cards };
    });
  }

  function appCardStateHandler(data) {
    setAppCardState((prevState) => {
      const cards = prevState.cards.map((item) => {
        if (item.id.toString() === data.id.toString()) return data;

        return item;
      });

      return { ...prevState, cards: cards };
    });
  }

  return (
    <>
      <AppHeader />
      <AppContent
        appCardStateHandler={appCardStateHandler}
        appCardState={appCardState}
        // deleteCardsHandler={deleteCardsHandler}
        addNewCardHandler={addNewCardHandler}
        updateModalState={setModalState}
      />
      {modalState.isOpen &&
        ReactDOM.createPortal(
          <ModalWindow
            inputData={modalState.isAddNew ? inputData : []}
            text={modalText}
            primaryButtonText={primaryButtonText}
            secondaryButtonText="Cancel"
            open={modalState.isOpen}
            onRequestClose={updateOpenModalState}
            onRequestSubmit={
              modalState.isAddNew ? addNewCardHandler : deleteCardsHandler
            }
          ></ModalWindow>,
          document.getElementById("modal")
        )}
    </>
  );
}

export default App;
