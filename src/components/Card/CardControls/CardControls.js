import {
  Edit20,
  CheckmarkOutline20,
  MisuseOutline20,
} from "@carbon/icons-react";
import React from "react";

const CardControls = (props) => {
  function checkBoxClickHandler() {
    props.editHandler({ isChecked: !props.cardState.isChecked });
  }

  function editButtonClickHandler() {
    props.editHandler({ isEditMode: true, isChecked: false });
  }

  function saveButtonClickHandler() {
    props.saveButtonHandler({ isEditMode: false });
  }

  function cancelButtonClickHandler() {
    props.cancelButtonHandler({ isEditMode: false });
  }

  const buttons = !props.cardState.isEditMode ? (
    <div className="card-controls__buttons">
      <Edit20
        aria-label="Edit"
        className="card-controls__buttons-edit"
        onClick={editButtonClickHandler}
      />
    </div>
  ) : (
    <div className="card-controls__buttons">
      <CheckmarkOutline20
        aria-label="Save"
        className="card-controls__buttons-save"
        onClick={saveButtonClickHandler}
      />
      <MisuseOutline20
        aria-label="Cancel"
        className="card-controls__buttons-cancel"
        onClick={cancelButtonClickHandler}
      />
    </div>
  );

  return !props.cardState.isEditMode ? (
    <div className="card-controls">
      {buttons}
      <input
        type="checkbox"
        checked={props.cardState.isChecked}
        onChange={checkBoxClickHandler}
      />
    </div>
  ) : (
    <div className="card-controls">{buttons}</div>
  );
};

export default CardControls;
