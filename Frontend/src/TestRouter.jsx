import { Routes, Route } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import HomeCarousel from "./components/ui/HomeCarousel";  
import EventCard from "./components/ui/EventCard";
import Footer from "./components/ui/Footer";
import CountdownTimer from "./components/ui/CountdownTimer";
function TestRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navbar/>}></Route>
      <Route path="/home" element={<HomeCarousel/>}></Route>
      <Route path="/card" element={<EventCard/>}></Route>
      <Route path="/Footer" element={<Footer/>}></Route>
      <Route path="/Count" element={<CountdownTimer/>}></Route>

    </Routes>
  );
}

export default TestRouter;
