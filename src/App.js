import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
const MainApp = styled.div`
  background-color: red;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <MainApp>
        <h1>Hello styled</h1>
      </MainApp>
    </>
  );
}

export default App;
