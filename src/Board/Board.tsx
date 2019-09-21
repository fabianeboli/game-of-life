import React, { FC, useState } from "react";
import * as Sc from "./Board.style";
import Controller from "../Controller/Controller";

enum Cell { 
  Dead,
  YoungAlive,
  OldAlive
}

interface IProps {
  size: number;
}

const Board: FC<IProps> = (props: IProps) => {
  const uuid = require('uuid/v4');
  const size:number = Math.pow(props.size, 2);
  const board: Cell[][] = new Array(size).fill(Cell.Dead).map(() => new Array(size).fill(Cell.Dead));

  const [cells, setCells] = useState<Cell[][]>(board);

  const presentBoard = () => {
    return cells.map(row => (
      <tr>
        {row.map(cell => (
          <Sc.cell id={uuid()} onClick={handleClick}>{cell}</Sc.cell>
        ))}
      </tr>
    ));
  };

  const handleClick = (e: React.MouseEvent) => {
      //left click = add a cell
      if(e.type === 'click') {
          console.log('left',e.currentTarget.textContent)
          // return setCells([...cells, [false]])
        // } else if (e.type === 'contextmenu') {
        //     // right click = remove a cell
        //     e.preventDefault()
        // return cells[cells.length - 1].splice(0, 1)
      }

  }

  const calculateNeighbors = (board: Cell[][], x:number, y:number) => {
    let neighbors = 0;
    const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
    for (let i = 0; i < dirs.length; i++) {
        const dir = dirs[i];
        let y1 = y + dir[0];
        let x1 = x + dir[1];
        // if (x1 >= 0 && x1 < board.length && y1 >= 0 && y1 < board.length && board[y1][x1]) {

          if (x1 >= 0 && x1 < board.length && y1 >= 0 && y1 < board.length && board[y1][x1] === Cell.Dead ) {
          // console.log('Here', neighbors, y1, x1, board.length);
          neighbors++;
        }
    }
    return neighbors;
}

  // const runIterator = () => {
  //   let newBoard = this.makeEmptyBoard();
  //   let newCells = board;
  //   console.log("I am runned!", cells === board);
    
  //   for (let y = 0; y < newCells.length; y++) {
  //       for (let x = 0; x < newCells[y].length; x++) {
  //           let neighbors = calculateNeighbors(newCells, x, y);
  //           if (newCells[y][x] == false) {
  //               if (neighbors === 2 || neighbors === 3) {
  //                 newCells[y][x] = true;
  //                 console.log("Newighbours ", newCells[y][x])
  //               } else {
  //                 newCells[y][x] = false;
  //               }
  //           } else {
  //               if (newCells[y][x] && neighbors === 3) {
  //                 newCells[y][x] = true;
  //               }
  //           }
  //       }
  //   }
  //   console.log("Here", newCells === board)
  //   setCells(newCells)
  //   return presentBoard()
  // }

  const runIterator = () => {

    let newBoard: Cell[][] = cells;
    console.log("Start Iteration:", newBoard)
    
    for (let y = 0; y < cells.length; y++) {
      for(let x = 0; x < cells[y].length; x++) {
        // newBoard.push({id: y, status: "cell dead"});
  
        let check = calculateNeighbors(newBoard, x, y);
        //keeps the living cell alive if it has 2 or 3 living neighbors
        if ((cells[y][x] === Cell.YoungAlive || cells[y][x] === Cell.OldAlive) && (check === 3 || check === 2)) {
          console.log("Number of neighbours: ",check);
          newBoard[y][x] = Cell.OldAlive
        }
        //brings the dead cell to life if there are exactly 3 neighbors
        if (cells[y][x] === Cell.Dead && check === 3) {
          newBoard[y][x] = Cell.YoungAlive
        }
    
      }
  
     
    };
    console.log("Finished Iteration", newBoard);
    setCells([...newBoard]);
    return newBoard;
  };
  
  const initialRun = () => {
      let newBoard: Cell[][] = cells;

      for(let y = 0; y<newBoard.length; y++) {
        for(let x = 0; x<newBoard[y].length; x++){
          let DeadOrAliveCell = Math.floor(Math.random() * 2)
          console.log("CELL STATUS: ", y, x, DeadOrAliveCell )
          if (DeadOrAliveCell === Cell.Dead) {
            board[y][x] = Cell.Dead
          } else {
            board[y][x] = Cell.YoungAlive
          }
        }
      }
     setCells([...newBoard])
  }


  return (
    <>
      <Sc.board onContextMenu={handleClick}>
      {presentBoard()}
      </Sc.board >
      <Controller runIterator={runIterator} initialRun={initialRun}/>
      
    </>
  )
  
};

export default Board;

