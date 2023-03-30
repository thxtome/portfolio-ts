import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import wallpaperImg from '@asset/img/wallpaper.jpg';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    width:100%;
    height:100vh;
    font-family: "NanumSquare";
  }

  body
  , #app {
    background-image: url('${wallpaperImg}');
    background-size: cover;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }
`;

export default GlobalStyle;
