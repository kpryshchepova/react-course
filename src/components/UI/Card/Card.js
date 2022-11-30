import { Tile } from "carbon-components-react";
import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import withLoadingDelay from "../WithLoadingDelay/WithLoadingDelay";
import CardContent from "./CardContent/CardContent";
import CardControls from "./CardControls/CardControls";
import CardHeader from "./CardHeader/CardHeader";
import CardContext from "../../CardContext";

const Card = (props) => {
  const [cardState, setCardState] = useState({
    isChecked: false,
    isEditMode: false,
    ...props.contentCardState,
  });

  const cardContext = useContext(CardContext);

  cardState.isEditMode &&
    props.isReadOnlyMode &&
    cancelButtonHandler({ isEditMode: false });

  let currentValues = { ...props.contentCardState };

  function saveButtonHandler(data) {
    setCardState((prevState) => {
      currentValues = { ...prevState };

      return { ...prevState, ...data };
    });

    cardContext.changeCardsState({ ...data, ...cardState });
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

    cardContext.changeCardsState({ ...cardState, ...data });
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

Card.propTypes = {
  contentCardState: PropTypes.object,
  isReadOnlyMode: PropTypes.bool,
  appCardStateHandler: PropTypes.func,
};

export default withLoadingDelay(Card);
