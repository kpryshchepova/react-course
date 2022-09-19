import { TextArea } from "carbon-components-react";

import React from "react";

const CardHeader = (props) => {
  function changeHeaderHandler(event) {
    props.changeHeaderHandler({ headerValue: event.target.value });
  }

  return !props.state.isEditMode ? (
    <div className="card-header">{props.state.headerValue}</div>
  ) : (
    <div className="card-header">
      <TextArea
        labelText=""
        helperText="Enter header text"
        rows={1}
        value={props.state.headerValue}
        onChange={changeHeaderHandler}
      />
    </div>
  );
};

export default CardHeader;
