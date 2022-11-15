import React, { useState } from "react";
import AppHeader from "./components/AppHeader";
import AppContent from "./components/AppContent";
import ReactDOM from "react-dom";
import modalConfig from "./utils/modal.config.json";
import { useUID } from "react-uid";

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

  function submitModal(data) {
    if (modalState.isAddNew) {
      addNewCardHandler({ ...data });
    } else {
      deleteCardsHandler();
    }
    updateOpenModalState();
  }

  const modalData = modalState.isAddNew
    ? modalConfig.addNewForm
    : modalConfig.deleteForm;

  return (
    <>
      <AppHeader />
      <AppContent
        appCardStateHandler={appCardStateHandler}
        appCardState={appCardState}
        addNewCardHandler={addNewCardHandler}
        updateModalState={setModalState}
      />
      {modalState.isOpen &&
        ReactDOM.createPortal(
          <ModalWindow
            modalData={modalData}
            open={modalState.isOpen}
            onRequestClose={updateOpenModalState}
            onRequestSubmit={submitModal}
          ></ModalWindow>,
          document.getElementById("modal")
        )}
    </>
  );
}

export default App;
