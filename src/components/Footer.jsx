import { Link } from "react-router-dom";

import logo_small from "../images/Logo_short.svg";

function Footer() {

  return (
    <footer className="bg-footer-bg text-main-text-light pt-30 md:pt-0 w-full p-4">

      <div className="md:hidden flex justify-center items-center h-full">
        <img src={logo_small} alt="" className="max-w-full max-h-full object-contain" />
      </div>
      {/* flex container of sitemap, box and contact */}
      <div className="flex flex-col md:flex-row py-4 md:pb-0 md:pt-8">
        {/* sitemap */}
        <div className="md:w-1/4 ">
          <h2 className="text-lg font-bold text-center py-4">SITE MAP</h2>
          <nav className="flex flex-col space-y-2 text-center ">
            <Link to="/" className="">Home</Link>
            <Link to="/about" className="">About</Link>
            <Link to="/tours" className="">Tours</Link>
            <Link to="/faq" className="">FAQs</Link>
          </nav>
        </div>
        {/* box */}
        <div className="w-full md:w-1/2 py-4 ">
          <div className="mx-auto bg-gradient-to-b from-[#3B4B41] via-[#3F4E46] to-transparent h-[120px] sm:h-[180px] w-4/5 rounded-lg flex flex-col items-center justify-center space-y-2 text-center">
            <p>Designed and developed for PaddleXplorer</p>
            <p>by <span className="text-lg font-bold">ReDI School</span></p>
            <p>in Munich, Germany</p>
          </div>

        </div>
        {/* conatct us */}
        <div className="mx-auto py-4 items-center md:w-1/4">
          <h2 className=" text-lg font-bold">
            <Link to="/contact" >
            CONTACT US
            </Link>
            
            </h2>
          <p>Clubul Copiilor Năsăud</p>
          <p>DN17C 9, Nasaud 425200,</p>
          <p>Romania</p>
          <div className="flex items-center">
            <ion-icon name="mail" className="text-lg mr-2"></ion-icon>
            <p>club_nasaud@yahoo.com</p>
          </div>
          <div className="flex items-center">
            <ion-icon name="call" className="text-lg mr-2"></ion-icon>
            <p>+040263361447</p>
          </div>
        </div>

      </div>
      {/* copyrigt */}
      <div className="w-full py-2">
        <p className="text-center">Copyright © 2024. All rights reserved.</p>
      </div>


      
    </footer>
  )
}

export default Footer

