import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./Pages/Home"
import AdProf from "./Pages/AdProf"
import GrapDesign from "./Pages/GrapDesign"
import SoftDev from "./Pages/SoftDev"
import Portfolio from "./Pages/Portfolio"



function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adprof" element={<AdProf />} />
          <Route path="/grapdesign" element={<GrapDesign />} />
          <Route path="/softdev" element={<SoftDev />} />
          <Route path="/portfolio" element={<Portfolio />} />          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
