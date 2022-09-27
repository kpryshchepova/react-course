import React, { useState } from "react";
import AppHeader from "./components/AppHeader";
import AppContent from "./components/AppContent";

import "./App.sass";

function App() {
  const [appCardState, setAppCardState] = useState({
    header: "Header",
    content: "Content",
  });

  function appCardStateHandler(data) {
    setAppCardState((prevState) => {
      return { ...prevState, ...data };
    });
  }

  return (
    <>
      <AppHeader />
      <AppContent
        appCardStateHandler={appCardStateHandler}
        appCardState={appCardState}
      />
    </>
  );
}

export default App;
