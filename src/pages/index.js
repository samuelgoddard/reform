import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer/footer"
import { graphql, Link } from "gatsby"
import { motion } from 'framer-motion'
import Scroll from "../components/locomotiveScroll"
import Logo from "../components/logo/logo"
import NumberShape from "../components/numberShape"
import { fade } from "../helpers/transitionHelper"
import Img from "gatsby-image"

const IndexPage = ({ data: { home }, location}) => {

  const whatWeDoBlocksFirstCol = home.whatWeDoBlocks.slice(0,2)
  const whatWeDoBlocksSecondCol = home.whatWeDoBlocks.slice(2)
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
        className="bg-offwhitelight"
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
              <div className="pb-12 md:pb-20 3xl:pb-32 bg-offwhitelight">
                <Img fluid={ home.image.fluid } className="w-full home-image bg-offwhitelight will-change" />

                <div className="flex flex-wrap">
                  <div className="flex-1 block">
                    <div className="w-full h-px bg-offblack mr-12"></div>
                  </div>
                  
                  <div className="w-full md:max-w-lg xl:max-w-2xl 3xl:max-w-4xl text-right ml-auto -mt-6 md:-mt-48 xl:-mt-84 3xl:-mt-96 px-5 md:pr-8 xl:pr-12 flex flex-wrap">
                    <div className="ml-auto text-right w-auto mb-3">
                      {/* <span className="flex items-center ml-auto text-right justify-center w-10 md:w-12 h-10 md:h-12 mb-4 md:mb-6 bg-offblack rounded-full text-white transform -skew-y-12 rotate-12 scale-x-75 text-lg md:text-2xl italic"><span className="transform block -rotate-6">R</span></span> */}
                      <NumberShape number="R" />
                    </div>


                    <h2 className="text-3xl md:text-4xl xl:text-5xl 3xl:text-6xl relative z-10 w-full block 3xl:pl-16" dangerouslySetInnerHTML={{ __html:home.heroText }}></h2>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap pb-8 md:pb-16 xl:pb-20 px-5 md:px-12 lg:px-16 xl:px-20">
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

            <motion.div variants={fade} className="content bg-offwhite">
              <div className="">
                <div className="grid md:grid-cols-2">
                  <div className="md:grid-col-1 md:border-r border-offblack">
                    {whatWeDoBlocksFirstCol.map(({ heading, text }, i) => {
                      return (
                        <div key={i} className={`w-full p-5 md:p-12 lg:p-16 xl:p-20 ${ i === whatWeDoBlocksFirstCol.length - 1 ? '' : 'border-b border-offblack' }`}>

                          <h4 className="flex flex-wrap items-center w-full mb-6 md:mb-8">                      
                          <NumberShape number={i + 1} />

                          <span className="inline-block ml-1 md:ml-2">{ heading }</span></h4>
                          <div className="w-10/12 md:w-10/12 xl:w-10/12" dangerouslySetInnerHTML={{ __html: text }} />
                        </div>
                      )
                    })} 
                  </div>
                  <div className="md:grid-col-1">
                    {whatWeDoBlocksSecondCol.map(({ heading, text }, i) => {
                      return (
                        <div key={i} className={`w-full p-5 md:p-12 lg:p-16 xl:p-20 ${ i === whatWeDoBlocksSecondCol.length - 1 ? '' : 'border-b border-offblack' }`}>

                          <h4 className="flex flex-wrap items-center w-full mb-6 md:mb-8">                      
                          <NumberShape number={i + 3} />

                          <span className="inline-block ml-1 md:ml-2">{ heading }</span></h4>
                          <div className="w-10/12 md:w-10/12 xl:w-10/12" dangerouslySetInnerHTML={{ __html: text }} />
                        </div>
                      )
                    })}
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
          maxWidth: 2402,
          imgixParams: { w: "2402", h: "1610", sharp: 15 }) {
          ...GatsbyDatoCmsFluid_noBase64
        }
      }
      heroText
      whatWeDoBlocks {
        heading
        text
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