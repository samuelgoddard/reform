import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer/footer"
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

      <div className="flex flex-wrap flex-col">
        <motion.section
          initial="initial"
          className="flex-1 bg-offwhitelight w-full"
          animate="enter"
          exit="exit"
        >
          <div className="grid md:grid-cols-12 relative h-full md:min-h-screen">
            <div className="absolute top-0 left-0 right-0 bottom-0" id="pinned-pane"></div>

            <motion.div variants={fade} className="md:col-span-7 xl:col-span-7 2xl:col-span-8 pt-6 md:pt-10 px-6 md:pr-0 xl:pt-12 mb-8 md:mb-0">
              <div className="flex flex-col w-full h-full mt-16">
                <Img fluid={project.image.fluid} className="w-full h-full object-cover object-center mb-6" />

                <div className="border-t border-black w-full h-48 pt-6 flex flex-wrap">
                  <div className="">
                    <span className="block uppercase text-sm leading-none">Location</span>
                    <span className="block md:text-lg xl:text-xl">{project.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fade} className="md:col-span-5 xl:col-span-5 2xl:col-span-4 relative z-30">
              <div className="max-w-4xl content relative h-full">
                <div className="md:pb-24 relative z-10 flex flex-wrap h-full md:pt-32">

                  <div className="self-start border-t border-b border-black w-full py-5 mb-8 md:mb-0 md:-mt-6 xl:-mt-4">
                    <Link to="/about/" className="text-base md:text-lg xl:text-xl uppercase leading-none font-medium block self-start text-right pr-8">
                      <span className="inline-block transform rotate-180">↳</span> Back to all
                    </Link>
                  </div>
                  
                  <div className="w-full self-end pl-6">
                    <NumberShape number="1" />
                    <h1 className="h3 mb-4 md:mb-6 max-w-sm block">{ project.title }</h1>

                    <div className="max-w-sm" dangerouslySetInnerHTML={{ __html: project.content }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
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
          imgixParams: { w: "1600", h: "1200", fit: "fillmax", crop: "center" }) {
          ...GatsbyDatoCmsFluid
        }
      }
      location
      content
      slug
    }
  }
`