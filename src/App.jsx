import { useState } from 'react'
import NavigationBar from "./pages/NavigationBar";
//import pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Team from "./pages/Team";
import Gallery from "./pages/Gallery";
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
          <Route path = "/gallery" element = {<Gallery/>} />
        </Routes>       
      </Router>
    </div>
    </>
  )
}

export default App
