import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer/footer"
import { graphql } from "gatsby"
import { motion } from 'framer-motion'
import Scroll from "../components/locomotiveScroll"
import { fade } from "../helpers/transitionHelper"
import Img from "gatsby-image"

const IndexPage = ({ data: { home }, location}) => {
  return (
    <>
      <SEO
        titleOverride={home.metaTags && home.metaTags.title ? home.metaTags.title : home.title }
        descriptionOverride={home.metaTags && home.metaTags.description ? home.metaTags.description : null }
        pathnameOverride={location.pathname}
        imageOverride={home.metaTags && home.metaTags.image ? home.metaTags.image.url : null }
      />

      <Scroll callback={location} />
      
      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{
          enter: { transition: { staggerChildren: 0.055 }}
        }}
      >
        <div className="container pt-16 md:pt-16 xl:pt-20">
          <motion.div variants={fade} className="pt-12 md:pt-16 xl:pt-20 relative z-10">
            <h1 className="text-center uppercase">Development <span className="block">Done Differently</span></h1>
          </motion.div>

          <motion.div variants={fade} className="-mt-12 md:-mt-16 xl:-mt-20 pb-8 mb-12 md:mb-20 lg:mb-24 xl:mb-32 border-b border-black relative z-0">
            <Img fluid={ home.image.fluid } className="w-full opacity-75" />

            <span className="bottom-0 left-0 absolute block max-w-xs p-8 pb-16 xl:text-lg tracking-tiny">Suspendisse nec semper massa, a vestibulum massa. Aliquam &amp; volutpat. Maecenas accumsan ac ex eget commodo. Sed iaculis nulla non lacus tincidunt fringilla.</span>
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

        <motion.div variants={fade}>
          <Footer />
        </motion.div>
      </motion.section>
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
      metaTags {
        title
        description
        twitterCard
        image {
          url
        }
      }
      slug
    }
  }
`