import styled from 'styled-components'

export const Board = styled.table`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 auto;
    border-collapse: collapse;
`

export const Generation = styled.div`
    display: flex;
    justify-content: center;
    color: ${p => p.theme.font};
    font-size: 1.75em;
    border: 2px solid ${p => p.theme.button.background};
    padding: 10px;
    margin: 0 42vw;
    text-align: center;
    text-shadow: 0px 0px 2px ${p => p.theme.font};
    font-weight: 700;
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
    padding: 0.5vw;
    font-size: 0.01vh;
    border: 1px solid ${p => p.theme.background};
    max-width: 10px;
    display: flex;

    &:first-of-type {
        border-top: 6px solid ${p => p.theme.border};
    }

    &:last-of-type {
        border-bottom: 6px solid ${p => p.theme.border};
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

