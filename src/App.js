import React, { useContext, useState } from "react";
import AppHeader from "./components/AppHeader";
import AppContent from "./components/AppContent";
import ReactDOM from "react-dom";
import modalConfig from "./utils/modal.config.json";

import "./App.sass";
import ModalWindow from "./components/UI/ModalWindow/ModalWindow";
import CardContext from "./components/CardContext";

function App() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    isAddNew: false,
  });

  const cardContext = useContext(CardContext);

  function updateOpenModalState() {
    setModalState((prevState) => {
      return {
        ...prevState,
        isOpen: !prevState.isOpen,
      };
    });
  }

  function submitModal(data) {
    if (modalState.isAddNew) {
      cardContext.addCard({ ...data });
    } else {
      cardContext.deleteCards();
    }
    updateOpenModalState();
  }

  const modalData = modalState.isAddNew
    ? modalConfig.addNewForm
    : modalConfig.deleteForm;

  return (
    <>
      <AppHeader />
      <AppContent updateModalState={setModalState} />

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
