import { TextArea } from "carbon-components-react";
import React from "react";

const CardContent = (props) => {
  function changeHandler(event) {
    props.changeHandler({ content: event.target.value });
  }

  return !props.cardState.isEditMode ? (
    <div className="card-content">{props.cardState.content}</div>
  ) : (
    <div className="card-content">
      <TextArea
        labelText=""
        helperText="Enter content text"
        rows={2}
        value={props.cardState.content}
        onChange={changeHandler}
      />
    </div>
  );
};

export default CardContent;
