import { AppRoutes } from './pages/routes';
import { createGlobalStyle } from 'styled-components';
import PixeloidSans from './fonts/PixeloidSans-mLxMm.ttf';
import PixeloidSansBold from './fonts/PixeloidSansBold-PKnYd.ttf'

function App() {
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  overflow-x: hidden;
  box-sizing: border-box; 
  font-family: 'Pixeloid', sans-serif;
}

body {
  height: 100vh;
  width: 100vw;
  text-align: center;
  overflow-x: visible;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: black;
}

::-webkit-scrollbar-thumb {
  background: green;
  background-clip: padding-box;  
}

::-webkit-scrollbar-thumb:hover {
  background: blue;
}

@font-face {
  font-family: 'Pixeloid';
  src: url(${PixeloidSans}) format('truetype');
  font-weight: 800;
  font-style: regular;
}

@font-face {
  font-family: 'PixeloidBold';
  src: url(${PixeloidSansBold}) format('truetype');
  font-weight: 800;
  font-style: bold;
}
`

export default App;
