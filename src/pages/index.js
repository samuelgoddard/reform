import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer/footer"
import { graphql, Link } from "gatsby"
import { motion } from 'framer-motion'
import Scroll from "../components/locomotiveScroll"
import Logo from "../components/logo/logo"
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
        <div className="overflow-hidden">
          <div className="pt-10 md:pt-12 xl:pt-16">
            <motion.div variants={fade} className="pt-12 md:pt-16 xl:pt-16 relative z-10">
              {/* <h1 className="text-center uppercase">Development <span className="block">Done Differently</span></h1> */}
              
              <div className="flex flex-wrap items-center px-5 md:px-8">
                <div className="w-full md:w-9/12">
                  <Logo />
                </div>
                <div className="w-full md:w-3/12 hidden md:block">
                  <div className="w-full h-px bg-offblack ml-8"></div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fade} className="mt-5 md:-mt-4 xl:-mt-8 border-b border-black relative z-0">
              <div className="pb-12 md:pb-20 bg-offwhite">
                <Img fluid={ home.image.fluid } className="w-full home-image bg-offwhite" />

                <div className="flex flex-wrap">
                  <div className="flex-1 block">
                    <div className="w-full h-px bg-offblack mr-12"></div>
                  </div>
                  
                  <div className="w-11/12 max-w-xl xl:max-w-3xl text-right ml-auto -mt-12 md:-mt-32 xl:-mt-56 px-5 md:px-8 xl:px-12">
                    <div className="ml-auto text-right">
                      <span className="flex items-center ml-auto text-right justify-center w-10 md:w-12 h-10 md:h-12 mb-4 md:mb-6 bg-offblack rounded-full text-white transform -skew-y-12 rotate-12 scale-x-75 text-lg md:text-2xl italic"><span className="transform block -rotate-6">R</span></span>
                    </div>

                    <h2 className="text-3xl md:text-4xl xl:text-5xl relative z-10"><span className="italic uppercase">Reform</span> is an experienced, full-service agency that provides a range of services for <span className="italic">modern</span> building design &amp; development.</h2>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap pb-6 md:pb-10 px-5 md:px-12 lg:px-16 xl:px-20">
              <div className="w-1/2">
                <span className="text-base md:text-lg xl:text-xl uppercase font-medium block">
                <span className="inline-block transform rotate-90">↳</span> What We Do
                </span>
                </div>
                <div className="w-1/2 text-right">
                <Link className="text-base md:text-lg xl:text-xl uppercase font-medium inline-block border-b border-black" to="/about">
                  About Us
                </Link>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fade} className="content">
              <div className="">
                <div className="grid md:grid-cols-2">
                  <div className="md:grid-col-1 md:border-r border-offblack">
                    <div className="w-full border-b border-offblack p-5 md:p-12 lg:p-16 xl:p-20">
                      
                      <h4 className="flex flex-wrap items-center w-full mb-6 md:mb-8">
                      <span className="flex items-center justify-center w-10 md:w-12 h-10 md:h-12 mr-3 bg-offblack rounded-full text-white transform -skew-y-12 rotate-12 scale-x-75 text-lg md:text-2xl italic"><span className="transform block -rotate-6">1</span></span>
                      <span className="inline-block">Architecture</span></h4>
                      <p className="w-10/12 md:w-10/12 xl:w-10/12">Our expertise in this area represents a key un-locker of value and underpins the business. Reform has its own, in-house, fully functioning architectural practice and can provide a full range of architectural services from inception through to completion. So whether we are acting for ourselves and our partners, or for third party clients in the traditional way, we can rapidly spot ways of releasing the commercial potential of a project owing to the decades of architectural experience of our team..</p>
                    </div>
                    <div className="w-full p-5 md:p-12 lg:p-16 xl:p-20 border-b border-offblack md:border-0">
                    <h4 className="flex flex-wrap items-center w-full mb-6 md:mb-8">
                      <span className="flex items-center justify-center w-10 md:w-12 h-10 md:h-12 mr-3 bg-offblack rounded-full text-white transform -skew-y-12 rotate-12 scale-x-75 text-lg md:text-2xl italic"><span className="transform block -rotate-6">2</span></span>
                      <span className="inline-block">Development Delivery</span></h4>
                      <p className="w-10/12 md:w-10/12 xl:w-10/12">Partnering land owners to deliver sites which have been promoted through planning and ready for delivery. We employ our own key trades and site management. We also have a very reliable and long-standing relationship with a number of sub-contractors. Reform has the experience in delivery of many property asset classes including residential, HA, office and other commercial uses.</p>
                    </div>
                  </div>
                  <div className="md:grid-col-1">
                    <div className="w-full border-b border-offblack p-5 md:p-12 lg:p-16 xl:p-20">
                    <h4 className="flex flex-wrap items-center w-full mb-6 md:mb-8">
                      <span className="flex items-center justify-center w-10 md:w-12 h-10 md:h-12 mr-3 bg-offblack rounded-full text-white transform -skew-y-12 rotate-12 scale-x-75 text-lg md:text-2xl italic"><span className="transform block -rotate-6">3</span></span>
                      <span className="inline-block">Development Consultancy</span></h4>
                      <p className="w-10/12 md:w-10/12 xl:w-10/12">Development is a complex process and we have achieved many successful projects to know the constraints and pitfalls to be aware of. We specialise in dentification of market facing uses, addressing site constraints, reviewing development principles, appraisals, cost consulting and funding. </p>
                    </div>

                    <div className="w-full p-5 md:p-12 lg:p-16 xl:p-20">
                    <h4 className="flex flex-wrap items-center w-full mb-6 md:mb-8">
                      <span className="flex items-center justify-center w-10 md:w-12 h-10 md:h-12 mr-3 bg-offblack rounded-full text-white transform -skew-y-12 rotate-12 scale-x-75 text-lg md:text-2xl italic"><span className="transform block -rotate-6">4</span></span>
                      <span className="inline-block">Site Promotion / Planning</span></h4>
                      <p className="w-10/12 md:w-10/12 xl:w-10/12">Feasibility studies, pre-app planning, planning strategies, application consultation and delivery. We have a large amount of experience in this area and have worked closely with the same consultants for many years. Our proven track record of delivering developments helps us identity how to promote sites effectively by unlocking the potential within land and building opportunities.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fade}>
            <Footer />
          </motion.div>
        </div>
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
        fluid(
          maxWidth: 2400,
          imgixParams: { w: "2400", h: "1521" }) {
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