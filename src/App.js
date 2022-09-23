import React, { useState } from "react";
import AppHeader from "./components/AppHeader";
import AppContent from "./components/AppContent";

import "./App.sass";

let currentValues = {
  header: "Header",
  content: "Content",
};

function App() {
  const [appState, setAppState] = useState(currentValues);

  function appStateHandler(data) {
    setAppState((prevState) => {
      return { ...prevState, ...data };
    });
  }

  return (
    <>
      <AppHeader />
      <AppContent appStateHandler={appStateHandler} appState={appState} />
    </>
  );
}

export default App;
