import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board/Board';

const App: React.FC = () => {
  return (
    <div className="App">
     <h1>Game Of Life</h1>
      <Board size={15}/>
    </div>
  );
}

export default App;
