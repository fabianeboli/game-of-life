import styled, { createGlobalStyle } from 'styled-components';

const backgroundColor = (p: { theme: { background: string; }; }) => p.theme.background

export const GlobalStyle = createGlobalStyle`
body, html {
    height: 100%;
    width: 100%;
    background-color: #030003;
  }
`

export const Game = styled.div`
  background-color: ${p => p.theme.background};
  text-align: center; 

` 

export const title = styled.h1`
  color: ${p => p.theme.cell.young};
  font-size: 3.5em;
`

// .App {
//   text-align: center;
// }

// .App-logo {
//   animation: App-logo-spin infinite 20s linear;
//   height: 40vmin;
//   pointer-events: none;
// }

// .App-header {
//   background-color: #282c34;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   font-size: calc(10px + 2vmin);
//   color: white;
// }

// .App-link {
//   color: #61dafb;
// }

// @keyframes App-logo-spin {
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// }
