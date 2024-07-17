import logo_small from "../images/Logo_short.svg";

function Footer() {

  return (
    <footer className="bg-footer-bg text-main-text-light pt-30 md:pt-0 w-full p-4">

      <div className="md:hidden flex justify-center items-center h-full">
        <img src={logo_small} alt="" className="max-w-full max-h-full object-contain" />
      </div>
      {/* flex container of sitemap, box and contact */}
      <div className="ring-2 ring-red flex flex-col md:flex-row py-4 md:py-0">
        {/* sitemap */}
        <div className="md:w-1/4 ">
          <h2 className="text-lg font-bold text-center py-4">SITE MAP</h2>
          <nav className="flex flex-col space-y-2 text-center ">
            <a href="/" className="hover:text-gray-300">Home</a>
            <a href="./About" className="hover:text-gray-300">About</a>
            <a href="./Trips" className="hover:text-gray-300">Tours</a>
            <a href="./FAQs" className="hover:text-gray-300">FAQs</a>
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
          <h2 className=" text-lg font-bold">CONTACT US</h2>
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
      <div className="w-full py-4">
        <p className="text-center">Copyright © 2023. All rights reserved.</p>
      </div>


      
    </footer>
  )
}

export default Footer

