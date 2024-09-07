import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventPage from "./pages/EventDetailPages";
import CreateEventpage from "./pages/CreateEventpage";
function MainRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/event/:id" element={<EventPage />}></Route>
        <Route path="/event" element={<CreateEventpage />}></Route>
      </Routes>
    </div>
  );
}

export default MainRouter;
