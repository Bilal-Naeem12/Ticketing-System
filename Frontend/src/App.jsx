import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainRouter from "./MainRouter";
import TestRouter from "./TestRouter";
import Navbar from "./components/ui/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/*" element={<MainRouter />}></Route>
        <Route path="/test/*" element={<TestRouter />}></Route>
      </Routes>
    </>
  );
}

export default App;
