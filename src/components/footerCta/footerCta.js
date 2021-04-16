import React from "react"
import { Link, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'

const FooterCta = ({ color }) => {
  let colorClasses = `bg-black text-offwhite `
  let colorBorderClasses = `border-offwhite `

  if (color === "white") {
    colorClasses = `bg-offwhite text-offblack `
    colorBorderClasses = `border-offblack `
  }

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "footer.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  
  return (
    <div className={ colorClasses + `texture-overlay texture-overlay--dark relative` }>
      <div className="bg-gradient-to-b w-full h-84 block from-black to-transparent absolute top-0 left-0 right-0 z-10 opacity-100"></div>

      <div className="bg-gradient-to-t w-full h-64 block from-black via-black to-transparent absolute bottom-0 left-0 right-0 z-10 opacity-75"></div>

      <div className="absolute inset-0 opacity-20 z-0">
        <Img fluid={data.file.childImageSharp.fluid} alt="Footer Image" className="opacity-50 object-cover object-center w-full h-full" />
      </div>

      <div className="container relative z-20">
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
