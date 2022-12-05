import React, { useContext } from "react";

import {
  Header,
  HeaderContainer,
  HeaderName,
  SkipToContent,
  Tag,
} from "carbon-components-react";
import CardContext from "../CardContext";

const AppHeader = () => {
  const cardContext = useContext(CardContext);

  return (
    <HeaderContainer
      render={() => (
        <Header aria-label="React">
          <SkipToContent />
          <HeaderName prefix="" className="header__name">
            React Course
          </HeaderName>
          <div className="header__cards-number">
            <Tag className="header__cards-number-info" type="cyan" size="md">
              {cardContext.cards.length}
            </Tag>
          </div>
        </Header>
      )}
    />
  );
};

export default AppHeader;
