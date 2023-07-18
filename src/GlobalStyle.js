import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: 'Alkatra', sans-serif;
  }

  *::before, ::after {
      box-sizing: inherit;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    color: #ffff;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(23,23,122,1) 50%, rgba(2,0,36,1) 100%);
  }
`;
