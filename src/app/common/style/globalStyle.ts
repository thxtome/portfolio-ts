import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    width:100%;
    height:100vh;
    font-family: "NanumSquareRound";
  }

  body
  , #app {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
