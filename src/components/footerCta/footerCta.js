import React from "react"
import { Link } from "gatsby"

const FooterCta = ({ color }) => {
  let colorClasses = `bg-black text-offwhite `
  let colorBorderClasses = `border-offwhite `

  if (color === "white") {
    colorClasses = `bg-offwhite text-offblack `
    colorBorderClasses = `border-offblack `
  }
  
  return (
    <div className={ colorClasses }>
      <div className="container">
        <div className="flex items-center justify-center h-screen max-h-90screen">
          <div className="w-full text-center -mt-12 md:-mt-16">
            <div className="w-4 relative mx-auto mb-8 md:mb-12">
              <div className="w-px h-12 md:h-16"></div>
              <div className="w-3 h-3 -ml-1 rounded-full absolute bottom-0 left-0"></div>
            </div>
            <h2 className="max-w-4xl mx-auto mb-8 md:mb-12">Looking for a <span className="italic">partner</span> for your next development?</h2>

            <Link to="/contact" className={ colorBorderClasses + `text-base md:text-lg xl:text-xl uppercase text-center inline-block mx-auto font-medium border-b-2`}>Get in touch</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterCta
