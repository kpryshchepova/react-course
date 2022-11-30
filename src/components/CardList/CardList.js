import React, { useContext } from "react";
import CardContext from "../CardContext";
import Card from "../UI/Card";

const CardList = (props) => {
  const cardContext = useContext(CardContext);

  return (
    <>
      {cardContext.cards.map((item) => (
        <div key={item.id} className="bx--col-sm-6 bx--col-md-4 bx--col-lg-3">
          <Card contentCardState={item} isReadOnlyMode={props.isReadOnlyMode} />
        </div>
      ))}
    </>
  );
};

export default CardList;
