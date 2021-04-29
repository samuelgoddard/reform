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
import { gsap, Power2 } from 'gsap';
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);
const { useEffect } = React;

const ProjectPage = ({ data: { project }, location}) => {
  
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
        titleOverride={project.title}
        descriptionOverride={null}
        pathnameOverride={location.pathname}
        imageOverride={null}
      />

      <Scroll callback={location} />

      <div className="">
        <motion.section
          initial="initial"
          className="w-full min-h-screen md:max-h-screen bg-offwhitelight relative"
          animate="enter"
          exit="exit"
        >
          {/* <div className="absolute top-0 left-0 right-0 bottom-0" id="pinned-pane-project"></div> */}
          <div className="flex flex-wrap relative min-h-screen md:h-screen" data-scroll-sticky data-scroll data-scroll-target="#scroll-container">

            <motion.div variants={fade} className="w-full md:w-7/12 2xl:w-8/12 md:px-6 md:pr-0 pt-6 md:pt-10 xl:pt-12 order-2 md:order-1">
              <div className="flex flex-col w-full h-full">
                {/* <Img fluid={project.image[0].fluid} className="w-full h-full object-cover object-center mb-6 md:mt-16 order-2 md:order-1" /> */}

                <Carousel images={project.image} mobileImage={project.mobileImage} location={project.timespan} title={project.location} />

              </div>
            </motion.div>

            <motion.div variants={fade} className="w-full md:w-5/12 2xl:w-4/12 relative z-30 h-full md:min-h-screen md:max-h-screen order-1 md:order-2 pt-12 md:pt-0">
              <div className="max-w-4xl content relative h-full md:min-h-screen md:max-h-screen">
                <div className="md:pb-24 relative z-10 flex flex-wrap h-full md:min-h-screen md:max-h-screen md:pt-32">

                  <div className="self-start border-t border-b border-black w-full py-5 mb-8 md:mb-0 md:-mt-6 xl:-mt-4 hidden md:block md:mx-5">
                    <Link to="/about/" className="text-base md:text-lg xl:text-xl uppercase leading-none font-medium block self-start text-right pr-2 group">
                      <span className="inline-block transform rotate-180 leading-none align-top mr-1">↳</span> 
                      
                      <span className="inline-block overflow-hidden relative h-auto md:h-5 xl:h-5 leading-tight align-top">
                        <span className="block transform md:group-hover:-translate-y-1/2 md:group-focus:-translate-y-1/2 transition duration-300 ease-in-out md:-mt-px md:leading-tight">
                          <span className="block transform translate">Back to all</span>
                          <span className="hidden md:block">Back to all</span>
                        </span>
                      </span>
                    </Link>
                  </div>
                  
                  <div className="w-full self-end px-4 md:px-6 md:pr-10 pt-10">
                    {/* <div className="md:hidden">
                      <NumberShape number="1" />
                    </div> */}
                    <h1 className="project-title mb-6 md:mb-6 max-w-sm block textreveal">{ project.title }</h1>

                    <div className="max-w-md block textrevealContent" dangerouslySetInnerHTML={{ __html: project.content }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
            
          </div>

          {/* <div className="w-10/12 block md:hidden px-4 pb-8" dangerouslySetInnerHTML={{ __html: project.content }}></div> */}

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
      timespan
      image {
        fluid(
          maxWidth: 1600,
          imgixParams: { w: "1600", h: "800", fit: "fillmax", crop: "center" }) {
          ...GatsbyDatoCmsFluid
        }
      }
      mobileImage: image {
        fluid(
          maxWidth: 1600,
          imgixParams: { w: "1600", h: "1600", fit: "fillmax", crop: "center" }) {
          ...GatsbyDatoCmsFluid
        }
      }
      location
      content
      slug
    }
  }
`