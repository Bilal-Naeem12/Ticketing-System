import { Routes, Route } from "react-router-dom";
import Test from "./components/ui/Test";
function TestRouter() {
  return (
    <Routes>
      <Route path="/" element={<Test />}></Route>
    </Routes>
  );
}

export default TestRouter;
