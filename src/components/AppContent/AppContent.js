import React, { useState } from "react";
import { Content } from "carbon-components-react";
import styled from "styled-components";
import CardList from "../CardList";
import DeleteButton from "../UI/DeleteButton";

const ReadOnlyCheckbox = styled.input.attrs({ type: "checkbox" })`
  accent-color: grey;
  width: 20px;
  height: 20px;
`;

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
          <div>
            <label className="app-content__label">
              <ReadOnlyCheckbox
                className="app-content__readonly-checkbox"
                type="checkbox"
                checked={readOnlyModeState}
                onChange={readOnlyModeClickHandler}
              />
              ReadOnly Mode
            </label>
          </div>
          {isSomeCardChecked && (
            <DeleteButton
              deleteCardsHandler={props.deleteCardsHandler}
            ></DeleteButton>
          )}
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
