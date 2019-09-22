import React, { FC, useState } from "react";
import * as Sc from "./Board.style";
import Controller from "../Controller/Controller";

enum Cell { 
  Dead,
  Young,
  Old
}

interface IProps {
  size: number;
}

const Board: FC<IProps> = (props: IProps) => {
  const uuid = require('uuid/v4');
  const size:number = Math.pow(props.size, 2);
  const board: Cell[][] = new Array(size).fill(Cell.Dead).map(() => new Array(size).fill(Cell.Dead));

  const [cells, setCells] = useState<Cell[][]>(board);
  const [generation, setGeneration] = useState<number>(0)
  

  const presentBoard = () => {
    return cells.map((row, y) => (
      <tr>
        {row.map((cell, x) => (
          <Sc.cell key={uuid()} id={`${x}:${y}`} onClick={handleClick}>{cell}</Sc.cell>
        ))}
      </tr>
    ));
  };

  const handleClick = (e: any) => {
    const x = e.target.id[0] || undefined;
    const y = e.target.id[2] || undefined;
    if(x !== undefined && y !== undefined && cells[x][y] !== Cell.Young) {
      return cells[x][y] = Cell.Young
    }
      console.log(cells)
  }

  const resetBoard = () => {
    setCells([...board])
    setGeneration(0)
  }

  const findNeighbors = (board: Cell[][], x:number, y:number) => {
    let neighbors = 0;
    const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
    for (let i = 0; i < dirs.length; i++) {
        const dir = dirs[i];
        let y1 = y + dir[0];
        let x1 = x + dir[1];

        if (x1 >= 0 && x1 < board.length && y1 >= 0 && y1 < board.length && board[y1][x1] === Cell.Dead ) {
          neighbors++;
        }
    }
    return neighbors;
}

  // const nextIterations = () => {
  //     if(generation === 0) { initialRun() }
  //     else { runIterator }
  // }


  const runIterator = () => {
    if(generation === 0) { initialRun() }
    setGeneration(generation => generation + 1)
    let newBoard: Cell[][] = cells;
    
    for (let y = 0; y < newBoard.length; y++) {
      for(let x = 0; x < newBoard[y].length; x++) {
        let neighbor = findNeighbors(newBoard, x, y);
        if ((newBoard[y][x] === Cell.Young || newBoard[y][x] === Cell.Old) && (neighbor === 3 || neighbor === 2)) {
          newBoard[y][x] = Cell.Old
        }
        if (newBoard[y][x] === Cell.Dead && neighbor === 3) {
          newBoard[y][x] = Cell.Young
        }
      }
    };
    setCells([...newBoard]);
  };
  
  const initialRun = () => {
      let newBoard: Cell[][] = cells;
      for(let y = 0; y<newBoard.length; y++) {
        for(let x = 0; x<newBoard[y].length; x++){
          let DeadOrCell = Math.floor(Math.random() * 1.1)
          if (DeadOrCell === Cell.Dead) {
            newBoard[y][x] = Cell.Dead
          } else {
            newBoard[y][x] = Cell.Young
          }
        }
      }
     setCells([...newBoard])
  }

  return (
    <>
      <Sc.board onClick={handleClick}>
      {presentBoard()}
      </Sc.board >
      <Controller runIterator={runIterator} initialRun={initialRun} resetBoard={resetBoard}/>
      <div>Generation: {generation}</div>

      
    </>
  )
  
};

export default Board;

