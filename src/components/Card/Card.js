import { Tile } from "carbon-components-react";
import React, { useState } from "react";

const Card = () => {
  const uncheckedCardStyle = "bx--tile--clickable card";
  const checkedCardStyle = "bx--tile--clickable card__checked";

  const [isChecked, setIsChecked] = useState(false);

  function checkBoxClickHandler() {
    setIsChecked(!isChecked);
  }

  return (
    <Tile
      className={
        isChecked
          ? checkedCardStyle
          : uncheckedCardStyle
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
