import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer/footer"
import Carousel from "../components/carousel"
import { graphql, Link } from "gatsby"
import Img from 'gatsby-image'
import { motion } from 'framer-motion'
import Scroll from "../components/locomotiveScroll"
import { fade } from "../helpers/transitionHelper"
import NumberShape from "../components/numberShape"
// import Img from "gatsby-image"

const ProjectPage = ({ data: { project }, location}) => {
  return (
    <>
      <SEO
        titleOverride={project.title}
        descriptionOverride={null}
        pathnameOverride={location.pathname}
        imageOverride={null}
      />

      <Scroll callback={location} />

      <div className="">
        <motion.section
          initial="initial"
          className="w-full md:min-h-screen md:max-h-screen bg-offwhitelight relative"
          animate="enter"
          exit="exit"
        >
          {/* <div className="absolute top-0 left-0 right-0 bottom-0" id="pinned-pane-project"></div> */}
          <div className="flex flex-wrap relative md:h-screen" data-scroll-sticky data-scroll data-scroll-target="#scroll-container">

            <motion.div variants={fade} className="w-full md:w-7/12 2xl:w-8/12 md:px-6 md:pr-0 pt-6 md:pt-10 xl:pt-12 order-2 md:order-1">
              <div className="flex flex-col w-full h-full">
                {/* <Img fluid={project.image[0].fluid} className="w-full h-full object-cover object-center mb-6 md:mt-16 order-2 md:order-1" /> */}

                <Carousel images={project.image} location={project.location} title={project.title} />

              </div>
            </motion.div>

            <motion.div variants={fade} className="w-full md:w-5/12 2xl:w-4/12 relative z-30 h-full md:min-h-screen md:max-h-screen order-1 md:order-2 pt-12 md:pt-0">
              <div className="max-w-4xl content relative h-full md:min-h-screen md:max-h-screen">
                <div className="md:pb-24 relative z-10 flex flex-wrap h-full md:min-h-screen md:max-h-screen md:pt-32">

                  <div className="self-start border-t border-b border-black w-full py-5 mb-8 md:mb-0 md:-mt-6 xl:-mt-4 hidden md:block">
                    <Link to="/about/" className="text-base md:text-lg xl:text-xl uppercase leading-none font-medium block self-start text-right pr-8">
                      <span className="inline-block transform rotate-180">↳</span> Back to all
                    </Link>
                  </div>
                  
                  <div className="w-full self-end pl-4 md:pl-6 pr-6 md:pr-10 pt-10">
                    <NumberShape number="1" />
                    <h1 className="h3 mb-4 md:mb-6 max-w-sm block">{ project.title }</h1>

                    <div className=" max-w-sm hidden md:block" dangerouslySetInnerHTML={{ __html: project.content }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
            
          </div>

          <div className="w-10/12 block md:hidden px-4 pb-8" dangerouslySetInnerHTML={{ __html: project.content }}></div>

        </motion.section>

        <motion.section
          initial="initial"
          className="w-full"
          animate="enter"
          exit="exit"
        >
          <div>
            <motion.div variants={fade} className="relative z-50">
              <Footer color="black" />
            </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  )
}

export default ProjectPage

export const query = graphql`
  query ProjectPage($slug: String!) {
    project: datoCmsProject(slug: { eq: $slug}) {
      title
      image {
        fluid(
          maxWidth: 1600,
          imgixParams: { w: "1600", h: "900", fit: "fillmax", crop: "center" }) {
          ...GatsbyDatoCmsFluid
        }
      }
      location
      content
      slug
    }
  }
`