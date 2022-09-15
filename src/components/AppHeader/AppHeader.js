import React from "react";

import {
  Header,
  HeaderContainer,
  HeaderName,
  SkipToContent,
} from "carbon-components-react";

const AppHeader = () => (
  <HeaderContainer
    render={() => (
      <Header aria-label="React">
        <SkipToContent />
        <HeaderName prefix="">React Course</HeaderName>
      </Header>
    )}
  />
);

export default AppHeader;
