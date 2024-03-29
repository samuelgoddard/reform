import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer/footer"
import { graphql } from "gatsby"
import { motion } from 'framer-motion'
import Scroll from "../components/locomotiveScroll"
import { fade } from "../helpers/transitionHelper"
import NumberShape from "../components/numberShape"
// import Img from "gatsby-image"
import { gsap, Power2 } from 'gsap';
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);
const { useEffect } = React;

const ContactPage = ({ data: { contact }, location}) => {

  useEffect(() => {
    new SplitText(".textrevealContent > *", { type: "lines", linesClass: "lineChild" });
    new SplitText(".textrevealContent > *", { type: "lines", linesClass: "lineParent" })
    new SplitText(".textreveal", { type: "lines", linesClass: "lineChild" });
    new SplitText(".textreveal", { type: "lines", linesClass: "lineParent" });

    let inner = document.querySelectorAll(".lineChild");

    gsap.from(inner, {
      yPercent: 100,
      autoAlpha: 0,
      delay: 0.5,
      duration: 0.5,
      stagger: 0.045,
      ease: Power2.out,
    });
  }, []);

  return (
    <>
      <SEO
        titleOverride={"Contact"}
        descriptionOverride={null}
        pathnameOverride={location.pathname}
        imageOverride={null}
      />

      <Scroll callback={location} />

      <div className="md:h-screen flex flex-wrap flex-col">
        <motion.section
          initial="initial"
          className="flex-1 bg-offwhitelight"
          animate="enter"
          exit="exit"
        >
          <div className="flex flex-wrap pt-16 md:pt-16 xl:pt-20 relative h-full">
            <div className="absolute top-0 left-0 right-0 bottom-0" id="pinned-pane"></div>

            <motion.div variants={fade} className="w-full md:w-4/12 2xl:w-3/12 relative overflow-hidden order-2 md:order-1">

              <span className="top-0 left-0 md:absolute block p-4">
                <NumberShape number="C" />
              </span>
              <span className="bottom-0 left-0 md:absolute block max-w-xs p-4 pb-12 xl:text-lg">
                <span className="block mb-3 md:mb-10 textreveal">
                  <span className="text-base md:text-lg xl:text-xl uppercase font-medium block">
                  <span className="inline-block transform rotate-90">↳</span> Get in touch</span>
                </span>
                { contact.address && (
                  <span className="mb-4 block textreveal" dangerouslySetInnerHTML={{ __html: contact.address }} />
                )}
                { contact.emailAddress && (
                  <a href={`mailto:${contact.emailAddress}`} className="block group textreveal underline">
                    <span className="block overflow-hidden relative h-auto md:h-5 xl:h-6 md:my-3px">
                      <span className="block transform md:group-hover:-translate-y-1/2 md:group-focus:-translate-y-1/2 transition duration-300 ease-in-out md:-mt-px md:leading-tight">
                        <span className="block transform translate">{contact.emailAddress}</span>
                        <span className="hidden md:block">{contact.emailAddress}</span>
                      </span>
                    </span>
                  </a>
                )}
                { contact.phoneNumber && (
                  <a href={`tel:${contact.phoneNumber}`} className="block group textreveal underline">
                    <span className="block overflow-hidden relative h-auto md:h-5 xl:h-6 md:my-3px">
                      <span className="block transform md:group-hover:-translate-y-1/2 md:group-focus:-translate-y-1/2 transition duration-300 ease-in-out md:-mt-px md:leading-tight">
                        <span className="block transform translate">{contact.phoneNumber}</span>
                        <span className="hidden md:block">{contact.phoneNumber}</span>
                      </span>
                    </span>
                  </a>
                )}
              </span>
            </motion.div>

            <motion.div variants={fade} className="w-full md:w-8/12 2xl:w-9/12 relative z-30 md:border-l border-black pb-16 md:pb-0 order-1 md:order-2 flex items-center contact-content-outer">
              <div className="max-w-6xl content relative h-full contact-content w-full">
                <div className="py-4 px-4 md:py-0 md:px-16 xl:px-20 relative z-10 flex flex-wrap items-center h-full contact-content-inner">
                  <div className="w-full">
                    <h1 className="contact-title mb-8 md:mb-12 3xl:mb-16 textreveal">
                      Let's talk about your <span className="block">next project</span>
                    </h1>
                    
                    <form className="block w-full max-w-xl" action="https://formspree.io/f/xzbydvwa" method="POST">
                      <span className="overflow-hidden block relative mb-3 md:mb-5">
                        <motion.span
                          initial={{ translateX: "-100%" }}
                          animate={{ translateX: 0 }}
                          transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
                          className="block w-full h-px bg-black absolute bottom-0 left-0"></motion.span>
                          <input type="text" name="name" className="bg-offwhitelight transition-all ease-in-out duration-500 focus:pl-3 font-sans py-3 border-black text-lg md:text-xl 3xl:text-2xl focus:outline-none hover:outline-none w-full block" placeholder="Name *" required />
                      </span>
                      <span className="overflow-hidden block relative mb-3 md:mb-5">
                        <motion.span
                          initial={{ translateX: "-100%" }}
                          animate={{ translateX: 0 }}
                          transition={{ duration: 1, delay: 0.25, ease: [0.76, 0, 0.24, 1] }}
                          className="block w-full h-px bg-black absolute bottom-0 left-0"></motion.span>
                          <input type="email" name="_replyto" className="bg-offwhitelight transition-all ease-in-out duration-500 focus:pl-3 font-sans py-3 border-black text-lg md:text-xl 3xl:text-2xl focus:outline-none hover:outline-none w-full block" placeholder="Email *" required />
                      </span>
                      <span className="overflow-hidden block relative mb-3 md:mb-5">
                        <motion.span
                          initial={{ translateX: "-100%" }}
                          animate={{ translateX: 0 }}
                          transition={{ duration: 1, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
                          className="block w-full h-px bg-black absolute bottom-0 left-0"></motion.span>
                          <input type="tel" name="telephone" className="bg-offwhitelight transition-all ease-in-out duration-500 focus:pl-3 font-sans py-3 border-black text-lg md:text-xl 3xl:text-2xl focus:outline-none hover:outline-none w-full block" placeholder="Phone" required />
                      </span>
                      <span className="overflow-hidden block relative mb-6 md:mb-12">
                        <motion.span
                          initial={{ translateX: "-100%" }}
                          animate={{ translateX: 0 }}
                          transition={{ duration: 1, delay: 0.35, ease: [0.76, 0, 0.24, 1] }}
                          className="block w-full h-px bg-black absolute bottom-0 left-0"></motion.span>
                          <textarea rows="2" name="projectdetails" className="bg-offwhitelight transition-all ease-in-out duration-500 focus:pl-3 font-sans py-3 border-black text-lg md:text-xl 3xl:text-2xl focus:outline-none hover:outline-none w-full block" placeholder="Project Details" />
                      </span>
                      
                      <span className="overflow-hidden block relative">
                        <motion.span
                          initial={{ translateY: "100%" }}
                          animate={{ translateY: 0 }}
                          transition={{ duration: 1, delay: 0.65, ease: [0.76, 0, 0.24, 1] }}
                          className="block">
                            <button type="submit" className="focus:outline-none hover:outline-none text-base md:text-lg xl:text-xl uppercase font-medium block group border-b border-black">
                              <span className="block overflow-hidden relative h-auto md:h-5 xl:h-6 md:my-3px">
                                <span className="block transform md:group-hover:-translate-y-1/2 md:group-focus:-translate-y-1/2 transition duration-300 ease-in-out md:-mt-px md:leading-tight">
                                  <span className="block transform translate">Send Details</span>
                                  <span className="hidden md:block">Send Details</span>
                                </span>
                              </span>
                            </button>
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