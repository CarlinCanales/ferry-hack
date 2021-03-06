import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Lato', sans-serif;
    background: #0098e4;
    overflow: hidden;
  }

  html,
  body,
  #__next {
    height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    user-select: none;
  }

`;
