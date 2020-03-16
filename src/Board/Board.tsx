import React, { FC, useState } from 'react';
import * as Sc from './Board.style';
import Controller from '../Controller/Controller';
import { ThemeProvider } from 'styled-components';
import theme from '../theme.style';

export enum Cell {
	Dead,
	Young,
	Old,
}

interface IProps {
	size: number;
}

const Board: FC<IProps> = (props: IProps) => {
	const uuid = require('uuid/v4');
	const size: number = Math.pow(props.size, 2);
	const board: Cell[][] = Array(size)
		.fill(Cell.Dead)
		.map(() => Array(size).fill(Cell.Dead));

	const [cells, setCells] = useState<Cell[][]>(board);
	const [generation, setGeneration] = useState<number>(0);

	const presentBoard = (cellsArray: Cell[][] = cells) => {
		return cellsArray.map((row, y) => (
			<Sc.Row>
				{row.map((cell, x) => {
					const cellStatus: string =
						cell === Cell.Dead ? 'dead' : cell === Cell.Young ? 'young' : 'old';
					return (
						<Sc.Cell
							className={cellStatus}
							key={uuid()}
							id={`${y}:${x}`}
							onClick={handleClick}
						>
							{cell}
						</Sc.Cell>
					);
				})}
			</Sc.Row>
		));
	};

	const handleClick = async (e: any) => {
		const newBoard: Cell[][] = cells;
		const [y, x] = e.target.id.split(':');
		if (x !== undefined && y !== undefined && cells[y][x] !== Cell.Young) {
			newBoard[y][x] = Cell.Young;
		}
		return await setCells([...newBoard]);
	};

	const resetBoard = () => {
		setCells([...board]);
		setGeneration(0);
	};

	const findNeighbors = (board: Cell[][], x: number, y: number) => {
		let neighbors: number = 0;
		const dirs: number[][] = [
			[-1, -1],
			[-1, 0],
			[-1, 1],
			[0, 1],
			[1, 1],
			[1, 0],
			[1, -1],
			[0, -1],
		];
		for (let i = 0; i < dirs.length; i++) {
			const dir: number[] = dirs[i];
			let y1: number = y + dir[0];
			let x1: number = x + dir[1];

			if (
				x1 >= 0 &&
				x1 < board.length &&
				y1 >= 0 &&
				y1 < board.length &&
				board[y1][x1] !== Cell.Dead
			) {
				neighbors++;
			}
		}
		return neighbors;
	};

	const runIterator = () => {
		setGeneration(generation => generation + 1);
		let newBoard: Cell[][] = cells;

		for (let y = 0; y < newBoard.length; y++) {
			for (let x = 0; x < newBoard[y].length; x++) {
				const neighbors: number = findNeighbors(newBoard, x, y);
				// Any live cell with fewer than two live neighbours dies, as if by underpopulation.
				if (newBoard[y][x] !== Cell.Dead && neighbors < 2) {
					newBoard[y][x] = Cell.Dead;
				}
				// Any live cell with two or three live neighbours lives on to the next generation.
				else if (newBoard[y][x] !== Cell.Dead && (neighbors === 3 || neighbors === 2)) {
					newBoard[y][x] = Cell.Old;
				}
				// Any live cell with more than three live neighbours dies, as if by overpopulation.
				else if (newBoard[y][x] !== Cell.Dead && neighbors > 3) {
					newBoard[y][x] = Cell.Dead;
				}
				// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
				else if (newBoard[y][x] === Cell.Dead && neighbors === 3) {
					newBoard[y][x] = Cell.Young;
				}
			}
		}
		setCells([...newBoard]);
	};

	const initialRun = () => {
		setGeneration(generation => generation + 1);
		let newBoard: Cell[][] = cells;
		for (let y = 0; y < newBoard.length; y++) {
			for (let x = 0; x < newBoard[y].length; x++) {
				const deadOrCell: Cell = Math.floor(Math.random() * 1.1);
				if (deadOrCell === Cell.Dead) {
					newBoard[y][x] = Cell.Dead;
				} else {
					newBoard[y][x] = Cell.Young;
				}
			}
		}
		setCells([...newBoard]);
	};

	return (
		<>
			<ThemeProvider theme={theme}>
				<>
					<Sc.Board data-test="Board" onClick={handleClick}>
						{presentBoard()}
					</Sc.Board>
					<Controller
						runIterator={runIterator}
						initialRun={initialRun}
						resetBoard={resetBoard}
					/>
					<Sc.Generation data-test="Generation">Generation: {generation}</Sc.Generation>
				</>
			</ThemeProvider>
		</>
	);
};

export default Board;
