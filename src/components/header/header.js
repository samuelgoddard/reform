import React from "react"
import { Link } from "gatsby"
import Logo from "../logo/logo"
import Marquee from "react-smooth-marquee"


const Header = ({ noLogo }) => (
  <header className="border-b border-black border-t-10 w-full bg-offwhite fixed top-0 left-0 right-0 z-60 texture-overlay">
    <div className="flex flex-wrap items-center">
      <Link className="text-xs md:text-lg xl:text-xl uppercase font-medium block px-4 md:px-6 xl:px-8 py-4 md:py-5 xl:py-6 mr-auto border-r border-offblack relative overflow-hidden group" activeClassName="nav--active" partiallyActive to="/about">
        <span className="block overflow-hidden relative h-auto md:h-5 xl:h-6 md:my-3px">
          <span className="block transform md:group-hover:-translate-y-1/2 md:group-focus:-translate-y-1/2 transition duration-300 ease-in-out md:-mt-px md:leading-tight">
            <div className="block transform translate">About <div className="hidden xs:inline-block">Us</div></div>
            <div className="hidden md:block">About <div className="hidden xs:inline-block">Us</div></div>
          </span>
          
        </span>
        <span className="absolute bottom-0 left-0 right-0 w-full flex justify-start">
          <span className="block w-0 h-px bg-offblack transition-all duration-700 ease-in-out"></span>
        </span>
      </Link>
      <Link className="block px-2 xs:px-5 mx-auto" to="/">
        
          <span className={`text-xs md:text-lg xl:text-xl uppercase font-medium block px-4 md:px-6 xl:px-8 py-4 md:py-5 xl:py-6 transition ease-in-out duration-1000 absolute top-0 -ml-4 md:-ml-20 lg:-ml-32 ${noLogo ? 'opacity-100' : ' opacity-0' }`}>
            <div className="overflow-hidden w-24 md:w-64 lg:w-84">
              <Marquee velocity={0.035}>
                Rethinking Development&nbsp;&nbsp;
                &bull;&nbsp;&nbsp;Rethinking Development&nbsp;&nbsp;
                &bull;&nbsp;&nbsp;Rethinking Development&nbsp;&nbsp;
                &bull;&nbsp;&nbsp;Rethinking Development&nbsp;&nbsp;
                &bull;&nbsp;&nbsp;Rethinking Development&nbsp;&nbsp;
                &bull;&nbsp;&nbsp;Rethinking Development&nbsp;&nbsp;
                &bull;&nbsp;&nbsp;Rethinking Development&nbsp;&nbsp;
                &bull;&nbsp;&nbsp;Rethinking Development&nbsp;&nbsp;
                &bull;&nbsp;&nbsp;Rethinking Development&nbsp;&nbsp;
                &bull;&nbsp;&nbsp;Rethinking Development&nbsp;&nbsp;
                &bull;&nbsp;&nbsp;Rethinking Development&nbsp;&nbsp;
                &bull;&nbsp;&nbsp;Rethinking Development&nbsp;&nbsp;
                &bull;&nbsp;&nbsp;Rethinking Development&nbsp;&nbsp;
                &bull;&nbsp;&nbsp;Rethinking Development&nbsp;&nbsp;
                &bull;&nbsp;&nbsp;Rethinking Development&nbsp;&nbsp;
                &bull;&nbsp;&nbsp;Rethinking Development&nbsp;&nbsp;
                &bull;&nbsp;&nbsp;Rethinking Development&nbsp;&nbsp;
                &bull;&nbsp;&nbsp;Rethinking Development&nbsp;&nbsp;
                &bull;&nbsp;&nbsp;Rethinking Development&nbsp;&nbsp;
              </Marquee>
            </div>
          </span>
        
          <div className={`w-20 xs:w-24 md:w-32 xl:w-40 transition ease-in-out duration-1000 ${noLogo ? 'opacity-0 ' : 'opacity-100' }`}>
            <Logo />
          </div>
        
      </Link>



      <Link className="text-xs md:text-lg xl:text-xl uppercase font-medium block px-4 md:px-6 xl:px-8 py-4 md:py-5 xl:py-6 ml-auto border-l border-offblack relative overflow-hidden group" activeClassName="nav--active" partiallyActive to="/contact">
        <span className="block overflow-hidden relative h-auto md:h-5 xl:h-6 md:my-3px">
          <span className="block transform md:group-hover:-translate-y-1/2 md:group-focus:-translate-y-1/2 transition duration-300 ease-in-out md:-mt-px md:leading-tight">
            <span className="block transform translate">Contact</span>
            <span className="hidden md:block">Contact</span>
          </span>
        </span>
        <span className="absolute bottom-0 left-0 right-0 w-full flex justify-end">
          <span className="block w-0 h-px bg-offblack transition-all duration-700 ease-in-out"></span>
        </span>
      </Link>

      {/* <Link className="text-base md:text-lg xl:text-xl uppercase font-medium px-4 md:px-6 xl:px-8 py-4 md:py-5 xl:py-6 ml-auto border-l border-offblack relative block" activeClassName="nav--active" to="/contact">
        Contact
        <span className="absolute bottom-0 left-0 right-0 w-full flex justify-end">
          <span className="block w-0 h-px bg-offblack transition-all duration-700 ease-in-out"></span>
        </span>
      </Link> */}
    </div>
  </header>
)

export default Header
