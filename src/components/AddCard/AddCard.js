import React, { useState } from "react";
import { Modal, TextArea, TextInput } from "carbon-components-react";
import { useUID } from "react-uid";

const AddCard = (props) => {
  const [cardHeaderValue, setCardHeaderValue] = useState("");
  const [cardContentValue, setCardContentValue] = useState("");

  const generatedId = useUID();

  function submitRequest() {
    const newCard = {
      id: generatedId,
      header: cardHeaderValue,
      content: cardContentValue,
    };
    props.onRequestSubmit(newCard);
    props.onRequestClose();
  }

  function onCardHeaderChange(event) {
    setCardHeaderValue(event.target.value);
  }

  function onCardContentChange(event) {
    setCardContentValue(event.target.value);
  }
  return (
    <>
      <Modal
        primaryButtonText="Add"
        secondaryButtonText="Cancel"
        open={props.open}
        onRequestClose={props.onRequestClose}
        onRequestSubmit={submitRequest}
      >
        <h4>Add New Card</h4>
        <br />
        <TextInput
          id="cardHeader"
          labelText="Input Card Header"
          value={cardHeaderValue}
          onChange={onCardHeaderChange}
        ></TextInput>
        <br />
        <TextArea
          id="cardContent"
          labelText="Input Card Content"
          value={cardContentValue}
          onChange={onCardContentChange}
        ></TextArea>
      </Modal>
    </>
  );
};

export default AddCard;
