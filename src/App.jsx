import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./CSS/App.css";

import Home from "./Pages/HomePage.jsx";


function App() {
  return (
    <BrowserRouter>
      <div className="AppWindow">
        <div className="TopBar"></div>

        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;