import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import RandomPic from "./pages/RandomPic";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="login" element={<Loginpage />} />
        <Route path="random" element={<RandomPic />} />
      </Routes>
    </>
  );
}

export default App;
