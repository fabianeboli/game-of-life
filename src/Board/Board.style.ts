import styled from 'styled-components'

export const Board = styled.table`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    /* border: 5px solid ${p => p.theme.border}; */
    width: 100%;
    margin: 0 auto;
    border-collapse: collapse;
`

export const Generation = styled.div`
    color: ${p => p.theme.font};
    font-size: 1.75em;
    border: 2px solid ${p => p.theme.button.background};
    padding: 10px;
    margin: 0 42vw;
    text-align: center;
`
export const Row = styled.tr`
    
    &:first-of-type {
        border-left: 5px solid ${p => p.theme.border};
    }

    &:last-of-type {
        border-right: 5px solid ${p => p.theme.border};
    }
`


export const Cell = styled.td`
    background-color: black;
    color: transparent;
    padding: 20px;
    width: 33.33%;
    border: 1px solid ${p => p.theme.background};
    /* margin: 0.1em; */
    max-width: 10px;
    display: flex;

    &:first-of-type {
        border-top: 4px solid ${p => p.theme.border};
        border-collapse: collapse;
    }

    &:last-of-type {
        border-bottom: 4px solid ${p => p.theme.border};
        border-collapse: collapse;
    }

    &.dead {
        background-color: ${p => p.theme.cell.dead};
    }

    &.young {
        background-color: ${p => p.theme.cell.young};
    }

    &.old {
        background-color: ${p => p.theme.cell.old};
    }
`

