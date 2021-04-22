import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer/footer"
import { graphql, Link } from "gatsby"
import { motion } from 'framer-motion'
import NumberShape from "../components/numberShape"
// import Scroll from "../components/locomotiveScroll"
import { fade } from "../helpers/transitionHelper"
import LocomotiveScroll from "locomotive-scroll"
// import Motif from "../components/motif"
import Img from "gatsby-image"
import { gsap, Power2 } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scroll } from "../theme"

gsap.registerPlugin(ScrollTrigger);

class AboutPage extends React.Component {
  componentDidMount() {
    let locomotiveScroll
    locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector(scroll.container),
      ...scroll.options,
    })
    locomotiveScroll.update();

    window.scroll = locomotiveScroll
    
    locomotiveScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#scroll-container", {
      scrollTop(value) {
        return arguments.length ? locomotiveScroll.scrollTo(value, 0, 0) : locomotiveScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // Mobile stuff to potentially remove....
      pinType: document.querySelector("#scroll-container").style.transform ? "transform" : "fixed"
    });

    gsap.from(".motif", {
      scrollTrigger:{
        trigger: ".motif",
        scroller: "#scroll-container",
        scrub: 0.85,
        start: 'top bottom',
        end:'+=10000',
      },
      // rotationX:-180 * 2,
      rotationY: -180 * 2,
      // rotationZ:-180 * 2,
      scale: 1,
      duration:1,
      ease: Power2.easeInOut,
      transformOrigin: "center center"
    });
  }

  componentWillUnmount() {
    window.scroll.update();
    window.scroll.destroy();
  }

  render() {
    return (
      <>
        <SEO
          titleOverride={this.props.data.about.metaTags && this.props.data.about.metaTags.title ? this.props.data.about.metaTags.title : this.props.data.about.title }
          descriptionOverride={this.props.data.about.metaTags && this.props.data.about.metaTags.description ? this.props.data.about.metaTags.description : null }
          pathnameOverride={this.props.location.pathname}
          imageOverride={this.props.data.about.metaTags && this.props.data.about.metaTags.image ? this.props.data.about.metaTags.image.url : null }
        />

      {/* <Scroll callback={this.props.data.location} /> */}
        
        <motion.section
          initial="initial"
          className="bg-offwhitelight"
          animate="enter"
          exit="exit"
        >
          <div className="grid md:grid-cols-2 pt-16 md:pt-16 xl:pt-20">
            {/* The Pinned area - BUGFIX */}
            <div className="absolute top-0 left-0 right-0 bottom-0" id="pinned-pane"></div>

            <motion.div variants={fade} className="md:col-span-1 md:h-screen relative px-6 py-8 md:py-24 md:mt-2 xl:mt-5 overflow-hidden" data-scroll-sticky data-scroll data-scroll-target="#pinned-pane">
              <h1 className="mb-0 pb-0 md:-mt-16 xl:-mt-20 relative z-10 about-title md:w-10/12 xl:w-8/12  xl:pr-0">At Reform we thrive on <span className="italic">identifying</span> development opportunities both for ourselves &amp; with land owners not realising the true <span className="italic">potential</span> of their assets.</h1>
              {/* <div className="top-0 left-0 right-0 bottom-0 absolute h-full z-0 flex items-center justify-center">
                <Motif classList={"w-1/2 md:-mt-16 xl:-mt-20 motif skew-y-12"} />
              </div> */}
            </motion.div>

            <motion.div variants={fade} className="md:col-span-1 bg-black texture-overlay texture-overlay--dark text-white relative z-30">
              <div className="content relative" id="content-pane">
                
                {/* z-30 here */}
                {/* <div className="relative z-30 h-screen" data-scroll-sticky data-scroll data-scroll-target="#scroll-container">
                  <div className="bg-gradient-to-t w-full h-56 hidden md:block from-black via-black to-transparent absolute bottom-0 left-0 right-0 bg-red-500 z-50"></div>
                </div> */}
                
                {/* <div className="h-full about-content"> */}
                <div className="h-full">
                  <div className="mb-12 md:mb-16 xl:mb-24 relative z-30">

                    <Img fluid={ this.props.data.about.image.fluid } className="w-full object-cover object-center relative z-0 md:h-screen" />

                    <div className="p-8 md:p-12 xl:p-16">
                      <div className="lg:flex lg:flex-wrap items-start">
                        <NumberShape number="A" white />
                        <p className="w-11/12 md:w-9/12 lg:w-7/12 xl:w-6/12 xl:text-lg pt-3 lg:pt-0 lg:pl-5">We enjoy transforming redundant sites and buildings to create an improved offering to the market. With our extensive and diverse experience we understand the whole development and planning process. We have a proven track record in delivering successful projects and would welcome discussing potential opportunities throughout the UK.</p>
                      </div>

                      <div className="my-12 md:my-20 xl:my-32">
                        {this.props.data.projects.edges.map(({ node }, i) => {
                          return (
                            <motion.div varians={fade} data-scroll className="w-full md:w-10/12 lg:w-9/12 mb-8 md:mb-12 xl:mb-16 mx-auto" key={i}>
                              <Link className="block" to={`/about/${node.slug}`}>
                                <Img fluid={ node.image.fluid } className="w-full mb-5 h-auto" />
                                <div className="pb-5 mb-5">
                                  <h4 className="mb-1 block text-center">{ node.title }</h4>
                                  <span className="text-base block italic text-center">{ node.location }</span>
                                </div>
                              </Link>
                            </motion.div>
                          )
                        })}
                      </div>
                    
                      <div className="my-12 md:my-16 xl:my-24">
                        <h3 className="mb-12 md:mb-16 xl:mb-24">An experienced<br/>team</h3>
                        {this.props.data.team.edges.map(({ node }, i) => {
                          return (
                            <motion.div varians={fade} data-scroll className="w-full md:w-10/12 lg:w-9/12 mb-8 md:mb-12 xl:mb-16" key={i}>
                              {/* <Img fluid={ node.image.fluid } className="w-full mb-8 h-auto" /> */}
                              <div className="flex items-center border-b border-offwhite pb-5 mb-5">
                                <h4 className="mb-0 pb-0">{ node.firstName } <span className="italic">{ node.secondName }</span></h4>
                                { node.jobTitle && (
                                  <span className="ml-auto italic">{ node.jobTitle }</span>
                                )}
                              </div>

                              <div className="w-10/12 xl:text-lg" dangerouslySetInnerHTML={{ __html: node.bio }}></div>

                            </motion.div>
                          )
                        })}
                      </div>

                      {/* <div className="mb-12 md:mb-16 xl:mb-24">
                        <h3 className="w-full md:w-10/12 lg:w-9/12">REFORM is an experienced, <span className="italic">full-service</span> agency that provides a range of services for <span className="italic">modern</span> building design &amp; development.</h3>
                        
                        <p className="w-11/12 md:w-10/12 lg:w-9/12 xl:w-10/12 xl:text-lg pb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in urna eget mi tristique malesuada. Aliquam eu est in neque feugiat sodales sed nec nibh. Duis quis commodo nisl. Aliquam a convallis orci. Integer mauris libero, tincidunt eget est congue, commodo malesuada enim. Integer congue commodo nibh, et cursus erat feugiat fermentum. Vestibulum vel faucibus elit, ut sollicitudin massa. Quisque pretium nec magna et blandit. Morbi eu nunc id nisl euismod egestas at ut velit.</p>

                        <Link to="/contact" className="text-lg md:text-xl xl:text-2xl underline">Contact Us</Link>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
          
        <motion.section
          initial="initial"
          className=""
          animate="enter"
          exit="exit"
        >
          <div>
            <motion.div variants={fade} className="-mt-5 relative z-50">
              <Footer />
            </motion.div>
          </div>
        </motion.section>
      </>
    )
  }
}

export default AboutPage

export const query = graphql`
  query AboutQuery {
    about: datoCmsAbout {
      title
      image {
        fluid(
          maxWidth: 1600,
          imgixParams: { w: "1600", h: "1600", fit: "fillmax", crop: "center" }) {
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
    projects: allDatoCmsProject {
      edges {
        node {
          title
          slug
          location
          image {
            fluid(
              maxWidth: 1200,
              imgixParams: { w: "1200", h: "740", fit: "fillmax", crop: "center" }) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
    team: allDatoCmsTeam {
      edges {
        node {
          firstName
          secondName
          jobTitle
          image {
            fluid(
              maxWidth: 1200,
              imgixParams: { w: "1200", h: "740", fit: "fillmax", crop: "center" }) {
              ...GatsbyDatoCmsFluid
            }
          }
          bio
        }
      }
    }
  }
`