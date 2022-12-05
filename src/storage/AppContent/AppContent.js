import React, { useContext, useState } from "react";
import { Content } from "carbon-components-react";
import CardList from "../../components/CardList";
import ActionBar from "../../components/ActionBar";
import CardContext from "../../components/CardContext";

const AppContent = (props) => {
  const [readOnlyModeState, setReadOnlyModeState] = useState(false);

  const cardContext = useContext(CardContext);

  const isSomeCardChecked = cardContext.cards.some((card) => card.isChecked);

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
            isSomeCardChecked={isSomeCardChecked}
            updateModalState={props.updateModalState}
          ></ActionBar>
        </div>
        <div className="bx--row">
          <CardList isReadOnlyMode={readOnlyModeState}></CardList>
        </div>
      </div>
    </Content>
  );
};

export default AppContent;
