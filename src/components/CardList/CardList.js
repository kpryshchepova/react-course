import React from "react";
import Card from "../UI/Card";

const CardList = (props) => {
  return (
    <>
      {props.cards.map((item) => (
        <div key={item.id} className="bx--col-sm-6 bx--col-md-4 bx--col-lg-3">
          <Card
            appCardStateHandler={props.appCardStateHandler}
            contentCardState={item}
            isReadOnlyMode={props.isReadOnlyMode}
          />
        </div>
      ))}
    </>
  );
};

export default CardList;
