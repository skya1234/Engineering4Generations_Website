import { useState } from 'react'
import NavigationBar from "./pages/NavigationBar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Team from "./pages/Team";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';





function App() {
  return (
    <>
    <div className = "App">     
    <Router >
        
        <NavigationBar/>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/about" element = {<AboutUs />}/>
          <Route path = "/team" element = {<Team/>}/>
        </Routes>       
      </Router>
    </div>
    </>
  )
}

export default App
