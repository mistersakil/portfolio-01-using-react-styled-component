import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Application from "./components/Application";
import "./components/FontAwesomeIcons";
function App() {
  return (
    <Application>
      <Sidebar />
      <MainContent />
    </Application>
  );
}

export default App;
