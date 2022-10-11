import React, { useState } from "react";
import { Content } from "carbon-components-react";
import Card from "../Card";

const AppContent = (props) => {
  const [readOnlyModeState, setReadOnlyModeState] = useState(false);

  function readOnlyModeClickHandler() {
    readOnlyModeState && props.setAllCardsToReadMode();
    setReadOnlyModeState(!readOnlyModeState);
  }

  return (
    <Content>
      <div className="bx--grid">
        <div className="bx--row app-content__row">
          <label className="app-content__label">
            <input
              className="app-content__readonly-checkbox"
              type="checkbox"
              checked={readOnlyModeState}
              onChange={readOnlyModeClickHandler}
            />
            ReadOnly Mode
          </label>
        </div>
        <div className="bx--row">
          {props.appCardState.cards.map((item) => (
            <div
              key={item.id}
              className="bx--col-sm-6 bx--col-md-4 bx--col-lg-3"
            >
              <Card
                appCardStateHandler={props.appCardStateHandler}
                contentCardState={item}
                isReadOnlyMode={readOnlyModeState}
              />
            </div>
          ))}
        </div>
      </div>
    </Content>
  );
};

export default AppContent;
