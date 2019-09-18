import React, { FC } from 'react'
import * as Sc from './Board.style'

interface IProps {
    size: number
}

const Board:FC<IProps> = (props:IProps) => {
    const size = Math.pow(3, 2);
    const board = Array(size).fill(
      <tr>{Array(size).fill(<Sc.cell></Sc.cell>)}</tr>
    )

    // const presentBoard = () => {
    //     const tr = document.createElement('tr');
    //     const td = document.createElement('td');

    //     let board:any[] = []; 
    //     for(let i = 0; i< props.size; i++) {
    //         board.push(<tr></tr>)
    //         for(let j = 0;j<props.size; j++) {
    //             board.push(<td></td>)
    //         }
    //     }
    // }

    return (
        <>
        <Sc.board>
            <tr></tr>
            {board}
        </Sc.board>
        </>
    )
}

export default Board
