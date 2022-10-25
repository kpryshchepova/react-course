import React from "react";
import { Button } from "carbon-components-react";

const DeleteButton = (props) => {
  return (
    <div className="delete-button__button">
      <Button onClick={props.deleteCardsHandler}>Delete Cards</Button>
    </div>
  );
};

export default DeleteButton;
