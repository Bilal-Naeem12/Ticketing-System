import { Routes, Route } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import HomeCarousel from "./components/ui/HomeCarousel";  
import EventCard from "./components/ui/EventCard";
function TestRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navbar/>}></Route>
      <Route path="/Home" element={<HomeCarousel/>}></Route>
      <Route path="/card" element={<EventCard/>}></Route>

    </Routes>
  );
}

export default TestRouter;
