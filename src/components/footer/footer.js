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
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={ colorBorderClasses + `text-sm md:text-lg xl:text-xl uppercase font-medium block px-4 md:px-6 xl:px-8 py-4 md:py-5 xl:py-6 border-r group`}>
            <span className="block overflow-hidden relative h-auto md:h-5 xl:h-6 md:my-3px">
              <span className="block transform md:group-hover:-translate-y-1/2 md:group-focus:-translate-y-1/2 transition duration-300 ease-in-out md:-mt-px md:leading-tight">
                <span className="block transform translate">Insta<span className="hidden md:inline">gram</span></span>
                <span className="hidden md:block">Insta<span className="hidden md:inline">gram</span></span>
              </span>
            </span>
          </a>

          <span className={ colorBorderClasses + `text-sm md:text-lg xl:text-xl uppercase font-medium px-4 md:px-6 xl:px-8 py-4 md:py-5 xl:py-6 border-r flex items-center`}>
            <span className="mr-2">Site by</span>
            <a target="_blank" rel="noopener noreferrer" className="group leading-none flex" href="https://ijpowell.co.uk">
            <span className="block overflow-hidden relative h-auto md:h-5 xl:h-6 md:my-3px">
              <span className="block transform md:group-hover:-translate-y-1/2 md:group-focus:-translate-y-1/2 transition duration-300 ease-in-out md:-mt-px md:leading-tight">
                <span className="block transform translate">IJP</span>
                <span className="hidden md:block">IJP</span>
              </span>
            </span>
            </a>
            <span className="mx-1">+</span>
            <a target="_blank" rel="noopener noreferrer" className="group leading-none flex" href="https://samgoddard.co.uk">
            <span className="block overflow-hidden relative h-auto md:h-5 xl:h-6 md:my-3px">
              <span className="block transform md:group-hover:-translate-y-1/2 md:group-focus:-translate-y-1/2 transition duration-300 ease-in-out md:-mt-px md:leading-tight">
                <span className="block transform translate">SG</span>
                <span className="hidden md:block">SG</span>
              </span>
            </span>
            </a>
          </span>
          {/* <span className="text-sm md:text-lg xl:text-xl uppercase font-medium px-4 md:px-6 xl:px-8 py-4 md:py-5 xl:py-6 mx-auto text-center hidden xl:block">
            Development done differently
          </span> */}
          <Link className={ colorBorderClasses + `text-sm md:text-lg xl:text-xl uppercase font-medium block px-4 md:px-6 xl:px-8 py-4 md:py-5 xl:py-6 ml-auto border-l group`} to="/privacy">
            <span className="block overflow-hidden relative h-auto md:h-5 xl:h-6 md:my-3px">
              <span className="block transform md:group-hover:-translate-y-1/2 md:group-focus:-translate-y-1/2 transition duration-300 ease-in-out md:-mt-px md:leading-tight">
                <span className="block transform translate">Privacy <span className="hidden md:inline">Policy</span></span>
                <span className="hidden md:block">Privacy <span className="hidden md:inline">Policy</span></span>
              </span>
            </span>
          </Link>
          <span className={ colorBorderClasses + `text-sm md:text-lg xl:text-xl uppercase font-medium block px-4 md:px-6 xl:px-8 py-4 md:py-5 xl:py-6 border-l`}>
            &copy;2021
          </span>
        </div>
      </footer>
    </>
  )
}

export default Footer
