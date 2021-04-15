import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer/footer"
import { graphql } from "gatsby"
import { motion } from 'framer-motion'
import Scroll from "../components/locomotiveScroll"
import { fade } from "../helpers/transitionHelper"
import NumberShape from "../components/numberShape"
// import Img from "gatsby-image"

const ContactPage = ({ data: { about }, location}) => {
  return (
    <>
      <SEO
        titleOverride={"Contact"}
        descriptionOverride={null}
        pathnameOverride={location.pathname}
        imageOverride={null}
      />

      <Scroll callback={location} />

      <div className="md:h-screen  flex flex-wrap flex-col">
        <motion.section
          initial="initial"
          className="flex-1 bg-offwhitelight"
          animate="enter"
          exit="exit"
        >
          <div className="grid md:grid-cols-12 pt-16 md:pt-16 xl:pt-20 relative h-full">
            <div className="absolute top-0 left-0 right-0 bottom-0" id="pinned-pane"></div>

            <motion.div variants={fade} className="md:col-span-4 xl:col-span-4 2xl:col-span-3 relative overflow-hidden">

              <span className="top-0 left-0 md:absolute block p-6">
                <NumberShape number="C" />
              </span>
              <span className="bottom-0 left-0 md:absolute block max-w-xs p-6 pb-12 xl:text-lg">
                <span className="block mb-3 md:mb-10">
                  <span className="text-base md:text-lg xl:text-xl uppercase font-medium block">
                  <span className="inline-block transform rotate-90">↳</span> Get in touch</span>
                </span>
                Reform<br/>
                The Old Farmhouse<br/>
                Bunnison Lane<br/>
                Colston Bassett<br/>
                Nottinghamshire<br/>
                NG12 3FF<br/><br/>
                hello@reformco.co.uk<br/>
                +44 115 9463 227
              </span>
            </motion.div>

            <motion.div variants={fade} className="md:col-span-8 xl:col-span-8 2xl:col-span-9 relative z-30 md:border-l border-black pb-24 md:pb-0">
              <div className="max-w-4xl content relative h-full bg-red">                
                <div className="p-6 md:p-16 xl:p-20 relative z-10 flex flex-wrap items-center h-full">
                  <div className="w-full">
                    <h1 className="h2 mb-8 md:mb-12 xl:mb-16">Looking for a partner for your next development?</h1>
                    
                    <form className="block w-full max-w-xl">
                      <input type="text" className="bg-offwhitelight focus:bg-offwhite font-sans py-3 border-b-2 border-black text-lg md:text-xl xl:text-2xl focus:outline-none hover:outline-none w-full block mb-3 md:mb-5" placeholder="Name *" required />
                      <input type="email" className="bg-offwhitelight focus:bg-offwhite font-sans py-3 border-b-2 border-black text-lg md:text-xl xl:text-2xl focus:outline-none hover:outline-none w-full block mb-3 md:mb-5" placeholder="Email *" required />
                      <input type="tel" className="bg-offwhitelight focus:bg-offwhite font-sans py-3 border-b-2 border-black text-lg md:text-xl xl:text-2xl focus:outline-none hover:outline-none w-full block mb-3 md:mb-5" placeholder="Phone" required />
                      <textarea rows="3" className="bg-offwhitelight focus:bg-offwhite font-sans py-3 border-b-2 border-black text-lg md:text-xl xl:text-2xl focus:outline-none hover:outline-none w-full block mb-6 md:mb-12" placeholder="Project Details" />

                      <button type="submit" className="focus:outline-none hover:outline-none text-base md:text-lg xl:text-xl uppercase font-medium block border-b border-black">Send Details</button>
                    </form>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          initial="initial"
          className=""
          animate="enter"
          exit="exit"
        >
          <div>
            <motion.div variants={fade} className="-mt-5 relative z-50">
              <Footer hideCta color="white" />
            </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  )
}

export default ContactPage

export const query = graphql`
  query ContactQuery {
    about: datoCmsAbout {
      title
      image {
        fluid(imgixParams: { w: "1400", h: "1500", fit: "fillmax", crop: "center", sat: -100 }) {
          ...GatsbyDatoCmsFluid
        }
      }
      slug
    }
  }
`