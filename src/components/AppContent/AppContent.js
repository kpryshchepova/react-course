import React from "react";
import { Content } from "carbon-components-react";
import Card from "../Card";

const AppContent = () => (
  <Content>
    <div className="bx--grid">
      <div className="bx--row">
        <div className="bx--col-sm-6 bx--col-md-4 bx--col-lg-3">
          <Card />
        </div>
      </div>
    </div>
  </Content>
);

export default AppContent;
