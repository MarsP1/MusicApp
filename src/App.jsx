import { BrowserRouter, Routes, Route } from 'react-router-dom'

import "./CSS/App.css"

import Home from "./Pages/HomePage.jsx"





function App() {

  return (
    <>
      <div className="AppWindow">
        <div className="TopBar"></div>
        <Home/>
      </div>
    </>
  )
}
export default App
