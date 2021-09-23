import styled from "styled-components";
import Sidebar from "./components/Sidebar";
const MainApp = styled.div`
  position: relative;
`;

function App() {
  return (
    <>
      <MainApp>
        <Sidebar />
      </MainApp>
    </>
  );
}

export default App;
