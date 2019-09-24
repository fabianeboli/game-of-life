import React from "react";
import "./App.style.ts";
import Board from "./Board/Board";
import * as Sc from "./App.style";
import { ThemeProvider } from "styled-components";
import theme from "./theme.style";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Sc.GlobalStyle />
        <Sc.Game className="App">
          <Sc.title>Game Of Life</Sc.title>
          <Board size={6} />
        </Sc.Game>
      </>
    </ThemeProvider>
  );
};

export default App;
