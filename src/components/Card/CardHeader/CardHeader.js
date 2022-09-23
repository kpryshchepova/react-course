import { TextArea } from "carbon-components-react";
import React from "react";

const CardHeader = (props) => {
  function changeHandler(event) {
    props.changeHandler({ header: event.target.value });
  }

  return !props.cardState.isEditMode ? (
    <div className="card-header">{props.cardState.header}</div>
  ) : (
    <div className="card-header">
      <TextArea
        labelText=""
        helperText="Enter header text"
        rows={1}
        value={props.cardState.header}
        onChange={changeHandler}
      />
    </div>
  );
};

export default CardHeader;
