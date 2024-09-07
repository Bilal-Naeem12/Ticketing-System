import { Routes, Route } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import HomeCarousel from "./components/ui/HomeCarousel";  
function TestRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navbar/>}></Route>
      <Route path="/Home" element={<HomeCarousel/>}></Route>

    </Routes>
  );
}

export default TestRouter;
