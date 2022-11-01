import React, { useState } from "react";
import { Content } from "carbon-components-react";
import CardList from "../CardList";
import ActionBar from "../ActionBar";

const AppContent = (props) => {
  const [readOnlyModeState, setReadOnlyModeState] = useState(false);

  const isSomeCardChecked = props.appCardState.cards.some(
    (card) => card.isChecked
  );

  function readOnlyModeClickHandler() {
    setReadOnlyModeState(!readOnlyModeState);
  }

  return (
    <Content>
      <div className="bx--grid">
        <div className="bx--row app-content__row">
          <ActionBar
            readOnlyModeState={readOnlyModeState}
            readOnlyModeClickHandler={readOnlyModeClickHandler}
            deleteCardsHandler={props.deleteCardsHandler}
            isSomeCardChecked={isSomeCardChecked}
          ></ActionBar>
        </div>
        <div className="bx--row">
          <CardList
            cards={props.appCardState.cards}
            isReadOnlyMode={readOnlyModeState}
            appCardStateHandler={props.appCardStateHandler}
          ></CardList>
        </div>
      </div>
    </Content>
  );
};

export default AppContent;
