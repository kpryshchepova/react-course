import React, { useState } from "react";
import { Modal, TextArea } from "carbon-components-react";
import { useUID } from "react-uid";

const ModalWindow = (props) => {
  const [cardValues, setNewCardValues] = useState({
    header: "",
    content: "",
  });

  const generatedId = useUID();

  function addNewCard() {
    const newCard = {
      id: generatedId,
      ...cardValues,
    };
    props.onRequestSubmit(newCard);
    props.onRequestClose();
  }

  function deleteCards() {
    props.onRequestSubmit();
    props.onRequestClose();
  }

  function onNewCardValueChange(event) {
    const update = {};
    update[event.target.id] = event.target.value;
    setNewCardValues((prevStatus) => {
      return {
        ...prevStatus,
        ...update,
      };
    });
  }

  return (
    <>
      <Modal
        primaryButtonText={props.primaryButtonText}
        secondaryButtonText={props.secondaryButtonText}
        open={props.open}
        onRequestClose={props.onRequestClose}
        onRequestSubmit={props.inputData.length ? addNewCard : deleteCards}
      >
        <h4>{props.text}</h4>
        {props.inputData.length ? (
          <>
            {props.inputData.map((item, i) => {
              return (
                <div key={i}>
                  <br />
                  <TextArea
                    id={item.id}
                    labelText={item.labelText}
                    value={cardValues[item.id]}
                    onChange={onNewCardValueChange}
                  ></TextArea>
                </div>
              );
            })}
          </>
        ) : null}
      </Modal>
    </>
  );
};

export default ModalWindow;
