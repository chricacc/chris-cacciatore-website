import { Route, Routes } from "react-router-dom";
import AppRouter from "./AppRouter";
import Sidebar from "./components/Sidebar";

function App() {

  return (
    <div id="container" className="sm:flex">
      <Sidebar />
      <AppRouter />
    </div>
  )
}

export default App
