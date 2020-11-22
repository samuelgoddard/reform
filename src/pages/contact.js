import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer/footer"
import { graphql } from "gatsby"
import { motion } from 'framer-motion'
import Scroll from "../components/locomotiveScroll"
import { fade } from "../helpers/transitionHelper"
import Motif from "../components/motif"
import Img from "gatsby-image"

const ContactPage = ({ data: { about }, location}) => {
  return (
    <>
      <SEO title={about.title} />

      <Scroll callback={location} />
      <div className="md:h-screen  flex flex-wrap flex-col">
        <motion.section
          initial="initial"
          className="flex-1"
          animate="enter"
          exit="exit"
        >
          <div className="grid md:grid-cols-2 pt-16 md:pt-16 xl:pt-20 relative h-full">
            <div className="absolute top-0 left-0 right-0 bottom-0" id="pinned-pane"></div>

            <motion.div variants={fade} className="md:col-span-1 flex items-center justify-center relative py-32 md:py-0 overflow-hidden">
              <h1 className="text-center uppercase mb-0 pb-0 md:-mt-16 xl:-mt-20 relative z-10">Contact<br/>Us</h1>
              <div className="top-0 left-0 right-0 bottom-0 absolute h-full z-0 flex items-center justify-center">
                <Motif classList={"w-1/2 md:-mt-16 xl:-mt-20 animate-coin"} />
              </div>

              <span className="top-0 left-0 absolute block max-w-xs p-8 pt-10 xl:text-lg">44 Wade Lane<br/>Salford Priors<br/>Nottingham<br/>NG11 2JR</span>

              <span className="bottom-0 left-0 absolute block max-w-xs p-8 pb-12 xl:text-lg">hello@reformco.co.uk<br/>+44 115 9463 227</span>
            </motion.div>

            <motion.div variants={fade} className="md:col-span-1 bg-black text-white relative z-30 texture-overlay texture-overlay--dark">
              <div className="max-w-3xl content relative h-full bg-red">
                <div className="absolute top-0 left-0 right-0 z-0">
                  <Img fluid={ about.image.fluid } className="w-full max-h-75screen object-cover object-center opacity-20 h-screen mb-0 pb-0" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-64"></div>
                </div>
                
                <div className="p-8 md:p-16 xl:p-20 relative z-10 flex flex-wrap items-center h-full">
                  <div className="w-full">
                    <h3>Looking for a partner for your next development?</h3>
                    
                    <p className="w-11/12 md:w-10/12 lg:w-8/12 xl:w-7/12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in urna eget mi tristique malesuada. Aliquam eu est in neque feugiat sodales sed nec nibh. Duis quis commodo nisl. Aliquam a convallis orci. Integer mauris libero, tincidunt eget est congue, commodo malesuada enim. Integer congue.</p>
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