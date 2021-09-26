import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Application from "./components/Application";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log(document.title);
    document.title = `Home - ${document.title}`;
  }, []);
  return (
    <Application>
      <Sidebar />
      <MainContent />
    </Application>
  );
}

export default App;
