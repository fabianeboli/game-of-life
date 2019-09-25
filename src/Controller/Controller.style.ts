import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const Controller = styled.div``;

export const Button = styled.button`
  color: ${p => p.theme.title.color};
  background-color: ${p => p.theme.button.background};
  border: none;
  padding: 0.8em;
  margin-right: 0.5em;
  font-size: 1.2em;
  font-weight: 700;
  text-shadow: 0px 0px 2px ${p => p.theme.title.color};

  &:active {
    padding: 0.6em;
  }
`;

export const Input = styled.input`
  color: ${p => p.theme.title.color};
  background-color: ${p => p.theme.button.background};
  border: none;
  margin: 0 0.5em;
  font-size: 1.2em;
  padding: 10px;
  font-weight: 700;
  text-shadow: 0px 0px 2px ${p => p.theme.title.color};
  appearance: textfield;
  text-align: center;
  max-width: 100%;
  width: calc(0.2em + 3vw);
  z-index: 1;

  @media only screen and (max-width: 800px) {
    width: calc(0.3em + 12vw);
  }

`;

export const P = styled.p`
  color: ${p => p.theme.title.color};
  font-size: 1.2em;
  font-weight: 700;
  margin-right: 0.5rem;
  background-color: ${p => p.theme.button.background};
  padding: 3px 10px;
  text-shadow: 0px 0px 2px ${p => p.theme.title.color};
`;
