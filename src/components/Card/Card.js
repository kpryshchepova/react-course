import { Tile } from "carbon-components-react";
import React, { useState } from "react";
import CardContent from "./CardContent/CardContent";
import CardControls from "./CardControls/CardControls";
import CardHeader from "./CardHeader/CardHeader";

let currentValues = {
  header: "Header",
  content: "Content",
};

const Card = () => {
  const [state, setState] = useState({
    isChecked: false,
    isEditMode: false,
    headerValue: currentValues.header,
    contentValue: currentValues.content,
  });

  function editModeHandler(data) {
    setState((prevState) => {
      return { ...prevState, ...data };
    });
  }

  function editButtonHandler(data) {
    setState((prevState) => {
      return { ...prevState, ...data };
    });
  }

  function saveButtonHandler(data) {
    setState((prevState) => {
      currentValues.content = prevState.contentValue;
      currentValues.header = prevState.headerValue;
      return { ...prevState, ...data };
    });
  }

  function cancelButtonHandler(data) {
    setState((prevState) => {
      return {
        ...prevState,
        ...data,
        headerValue: currentValues.header,
        contentValue: currentValues.content,
      };
    });
  }

  function changeContentHandler(data) {
    setState((prevState) => {
      return { ...prevState, ...data };
    });
  }

  function changeHeaderHandler(data) {
    setState((prevState) => {
      return { ...prevState, ...data };
    });
  }

  return (
    <Tile
      className={
        "bx--tile--clickable " + (state.isChecked ? "card__checked" : "card")
      }
    >
      <CardControls
        state={state}
        editModeHandler={editModeHandler}
        editButtonHandler={editButtonHandler}
        saveButtonHandler={saveButtonHandler}
        cancelButtonHandler={cancelButtonHandler}
      />
      <CardHeader state={state} changeHeaderHandler={changeHeaderHandler} />
      <hr />
      <CardContent state={state} changeContentHandler={changeContentHandler} />
    </Tile>
  );
};

export default Card;
