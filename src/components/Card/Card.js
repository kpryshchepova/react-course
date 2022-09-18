import { Tile } from "carbon-components-react";
import React, { useState } from "react";

const Card = () => {
  const [isChecked, setIsChecked] = useState(false);

  function checkBoxClickHandler() {
    setIsChecked(!isChecked);
  }

  return (
    <Tile
      className={
        "bx--tile--clickable " + (isChecked ? "card__checked" : "card")
      }
    >
      <div className="card__header">
        Header
        <input
          className="card__checkbox"
          type="checkbox"
          checked={isChecked}
          onChange={checkBoxClickHandler}
        />
      </div>
      <hr />
      <div className="card__content">Content</div>
    </Tile>
  );
};

export default Card;
