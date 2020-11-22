import React from "react"
import { Link } from "gatsby"
import Logo from "../components/Logo"

const Header = () => (
  <header className="border-b border-black border-t-10 w-full bg-offwhite fixed top-0 left-0 right-0 z-30">
    <div className="flex flex-wrap items-center">
      <Link className="text-base md:text-lg xl:text-xl uppercase font-medium block px-4 md:px-6 xl:px-8 py-4 md:py-5 xl:py-6 mr-auto border-r border-offblack relative" activeClassName="nav--active" to="/about">
        About Us
        <span className="absolute bottom-0 left-0 right-0 w-full flex justify-start">
          <span className="block w-0 h-px bg-offblack transition-all duration-700 ease-in-out"></span>
        </span>
      </Link>
      <Link className="block px-5 mx-auto -mt-1" to="/">
        <Logo />
      </Link>
      <Link className="text-base md:text-lg xl:text-xl uppercase font-medium px-4 md:px-6 xl:px-8 py-4 md:py-5 xl:py-6 ml-auto border-l border-offblack relative block" activeClassName="nav--active" to="/contact">
        Contact
        <span className="absolute bottom-0 left-0 right-0 w-full flex justify-end">
          <span className="block w-0 h-px bg-offblack transition-all duration-700 ease-in-out"></span>
        </span>
      </Link>
    </div>
  </header>
)

export default Header
