import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./CSS/App.css";

import Home from "./Pages/HomePage.jsx";
import Player from "./Pages/Player.jsx";


function App() {
  return (
    <BrowserRouter>
      <div className="AppWindow">
        <div className="TopBar"></div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playlist/:id" element={<Player/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;