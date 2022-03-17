//asset
import NanumSquareBTtf from "./asset/fonts/NanumSquareB.ttf";
import NanumSquareBWoff from "./asset/fonts/NanumSquareB.woff";

import NanumSquareEBTtf from "./asset/fonts/NanumSquareEB.ttf";
import NanumSquareEBWoff from "./asset/fonts/NanumSquareEB.woff";

import NanumSquareRTtf from "./asset/fonts/NanumSquareR.ttf";
import NanumSquareRWoff from "./asset/fonts/NanumSquareR.woff";

const style = document.createElement("style");
style.textContent = `
@font-face {
  font-family: NanumSquare;
  font-weight: 800;
  src: url("${NanumSquareEBWoff}") format("woff"), 
       url("${NanumSquareEBTtf}") format("truetype");
  letter-spacing: -0.22px;
}

@font-face {
  font-family: NanumSquare;
  font-weight: 600;
  src: url("${NanumSquareBWoff}") format("woff"),
       url("${NanumSquareBTtf}") format("truetype");
  letter-spacing: -0.22px;
}

@font-face {
  font-family: NanumSquare;
  font-weight: 400;
  src: url("${NanumSquareRWoff}") format("woff"), 
       url("${NanumSquareRTtf}") format("truetype");
  letter-spacing: -0.25px;
}`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p style={{ fontFamily: "NanumSquare" }}>Jpark의 Portfolio</p>
      </header>
    </div>
  );
}

export default App;
