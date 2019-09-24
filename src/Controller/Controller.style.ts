import { title } from './../App.style';
import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;
`

export const Controller = styled.div`
`

export const Button = styled.button`
    color: ${p => p.theme.title.color};
    background-color: ${p => p.theme.button.background};
    border: none;
    padding: 14px;
    margin-right: 0.5rem;
    font-size: 1.2em;
    font-weight: 700;
    text-shadow: 0px 0px 2px ${p => p.theme.title.color};

    &:active {
        padding: 10px;
    }
` 

export const Input = styled.input`
    color: ${p => p.theme.title.color};
    background-color: ${p => p.theme.button.background};
    border: none;
    /* padding: 15px; */
    margin: 0.5rem;
    font-size: 1.2em;
    font-weight: 700;
    text-shadow: 0px 0px 2px ${p => p.theme.title.color};
    appearance: textfield;
    text-align: center;
    max-width: 2.5vw;
`

export const P = styled.p`
    color: ${p => p.theme.title.color};
    font-size: 1.2em;
    font-weight: 700;
    margin-right: 0.5rem;
    background-color: ${p => p.theme.button.background};
    padding: 3px 10px;
    text-shadow: 0px 0px 2px ${p => p.theme.title.color};
`

