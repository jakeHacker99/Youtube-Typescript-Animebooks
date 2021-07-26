import React from "react";
import styled from "styled-components";
import HomePage from "./app/container/HomePage";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

function App() {
  return (
    <AppContainer className="App">
      <HomePage />
    </AppContainer>
  );
}

export default App;
