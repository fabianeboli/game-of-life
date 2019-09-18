import styled from 'styled-components'

export const board = styled.table`
    display: flex;
    /* justify-content: */
    justify-content: center;
    flex-wrap: wrap;
`

export const cell = styled.td`
    background-color: black;
    color: white;
    padding: 20px;
    border: 1px solid white;
    max-width: 10px;
    display: flex;
    /* margin: 0 15%; */
`