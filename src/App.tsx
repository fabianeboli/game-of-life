import React from 'react';
import './App.css';
import Board from './Board/Board';

const App: React.FC = () => {
  return (
    <div className="App">
     <h1>Game Of Life</h1>
      <Board size={4}/>
      {/* <Controller/> */}
    </div>
  );
}

export default App;
