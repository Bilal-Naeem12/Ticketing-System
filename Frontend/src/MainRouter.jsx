import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
function MainRouter() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<MainPage />}></Route>
      </Routes>
    </div>
  );
}

export default MainRouter;
