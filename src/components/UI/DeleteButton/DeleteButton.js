import React from "react";
import { Button } from "carbon-components-react";
import { TrashCan24 } from "@carbon/icons-react";

const DeleteButton = (props) => {
  function updateModalState() {
    props.updateModalState((prevState) => {
      return {
        ...prevState,
        isAddNew: false,
        isOpen: true,
      };
    });
  }

  return (
    <div className="delete-button__button">
      <Button kind="secondary" onClick={updateModalState}>
        <TrashCan24></TrashCan24>
        Delete Cards
      </Button>
    </div>
  );
};

export default DeleteButton;
