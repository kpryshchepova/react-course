import React from "react";
import { Toggle } from "carbon-components-react";
import DeleteButton from "../UI/DeleteButton";

const ActionBar = (props) => {
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
      {props.isSomeCardChecked && (
        <DeleteButton
          deleteCardsHandler={props.deleteCardsHandler}
        ></DeleteButton>
      )}
    </>
  );
};

export default ActionBar;
