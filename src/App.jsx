import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";


import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Tours from "./components/Tours";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Error404 from "./components/Error404";


function App() {
  return (
    <>

      <div className="max-w-[1320px] mx-auto">
      <Router >
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" exact />
            <Route path="/about" element={<About />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} /> 
            <Route path="*" element={<Error404/>} />  
          </Routes>
          <Footer />
        </Router>
        </div>

    </>
  );
}

export default App;
