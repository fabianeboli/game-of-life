import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Board, { Cell } from './Board';
import * as Sc from './Board.style';
import '../setupTests';
import {render, fireEvent, cleanup, getByRole, getAllByText, getAllByRole} from '@testing-library/react';

describe('Board functionality', () => {
	const size = 2;
	let board: Cell[][];
	let component: any;
	let mockFunction: any; 

	const setUp = () => {
		const component = shallow(<Board size={size} />);
		return component;
	};

	beforeEach(() => {
		board = new Array(size).fill(Cell.Dead).map(() => new Array(size).fill(Cell.Dead));
		component = setUp();
		mockFunction = jest.fn();
	});

	it('renders Board without crashing', () => {
		const wrapper = component.find(`[data-test='Board']`);
		expect(wrapper.length).toBe(1);
	});

	it('renders non-empty board', () => {
		expect(board).not.toBe([] || null || undefined);
	});

	it('renders 2x2 board', () => {
		expect(board.length).toEqual(2);
		expect(board[0].length).toEqual(2);
	});

	it('click creates a new young cell', () => {
		const { container } = render(<Board size={5}/>)
		const deadCell = getAllByText(container, /0/ )[0];
		expect(deadCell.textContent).toBe(String(Cell.Dead))
		
		fireEvent.click(deadCell)
		
		const youngCell = getAllByText(container, /1/ )[0];
		expect(youngCell.textContent).toBe(String(Cell.Young))
	});

	it('fills board with young cells', () => {
		const { getByText ,container } = render(<Board size={2}/>)
		const initialBoard = getAllByRole(container, /table/i)

		fireEvent.click(getByText(/run/i))

		const filledBoard = getAllByRole(container, /table/i)
		expect(filledBoard).not.toBe(initialBoard)

	})

	it('renders generation component', () => {
		const wrapper = component.find(`[data-test='Generation']`);
		expect(wrapper.length).toBe(1);
	});

	it('increments generation component by 1', () => {
		const { getByText } = render(<Board size={size}/>)
		expect(getByText(/Generation/i).textContent).toBe('Generation: 0')

		fireEvent.click(getByText(/Run/i))

		expect(getByText(/Generation/i).textContent).toBe('Generation: 1')
	});
});
