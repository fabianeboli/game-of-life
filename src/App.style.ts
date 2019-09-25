import styled, { createGlobalStyle, keyframes } from "styled-components";

const flicker = keyframes`
  0% {
  opacity: 0.27861;
  }
  5% {
  opacity: 0.34769;
  }
  10% {
  opacity: 0.23604;
  }
  15% {
  opacity: 0.90626;
  }
  20% {
  opacity: 0.18128;
  }
  25% {
  opacity: 0.83891;
  }
  30% {
  opacity: 0.65583;
  }
  35% {
  opacity: 0.67807;
  }
  40% {
  opacity: 0.26559;
  }
  45% {
  opacity: 0.84693;
  }
  50% {
  opacity: 0.96019;
  }
  55% {
  opacity: 0.08594;
  }
  60% {
  opacity: 0.20313;
  }
  65% {
  opacity: 0.71988;
  }
  70% {
  opacity: 0.53455;
  }
  75% {
  opacity: 0.37288;
  }
  80% {
  opacity: 0.71428;
  }
  85% {
  opacity: 0.70419;
  }
  90% {
  opacity: 0.7003;
  }
  95% {
  opacity: 0.36108;
  }
  100% {
  opacity: 0.24387;
  }
`;
export const GlobalStyle = createGlobalStyle`

body, html {
    @import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');    
    height: 100%;
    width: 100%;
    background-color: #030003;
  }
`;

export const Game = styled.div`
  background-color: ${p => p.theme.background};
  text-align: center;

  &::before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(
        rgba(18, 16, 16, 0) 50%,
        rgba(0, 0, 0, 0.05) 50%
      ),
      linear-gradient(
        90deg,
        rgba(255, 0, 0, 0.01),
        rgba(0, 255, 0, 0.01),
        rgba(0, 0, 255, 0.01)
      );
    z-index: 2;
    background-size: 100% 2px, 3px 100%;
    pointer-events: none;
  }

  &::after {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(18, 16, 16, 0.1);
    opacity: 0;
    z-index: 2;
    pointer-events: none;
    animation: ${flicker} 0.15s infinite;
  }
`;

export const title = styled.h1`
  color: ${p => p.theme.title.color};
  font-size: 3.5em;
  font-family: "Press Start 2P", cursive;
  background-color: ${p => p.theme.title.background};
  display: flex;
  justify-content: center;
  margin: 1% 35%;
  padding: 0.4em;
  text-shadow: 0px 0px 8px ${p => p.theme.title.color};

  @media only screen and (max-width: 800px) {
    font-size: 1.2em;
    /* padding: 10px; */
  }
`;

