import React from "react"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import { motion } from 'framer-motion'
import Scroll from "../components/locomotiveScroll"
import { fade } from "../helpers/transitionHelper"
import Img from "gatsby-image"

const IndexPage = ({ data: { home }, location}) => {
  return (
    <>
      <SEO title={home.title} />

      <Scroll callback={location} />
      
      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{
          enter: { transition: { staggerChildren: 0.055 }}
        }}
      >
        <div className="container">
          <motion.div variants={fade} className="pt-12 md:pt-16 xl:pt-20 relative z-10">
            <h1 className="text-center uppercase">Development <span className="block">Done Differently</span></h1>
          </motion.div>

          <motion.div variants={fade} className="-mt-12 md:-mt-16 xl:-mt-20 pb-8 mb-12 md:mb-20 lg:mb-24 xl:mb-32 border-b border-black relative z-0">
            <Img fluid={ home.image.fluid } className="w-full opacity-75" />

            <span className="bottom-0 left-0 absolute block max-w-xs p-8 pb-16 xl:text-lg">Suspendisse nec semper massa, a vestibulum massa. Aliquam &amp; volutpat. Maecenas accumsan ac ex eget commodo. Sed iaculis nulla non lacus tincidunt fringilla.</span>
          </motion.div>

          <motion.div variants={fade} className="content pb-12 md:pb-20 lg:pb-24 xl:pb-32">
            <div className="md:px-12 xl:px-16">
              <h2 className="w-8/12 md:w-10/12 xl:w-9/12 mb-12 md:mb-20 lg:mb-24 xl:mb-32"><span className="italic uppercase">Reform</span> is an experienced, full-service agency that provides a range of services for <span className="italic">modern</span> building design &amp; development.</h2>
              
              <div className="grid md:grid-cols-2 md:gap-16">
                <div className="md:grid-col-1">
                  <h4 className="block w-full border-b border-black pb-5 mb-5">Full Project Delivery</h4>
                  <p className="w-9/12 md:w-10/12 xl:w-8/12">REFORM is an experienced, full-service agency that provides a range of services for modern building design and development.</p>
                </div>
                <div className="md:grid-col-1">
                  <h4 className="block w-full border-b border-black pb-5 mb-5">Full Project Delivery</h4>
                  <p className="w-9/12 md:w-10/12 xl:w-8/12">REFORM is an experienced, full-service agency that provides a range of services for modern building design and development.</p>
                </div>
                <div className="md:grid-col-1">
                  <h4 className="block w-full border-b border-black pb-5 mb-5">Full Project Delivery</h4>
                  <p className="w-9/12 md:w-10/12 xl:w-8/12">REFORM is an experienced, full-service agency that provides a range of services for modern building design and development.</p>
                </div>
                <div className="md:grid-col-1">
                  <h4 className="block w-full border-b border-black pb-5 mb-5">Full Project Delivery</h4>
                  <p className="w-9/12 md:w-10/12 xl:w-8/12">REFORM is an experienced, full-service agency that provides a range of services for modern building design and development.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div variants={fade} className="bg-black text-white">
          <div className="container">
            <div className="flex items-center justify-center h-screen max-h-75screen">
              <div className="w-full text-center -mt-12 md:-mt-16">
                <div className="w-4 relative mx-auto mb-8 md:mb-12">
                  <div className="w-px h-12 md:h-16 bg-offwhite"></div>
                  <div className="w-3 h-3 -ml-1 rounded-full absolute bottom-0 left-0 bg-offwhite"></div>
                </div>
                <h2 className="max-w-4xl mx-auto mb-8 md:mb-12">Looking for a <span className="italic">partner</span> for your next development?</h2>

                <Link to="/contact" className="text-base md:text-lg xl:text-xl uppercase text-center inline-block mx-auto font-medium border-b-2 border-offwhite">Get in touch</Link>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      <footer className="bg-black text-offwhite border-offwhite border-t w-full">
        <div className="flex flex-wrap items-center">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm md:text-lg xl:text-xl uppercase font-medium block px-4 md:px-6 xl:px-8 py-4 md:py-5 xl:py-6 border-r border-offwhite">
            Insta<span className="hidden md:inline">gram</span>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sm md:text-lg xl:text-xl uppercase font-medium block px-4 md:px-6 xl:px-8 py-4 md:py-5 xl:py-6 mr-auto border-r border-offwhite" to="/about">
            Twitter
          </a>
          <span className="text-sm md:text-lg xl:text-xl uppercase font-medium px-4 md:px-6 xl:px-8 py-4 md:py-5 xl:py-6 mx-auto text-center hidden xl:block">
            Development done <span className="italic">differently</span>
          </span>
          <Link className="text-sm md:text-lg xl:text-xl uppercase font-medium block px-4 md:px-6 xl:px-8 py-4 md:py-5 xl:py-6 ml-auto border-l border-offwhite" to="/contact">
            Privacy <span className="hidden md:inline">Policy</span>
          </Link>
          <span className="text-sm md:text-lg xl:text-xl uppercase font-medium block px-4 md:px-6 xl:px-8 py-4 md:py-5 xl:py-6 border-l border-offwhite">
            &copy;2020
          </span>
        </div>
      </footer>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    home: datoCmsHome {
      title
      image {
        fluid(imgixParams: { w: "1600", h: "650", fit: "fillmax", crop: "center" }) {
          ...GatsbyDatoCmsFluid
        }
      }
      slug
    }
  }
`