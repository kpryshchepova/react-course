import { TextArea } from "carbon-components-react";
import React from "react";

const CardContent = (props) => {
  function changeContentHandler(event) {
    props.changeContentHandler({ contentValue: event.target.value });
  }

  return !props.state.isEditMode ? (
    <div className="card-content">{props.state.contentValue}</div>
  ) : (
    <div className="card-content">
      <TextArea
        labelText=""
        helperText="Enter content text"
        rows={2}
        value={props.state.contentValue}
        onChange={changeContentHandler}
      />
    </div>
  );
};

export default CardContent;
