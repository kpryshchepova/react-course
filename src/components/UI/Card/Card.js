import { Tile } from "carbon-components-react";
import React, { useState } from "react";
import withLoadingDelay from "../WithLoadingDelay/WithLoadingDelay";
import CardContent from "./CardContent/CardContent";
import CardControls from "./CardControls/CardControls";
import CardHeader from "./CardHeader/CardHeader";

const Card = (props) => {
  const [cardState, setCardState] = useState({
    isChecked: false,
    isEditMode: false,
    ...props.contentCardState,
  });

  cardState.isEditMode &&
    props.isReadOnlyMode &&
    cancelButtonHandler({ isEditMode: false });

  let currentValues = { ...props.contentCardState };

  function saveButtonHandler(data) {
    setCardState((prevState) => {
      currentValues = { ...prevState };

      return { ...prevState, ...data };
    });

    props.appCardStateHandler({ ...data, ...cardState });
  }

  function cancelButtonHandler(data) {
    setCardState((prevState) => {
      return {
        ...prevState,
        ...currentValues,
        ...data,
      };
    });
  }

  function changeHandler(data) {
    setCardState((prevState) => {
      return { ...prevState, ...data };
    });

    props.appCardStateHandler({ ...cardState, ...data });
  }

  function changeTextHandler(data) {
    setCardState((prevState) => {
      return { ...prevState, ...data };
    });
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
        changeHandler={changeHandler}
        saveButtonHandler={saveButtonHandler}
        cancelButtonHandler={cancelButtonHandler}
        isReadOnlyMode={props.isReadOnlyMode}
      />
      <CardHeader
        cardState={cardState}
        isReadOnlyMode={props.isReadOnlyMode}
        changeTextHandler={changeTextHandler}
      />
      <hr />
      <CardContent
        cardState={cardState}
        isReadOnlyMode={props.isReadOnlyMode}
        changeTextHandler={changeTextHandler}
      />
    </Tile>
  );
};

export default withLoadingDelay(Card);
