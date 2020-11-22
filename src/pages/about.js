import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { motion } from 'framer-motion'
import Scroll from "../components/locomotiveScroll"
import { fade } from "../helpers/transitionHelper"
import Motif from "../components/motif"
import Img from "gatsby-image"

const AboutPage = ({ data: { about }, location}) => {
  return (
    <>
      <SEO title={about.title} />

      <Scroll callback={location} />
      
      <motion.section
        initial="initial"
        className=""
        animate="enter"
        exit="exit"
        variants={{
          enter: { transition: { staggerChildren: 0.055 }}
        }}
      >
        <div className="grid md:grid-cols-2">
          <motion.div variants={fade} className="md:col-span-1 md:h-screen flex items-center justify-center relative py-32 md:py-0 overflow-hidden" data-scroll-sticky data-scroll data-scroll-target="#___gatsby">
            <h1 className="text-center uppercase mb-0 pb-0 md:-mt-16 xl:-mt-20 relative z-10">About<br/>Us</h1>
            <div className="top-0 left-0 right-0 bottom-0 absolute h-full z-0 flex items-center justify-center">
              <Motif classList={"w-1/2 md:-mt-16 xl:-mt-20 animate-spin-slow"} />
            </div>

            <span className="top-0 left-0 absolute block max-w-xs p-8 pt-10 xl:text-lg">REFORM is an experienced, full-service agency that provides a range of services for modern building design and development.</span>
          </motion.div>

          <motion.div variants={fade} className="md:col-span-1 bg-black text-white relative z-30">
            <div className="max-w-3xl content">
              <div className="relative z-0">
                <Img fluid={ about.image.fluid } className="w-full max-h-75screen object-cover object-center opacity-20" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-64"></div>
              </div>
              
              <div className="p-8 md:p-12 xl:p-16 -mt-32 relative z-10">
                <h3>Development <span className="block">done</span> <span className="italic block">differently</span></h3>
                
                <p className="w-11/12 md:w-10/12 lg:w-8/12 xl:w-7/12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in urna eget mi tristique malesuada. Aliquam eu est in neque feugiat sodales sed nec nibh. Duis quis commodo nisl. Aliquam a convallis orci. Integer mauris libero, tincidunt eget est congue, commodo malesuada enim. Integer congue commodo nibh, et cursus erat feugiat fermentum. Vestibulum vel faucibus elit, ut sollicitudin massa. Quisque pretium nec magna et blandit. Morbi eu nunc id nisl euismod egestas at ut velit.</p>

                <p className="w-11/12 md:w-10/12 lg:w-8/12 xl:w-7/12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in urna eget mi tristique malesuada. Aliquam eu est in neque feugiat sodales sed nec nibh. Duis quis commodo nisl. Aliquam a convallis orci. Integer mauris libero, tincidunt eget est congue, commodo malesuada enim. Integer congue commodo nibh, et cursus erat feugiat fermentum. Vestibulum vel faucibus elit, ut sollicitudin massa. Quisque pretium nec magna et blandit. Morbi eu nunc id nisl euismod egestas at ut velit.</p>

                <h3>An <span className="block italic">experienced</span> <span className="block">team</span></h3>

                <p className="w-11/12 md:w-10/12 lg:w-8/12 xl:w-7/12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in urna eget mi tristique malesuada. Aliquam eu est in neque feugiat sodales sed nec nibh. Duis quis commodo nisl. Aliquam a convallis orci. Integer mauris libero, tincidunt eget est congue, commodo malesuada enim. Integer congue commodo nibh, et cursus erat feugiat fermentum. Vestibulum vel faucibus elit, ut sollicitudin massa. Quisque pretium nec magna et blandit. Morbi eu nunc id nisl euismod egestas at ut velit.</p>

                <p className="w-11/12 md:w-10/12 lg:w-8/12 xl:w-7/12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in urna eget mi tristique malesuada. Aliquam eu est in neque feugiat sodales sed nec nibh. Duis quis commodo nisl. Aliquam a convallis orci. Integer mauris libero, tincidunt eget est congue, commodo malesuada enim. Integer congue commodo nibh, et cursus erat feugiat fermentum. Vestibulum vel faucibus elit, ut sollicitudin massa. Quisque pretium nec magna et blandit. Morbi eu nunc id nisl euismod egestas at ut velit.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}

export default AboutPage

export const query = graphql`
  query AboutQuery {
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