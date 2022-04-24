import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import wallpaperImg from '@asset/img/wallpaper.jpg';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    width:100%;
    height:100vh;
    font-family: "NanumSquareRound";
  }

  body
  , #app {
    background-image: url('${wallpaperImg}');
    background-size: cover;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
