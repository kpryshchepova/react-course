import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button } from "carbon-components-react";
import ModalWindow from "../ModalWindow/ModalWindow";

const DeleteButton = (props) => {
  const [isOpenState, setIsOpenState] = useState(false);

  function updateModalState() {
    setIsOpenState(!isOpenState);
  }

  return (
    <>
      {isOpenState &&
        ReactDOM.createPortal(
          <ModalWindow
            onRequestClose={updateModalState}
            onRequestSubmit={props.deleteCardsHandler}
            open={isOpenState}
            deleteCardsHandler={props.deleteCardsHandler}
            text="Do you want to delete cards?"
            primaryButtonText="Delete"
            secondaryButtonText="Cancel"
          ></ModalWindow>,
          document.getElementById("modal")
        )}
      <div className="delete-button__button">
        <Button kind="secondary" onClick={updateModalState}>
          Delete Cards
        </Button>
      </div>
    </>
  );
};

export default DeleteButton;
