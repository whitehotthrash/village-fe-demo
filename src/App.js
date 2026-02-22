import logo from "./logo.svg";
import "./App.css";
import { WelcomePage } from "./pages/WelcomePage";
import styled from "@emotion/styled";
import fern from "./assets/fern.png";

const brandColours = {
  lightGreen: "#f2ffe2",
  appleGreen: "#c1ff72",
  darkGreen: "#7ed957",
  purple: "#8c52ff",
  pink: "#db9dce",
};

const fontFamilies = {
  gotham: "'Gotham', sans-serif",
  robotoCondensed: "'Roboto Condensed', sans-serif",
};

const { gotham, robotoCondensed } = fontFamilies;
const { lightGreen, appleGreen, darkGreen, purple, pink } = brandColours;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${lightGreen};
`;

function App() {
  return (
    <Page>
      <WelcomePage
        fern={fern}
        gotham={gotham}
        robotoCondensed={robotoCondensed}
        lightGreen={lightGreen}
        appleGreen={appleGreen}
        darkGreen={darkGreen}
        purple={purple}
        pink={pink}
      />
    </Page>
  );
}

export default App;
