import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button, Toggle } from "carbon-components-react";
import DeleteButton from "../UI/DeleteButton";
import { Add24 } from "@carbon/icons-react";
import AddCard from "../AddCard/AddCard";

const ActionBar = (props) => {
  const [isOpenState, setIsOpenState] = useState(false);

  function updateModalState() {
    setIsOpenState(!isOpenState);
  }

  return (
    <>
      <div>
        <Toggle
          toggled={props.readOnlyModeState}
          onToggle={props.readOnlyModeClickHandler}
          labelA="ReadOnly Off"
          labelB="ReadOnly On"
          id="readOnlyMode"
        ></Toggle>
      </div>
      <div className="action-bar__buttons">
        {props.isSomeCardChecked && (
          <DeleteButton
            deleteCardsHandler={props.deleteCardsHandler}
          ></DeleteButton>
        )}
        <Button kind="primary" onClick={updateModalState}>
          <Add24></Add24> Add Card
        </Button>
      </div>
      {isOpenState &&
        ReactDOM.createPortal(
          <AddCard
            open={isOpenState}
            onRequestClose={updateModalState}
            onRequestSubmit={props.addNewCardHandler}
          ></AddCard>,
          document.getElementById("modal")
        )}
    </>
  );
};

export default ActionBar;
