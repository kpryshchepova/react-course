import React from "react";
import { Button, Toggle } from "carbon-components-react";
import DeleteButton from "../UI/DeleteButton";
import { Add24 } from "@carbon/icons-react";

const ActionBar = (props) => {
  function updateModalState() {
    props.updateModalState((prevState) => {
      return {
        ...prevState,
        isAddNew: true,
        isOpen: true,
      };
    });
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
            updateModalState={props.updateModalState}
          ></DeleteButton>
        )}
        <Button kind="primary" onClick={updateModalState}>
          <Add24></Add24> Add Card
        </Button>
      </div>
    </>
  );
};

export default ActionBar;
