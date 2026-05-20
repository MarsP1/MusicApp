import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getCurrentWindow } from "@tauri-apps/api/window";

import "./CSS/App.css";

import Home from "./Pages/HomePage.jsx";
import Player from "./Pages/Player.jsx";


function App() {

  const app = getCurrentWindow();

  return (
    <BrowserRouter>
      <div className="AppWindow">
        <div className="TopBar">
          <button onClick={() => app.close()} className="CloseWindow">✕</button>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playlist/:id" element={<Player/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;