import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./Pages/Home"
import AdProf from "./Pages/AdProf"
import GrapDesign from "./Pages/GrapDesign"
import Frontend from "./Pages/Frontend"
import Portfolio from "./Pages/Portfolio"
import Contact from "./Pages/Contact";



function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adprof" element={<AdProf />} />
          <Route path="/grapdesign" element={<GrapDesign />} />
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />              
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
