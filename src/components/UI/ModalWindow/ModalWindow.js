import React, { useState } from "react";
import { Modal, TextArea } from "carbon-components-react";
import { useUID } from "react-uid";

const ModalWindow = (props) => {
  const [cardValues, setNewCardValues] = useState({
    header: "",
    content: "",
  });

  const generatedId = useUID();

  function sendInputData() {
    props.onRequestSubmit({ id: generatedId, ...cardValues });
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
        primaryButtonText={props.modalData.primaryButtonText}
        secondaryButtonText={props.modalData.secondaryButtonText}
        open={props.open}
        onRequestClose={props.onRequestClose}
        onRequestSubmit={sendInputData}
      >
        <h4>{props.modalData.modalText}</h4>
        {props.modalData.inputData.length ? (
          <>
            {props.modalData.inputData.map((item, i) => {
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
