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
      <Router>
        <Navbar />
        <GradientButton text="Reserve Now" route="/tours" />
        <BlackButton text="Reserve Now" route="/about" />
        <ScrollButton />
        <img src={Logo_short} alt="logo short" />
        <GradientCircle size="small" text1="72" text2="children" />
        <GradientCircle size="big" text1="26" text2="trips" />
        <GradientText text="EMPOWERING"/>
        <MoreButton text="Learn more" route="/about" />
        <ScrollTextButton />
        

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
  );
}

export default App;
