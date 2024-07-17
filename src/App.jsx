import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import GradientButton from "./components/general/GradientButton";
import BlackButton from "./components/general/BlackButton";
import GradientCircle from "./components/general/GradientCircle";
import GradientText from "./components/general/GradientText";
import MoreButton from "./components/general/MoreButton";
import ScrollTextButton from "./components/general/ScrollTextButton";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Tours from "./components/Tours";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollButton from "./components/general/ScrollButton";

import Logo_short from "./images/Logo_short.svg";

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
          </Routes>
          <Footer />
        </Router>
        </div>

    </>
  );
}

export default App;
