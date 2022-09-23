import React, { useState } from "react";
import { Content } from "carbon-components-react";
import Card from "../Card";

const AppContent = (props) => {
  const [contentState] = useState(props.appState);

  function contentStateHandler(data) {
    props.appStateHandler((prevState) => {
      return { ...prevState, ...data };
    });
  }

  return (
    <Content>
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col-sm-6 bx--col-md-4 bx--col-lg-3">
            <Card
              contentStateHandler={contentStateHandler}
              contentState={contentState}
            />
          </div>
        </div>
      </div>
    </Content>
  );
};

export default AppContent;
