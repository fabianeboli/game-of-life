import React from 'react';
import ReactDOM from 'react-dom';
import Board, { Cell } from './Board';

describe('Board functionality', () => {
    const size = 5;

    it('renders Board without crashing', () => {
        return(
            <>
                <Board size={size}/>
            </>
        )
    });
    
    it('renders non-empty new board', () => {
        const board: Cell[][] = new Array(size)
        .fill(Cell.Dead)
        .map(() => new Array(size).fill(Cell.Dead));
        
        expect(board).not.toBe([] || null || undefined)
    
    })

    it('renders 2x2 new board', () => {
        
    })
})

