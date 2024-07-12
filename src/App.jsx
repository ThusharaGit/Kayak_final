import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'

// import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Tours from "./components/Tours";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {


  return (
    <>
      <h1 className='text-green-500 text-4xl font-bold' >The Really final Kayak Project!</h1>
      <Router>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" exact />
            <Route path="/about" element={<About />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />  
          </Routes>
          <Footer />
        </Router>
    </>
  )
}

export default App
