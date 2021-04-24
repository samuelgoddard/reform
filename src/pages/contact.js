import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer/footer"
import { graphql } from "gatsby"
import { motion } from 'framer-motion'
import Scroll from "../components/locomotiveScroll"
import { fade } from "../helpers/transitionHelper"
import NumberShape from "../components/numberShape"
// import Img from "gatsby-image"

const ContactPage = ({ data: { contact }, location}) => {
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
                { contact.address && (
                  <span className="mb-2 block" dangerouslySetInnerHTML={{ __html: contact.address }} />
                )}
                { contact.emailAddress && (
                  <a href={`mailto:${contact.emailAddress}`} className="block hover:underline focus:underline">{contact.emailAddress}</a>
                )}
                { contact.phoneNumber && (
                  <a href={`tel:${contact.phoneNumber}`} className="block hover:underline focus:underline">{contact.phoneNumber}</a>
                )}
              </span>
            </motion.div>

            <motion.div variants={fade} className="md:col-span-8 xl:col-span-8 2xl:col-span-9 relative z-30 md:border-l border-black pb-24 md:pb-0">
              <div className="max-w-6xl content relative h-full">                
                <div className="p-6 md:p-16 xl:p-20 relative z-10 flex flex-wrap items-center h-full">
                  <div className="w-full">
                    <h1 className="h2 mb-8 md:mb-12 xl:mb-16">
                      <span className="overflow-hidden block">
                      <motion.span
                        initial={{ translateY: "100%" }}
                        animate={{ translateY: 0 }}
                        transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
                        className="block">
                        Looking for a partner for
                      </motion.span>
                      </span>
                      <span className="overflow-hidden block">
                        <motion.span
                          initial={{ translateY: "100%" }}
                          animate={{ translateY: 0 }}
                          transition={{ duration: 1, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
                          className="block">
                          your next development?
                        </motion.span>
                      </span>
                    </h1>
                    
                    <form className="block w-full max-w-xl">
                      <span className="overflow-hidden block relative mb-3 md:mb-5">
                        <motion.span
                          initial={{ translateX: "-100%" }}
                          animate={{ translateX: 0 }}
                          transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
                          className="block w-full h-px bg-black absolute bottom-0 left-0"></motion.span>
                          <input type="text" className="bg-offwhitelight focus:bg-offwhite font-sans py-3 border-black text-lg md:text-xl xl:text-2xl focus:outline-none hover:outline-none w-full block" placeholder="Name *" required />
                      </span>
                      <span className="overflow-hidden block relative mb-3 md:mb-5">
                        <motion.span
                          initial={{ translateX: "-100%" }}
                          animate={{ translateX: 0 }}
                          transition={{ duration: 1, delay: 0.25, ease: [0.76, 0, 0.24, 1] }}
                          className="block w-full h-px bg-black absolute bottom-0 left-0"></motion.span>
                          <input type="email" className="bg-offwhitelight focus:bg-offwhite font-sans py-3 border-black text-lg md:text-xl xl:text-2xl focus:outline-none hover:outline-none w-full block" placeholder="Email *" required />
                      </span>
                      <span className="overflow-hidden block relative mb-3 md:mb-5">
                        <motion.span
                          initial={{ translateX: "-100%" }}
                          animate={{ translateX: 0 }}
                          transition={{ duration: 1, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
                          className="block w-full h-px bg-black absolute bottom-0 left-0"></motion.span>
                          <input type="tel" className="bg-offwhitelight focus:bg-offwhite font-sans py-3 border-black text-lg md:text-xl xl:text-2xl focus:outline-none hover:outline-none w-full block" placeholder="Phone" required />
                      </span>
                      <span className="overflow-hidden block relative mb-6 md:mb-12">
                        <motion.span
                          initial={{ translateX: "-100%" }}
                          animate={{ translateX: 0 }}
                          transition={{ duration: 1, delay: 0.35, ease: [0.76, 0, 0.24, 1] }}
                          className="block w-full h-px bg-black absolute bottom-0 left-0"></motion.span>
                          <textarea rows="3" className="bg-offwhitelight focus:bg-offwhite font-sans py-3 border-black text-lg md:text-xl xl:text-2xl focus:outline-none hover:outline-none w-full block" placeholder="Project Details" />
                      </span>
                      
                      <span className="overflow-hidden block relative">
                        <motion.span
                          initial={{ translateY: "100%" }}
                          animate={{ translateY: 0 }}
                          transition={{ duration: 1, delay: 0.65, ease: [0.76, 0, 0.24, 1] }}
                          className="block">
                            <button type="submit" className="focus:outline-none hover:outline-none text-base md:text-lg xl:text-xl uppercase font-medium block border-b border-black">Send Details</button>
                        </motion.span>
                      </span>
                    </form>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          initial="initial"
          className="bg-offwhitelight"
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
    contact: datoCmsContact {
      emailAddress
      phoneNumber
      address
      instagram
    }
  }
`