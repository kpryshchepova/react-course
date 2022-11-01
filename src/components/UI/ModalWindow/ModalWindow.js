import React from "react";
import { Modal } from "carbon-components-react";

const ModalWindow = (props) => {
  return (
    <>
      <Modal
        primaryButtonText={props.primaryButtonText}
        secondaryButtonText={props.secondaryButtonText}
        open={props.open}
        onRequestClose={props.onRequestClose}
        onRequestSubmit={props.onRequestSubmit}
      >
        <h4>{props.text}</h4>
      </Modal>
    </>
  );
};

export default ModalWindow;
