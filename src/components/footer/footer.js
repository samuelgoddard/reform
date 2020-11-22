import React from "react"
import { Link } from "gatsby"
import FooterCta from "../footerCta/footerCta"

const Footer = ({ color, hideCta }) => {
  let colorClasses = `bg-black text-offwhite texture-overlay texture-overlay--dark `
  let colorBorderClasses = `border-offwhite `

  if (color === "white") {
    colorClasses = `bg-offwhite text-offblack texture-overlay `
    colorBorderClasses = `border-black `
  }

  return (
    <>
      { !hideCta ? (
        <FooterCta color={ color }/>
      ) : (<></>)}

      <footer className={ colorClasses + colorBorderClasses + `border-t w-full `}>
        <div className="flex flex-wrap items-center">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={ colorBorderClasses + `text-sm md:text-lg xl:text-xl uppercase font-medium block px-4 md:px-6 xl:px-8 py-4 md:py-5 xl:py-6 border-r`}>
            Insta<span className="hidden md:inline">gram</span>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={ colorBorderClasses + `text-sm md:text-lg xl:text-xl uppercase font-medium block px-4 md:px-6 xl:px-8 py-4 md:py-5 xl:py-6 mr-auto border-r`} to="/about">
            Twitter
          </a>
          <span className="text-sm md:text-lg xl:text-xl uppercase font-medium px-4 md:px-6 xl:px-8 py-4 md:py-5 xl:py-6 mx-auto text-center hidden xl:block">
            Development done <span className="italic">differently</span>
          </span>
          <Link className={ colorBorderClasses + `text-sm md:text-lg xl:text-xl uppercase font-medium block px-4 md:px-6 xl:px-8 py-4 md:py-5 xl:py-6 ml-auto border-l`} to="/contact">
            Privacy <span className="hidden md:inline">Policy</span>
          </Link>
          <span className={ colorBorderClasses + `text-sm md:text-lg xl:text-xl uppercase font-medium block px-4 md:px-6 xl:px-8 py-4 md:py-5 xl:py-6 border-l`}>
            &copy;2020
          </span>
        </div>
      </footer>
    </>
  )
}

export default Footer
