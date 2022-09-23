import { Tile } from "carbon-components-react";
import React, { useState } from "react";
import CardContent from "./CardContent/CardContent";
import CardControls from "./CardControls/CardControls";
import CardHeader from "./CardHeader/CardHeader";

const Card = (props) => {
  const [cardState, setCardState] = useState({
    isChecked: false,
    isEditMode: false,
    ...props.contentState,
  });

  const currentValues = props.contentState;

  function editHandler(data) {
    setCardState((prevState) => {
      return { ...prevState, ...data };
    });
  }

  function saveButtonHandler(data) {
    setCardState((prevState) => {
      currentValues.content = prevState.content;
      currentValues.header = prevState.header;
      return { ...prevState, ...data };
    });
  }

  function cancelButtonHandler(data) {
    setCardState((prevState) => {
      return {
        ...prevState,
        ...data,
        header: currentValues.header,
        content: currentValues.content,
      };
    });
  }

  function changeHandler(data) {
    setCardState((prevState) => {
      return { ...prevState, ...data };
    });

    props.contentStateHandler(data);
  }

  return (
    <Tile
      className={
        "bx--tile--clickable " +
        (cardState.isChecked ? "card__checked" : "card")
      }
    >
      <CardControls
        cardState={cardState}
        editHandler={editHandler}
        saveButtonHandler={saveButtonHandler}
        cancelButtonHandler={cancelButtonHandler}
      />
      <CardHeader cardState={cardState} changeHandler={changeHandler} />
      <hr />
      <CardContent cardState={cardState} changeHandler={changeHandler} />
    </Tile>
  );
};

export default Card;
