import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: 'Belanosima', sans-serif;
  }

  *::before, ::after {
      box-sizing: inherit;
  }

  body {
    color: #ffff;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(23,23,122,1) 50%, rgba(2,0,36,1) 100%);
  }
`;
