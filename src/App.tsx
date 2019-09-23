import React from 'react';
import './App.style.ts';
import Board from './Board/Board';
import * as Sc from './App.style';
import { ThemeProvider } from 'styled-components';
import theme from './theme.style';


const game = () => {
  return (
    <Sc.Game className="App">
    <Sc.title>Game Of Life</Sc.title>
     <Board size={4}/>
   </Sc.Game>
  )
}

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
      <Sc.GlobalStyle/>
      {game()}
      </>
    </ThemeProvider>
  );
}

export default App;
