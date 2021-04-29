import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer/footer"
import { graphql, Link } from "gatsby"
import { motion } from 'framer-motion'
import NumberShape from "../components/numberShape"
import Scroll from "../components/locomotiveScroll"
import { fade } from "../helpers/transitionHelper"
// import LocomotiveScroll from "locomotive-scroll"
// import Motif from "../components/motif"
import Img from "gatsby-image"
import { gsap, Power2 } from 'gsap';
import { SplitText } from "gsap/SplitText";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { scroll } from "../theme"

gsap.registerPlugin(SplitText);

class AboutPage extends React.Component {
  componentDidMount() {
    // let locomotiveScroll
    // locomotiveScroll = new LocomotiveScroll({
    //   el: document.querySelector(scroll.container),
    //   ...scroll.options,
    // })
    // locomotiveScroll.update();

    // window.scroll = locomotiveScroll
    
    // locomotiveScroll.on("scroll", ScrollTrigger.update);

    // ScrollTrigger.scrollerProxy("#scroll-container", {
    //   scrollTop(value) {
    //     return arguments.length ? locomotiveScroll.scrollTo(value, 0, 0) : locomotiveScroll.scroll.instance.scroll.y;
    //   },
    //   getBoundingClientRect() {
    //     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    //   },
    //   // Mobile stuff to potentially remove....
    //   pinType: document.querySelector("#scroll-container").style.transform ? "transform" : "fixed"
    // });

    // let revealContainers = document.querySelectorAll(".scrollreveal");

    new SplitText(".textrevealContent > *", { type: "lines", linesClass: "lineChildNonScroll" });
    new SplitText(".textrevealContent > *", { type: "lines", linesClass: "lineParentNonScroll" })
    new SplitText(".textreveal", { type: "lines", linesClass: "lineChildNonScroll" });
    new SplitText(".textreveal", { type: "lines", linesClass: "lineParentNonScroll" });
    
    let noneScrollItems = document.querySelectorAll(".lineChildNonScroll");

    gsap.from(noneScrollItems, {
      yPercent: 100,
      autoAlpha: 0,
      delay: 0.5,
      duration: 0.5,
      stagger: 0.045,
      ease: Power2.out,
    });

    // revealContainers.forEach((container) => {
    //   let inner = container.querySelectorAll(".lineChild");
    //   let grayImages = container.querySelectorAll(".grayimage");
      
    //   const anim = gsap.from(inner, {
    //     yPercent: 100,
    //     autoAlpha: 0,
    //     delay: -1.5,
    //     duration: 0.5,
    //     stagger: 0.045,
    //     ease: Power2.out,
    //     paused: true
    //   });

    //   ScrollTrigger.create({
    //     trigger: container,
    //     start: '200 bottom',
    //     scroller: "#scroll-container",
    //     onEnter: () => anim.restart()
    //   }); 
      
    //   ScrollTrigger.create({
    //     trigger: container,
    //     start: '-50px bottom',
    //     scroller: "#scroll-container",
    //     onLeaveBack: () => anim.pause(0)
    //   });

    //   const animGrayImages = gsap.from(grayImages, {
    //     autoAlpha: 0,
    //     delay: 0,
    //     duration: 0.75,
    //     ease: Power2.out,
    //     paused: true
    //   });

    //   ScrollTrigger.create({
    //     trigger: container,
    //     start: '200 bottom',
    //     scroller: "#scroll-container",
    //     onEnter: () => animGrayImages.restart()
    //   }); 
      
    //   ScrollTrigger.create({
    //     trigger: container,
    //     start: '-50px bottom',
    //     scroller: "#scroll-container",
    //     onLeaveBack: () => animGrayImages.pause(0)
    //   });
    // });

  }

  // componentWillUnmount() {
  //   window.scroll.update();
  //   window.scroll.destroy();
  // }

  render() {
    return (
      <>
        <SEO
          titleOverride={this.props.data.about.metaTags && this.props.data.about.metaTags.title ? this.props.data.about.metaTags.title : this.props.data.about.title }
          descriptionOverride={this.props.data.about.metaTags && this.props.data.about.metaTags.description ? this.props.data.about.metaTags.description : null }
          pathnameOverride={this.props.location.pathname}
          imageOverride={this.props.data.about.metaTags && this.props.data.about.metaTags.image ? this.props.data.about.metaTags.image.url : null }
        />

      <Scroll callback={this.props.data.location} />
        
        <motion.section
          initial="initial"
          className="bg-offwhitelight"
          animate="enter"
          exit="exit"
        >
          <div className="grid md:grid-cols-2 pt-16 md:pt-16 xl:pt-20">
            {/* The Pinned area - BUGFIX */}
            <div className="absolute top-0 left-0 right-0 bottom-0" id="pinned-pane"></div>

            <motion.div variants={fade} className="md:col-span-1 md:h-screen relative px-4 pt-5 pb-40 md:py-24 md:mt-2 xl:mt-5 overflow-hidden md:mb-0" data-scroll-sticky data-scroll data-scroll-target="#pinned-pane">
              <h1 className="mb-0 pb-0 md:-mt-16 xl:-mt-20 relative about-title w-11/12 md:w-10/12 xl:w-8/12 xl:pr-0 textreveal">
              <span className="overflow-hidden block">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
                    className="block">
                  At Reform we thrive
                  </motion.span>
                </span>
                <span className="overflow-hidden block">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
                    className="block">
                  on <span className="italic">identifying</span> 
                  </motion.span>
                </span>
                <span className="overflow-hidden block">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
                    className="block">
                  development
                  </motion.span>
                </span>
                <span className="overflow-hidden block">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.25, ease: [0.76, 0, 0.24, 1] }}
                    className="block">
                  opportunities both
                  </motion.span>
                </span>
                <span className="overflow-hidden block">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
                    className="block">
                  for ourselves <span className="italic">&amp;</span> with
                  </motion.span>
                </span>
                <span className="overflow-hidden block">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.35, ease: [0.76, 0, 0.24, 1] }}
                    className="block">
                  land owners not
                  </motion.span>
                </span>
                <span className="overflow-hidden block">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
                    className="block">
                  realising the <span className="italic">true</span>
                  </motion.span>
                </span>
                <span className="overflow-hidden block">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.45, ease: [0.76, 0, 0.24, 1] }}
                    className="block">
                  <span className="italic">potential</span> of their
                  </motion.span>
                </span>
                <span className="overflow-hidden block">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
                    className="block">
                  assets.
                  </motion.span>
                </span>
              </h1>
              {/* <div className="top-0 left-0 right-0 bottom-0 absolute h-full z-0 flex items-center justify-center">
                <Motif classList={"w-1/2 md:-mt-16 xl:-mt-20 motif skew-y-12"} />
              </div> */}
            </motion.div>

            <motion.div variants={fade} className="md:col-span-1 border-t md:border-l md:border-t-0 border-black bg-black texture-overlay texture-overlay--dark text-offwhite relative">
              <div className="content relative" id="content-pane">
                
                {/* <div className="h-full about-content"> */}
                <div className="h-full">
                  {/* z-30 here */}

                  <div className="mb-12 md:mb-16 xl:mb-24 z-30">

                    <div className="hidden md:block h-screen relative z-40 pointer-events-none" data-scroll-sticky data-scroll data-scroll-target="#scroll-container">
                      <div className="w-full h-64 hidden md:block from-black via-black to-transparent absolute bottom-0 left-0 right-0 bg-gradient-to-t z-40"></div>
                    </div>

                    {/* <Img fluid={ this.props.data.about.image.fluid } className="w-full object-cover object-center relative md:h-screen will-change md:-mt-100vh" /> */}

                    <Img fluid={ this.props.data.about.image.fluid } className="w-full object-cover object-center relative md:h-screen will-change z-50 md:-mt-100vh" />

                    <div className="md:p-12 xl:p-16 md:pt-24 xl:pt-32 relative z-30">
                      <div className="lg:flex lg:flex-wrap items-start px-4 md:px-0 pt-12 md:pt-0">
                        <NumberShape number="A" white />
                        <div className="scrollreveal w-11/12 md:w-9/12 lg:w-8/12 xl:w-8/12 2xl:w-7/12 xl:max-w-md">
                          <div className="xl:text-lg pt-3 lg:pt-0 lg:pl-5 " dangerouslySetInnerHTML={{ __html: this.props.data.about.contentText }} />
                        </div>
                      </div>

                      <div className="mt-16 mb-20 md:mt-20 md:mb-32 xl:mt-32 xl:mb-40">
                        {this.props.data.projects.edges.map(({ node }, i) => {
                          return (
                            <motion.div varians={fade} data-scroll className="w-full md:w-10/12 lg:w-9/12 mb-6 md:mb-12 xl:mb-16 mx-auto" key={i}>
                              <Link className="block relative group about-image-teaser" to={`/about/${node.slug}`}>
                                <div className="overflow-hidden mb-5 scrollreveal">
                                  <div className="overflow-hidden grayimage">
                                    <Img fluid={ node.image[0].fluid } backgroundColor={'#333333'} className="w-full h-auto mb-0 pb-0 block transform transition ease-in-out duration-1000 group-hover:scale-110 group-focus:scale-110 scale-105 will-change" />
                                  </div>
                                </div>
                                <div className="pb-5 mb-5 relative px-4 md:px-0">
                                  <span className="overflow-hidden block scrollreveal mb-1">
                                    <span className=" block">
                                      <h4 className="mb-0 block text-center">{ node.title }</h4>
                                    </span>
                                  </span>

                                  <span className="overflow-hidden block scrollreveal">
                                    <span className=" block">
                                      <span className="text-sm block italic text-center">{ node.location }</span>
                                    </span>
                                  </span>
                                </div>
                              </Link>
                            </motion.div>
                          )
                        })}
                      </div>
                    
                      <div className="my-12 md:my-16 xl:my-24 px-4 md:px-0">                        

                        <div className="lg:flex lg:flex-wrap items-start">
                          <NumberShape number="B" white />
                          <div className="scrollreveal">
                            <h2 className="mb-12 md:mb-16 xl:mb-24 lg:pt-2 lg:ml-3 text-offwhite">An experienced<br/>team</h2>
                          </div>
                        </div>

                        {this.props.data.team.edges.map(({ node }, i) => {
                          return (
                            <motion.div varians={fade} data-scroll className="w-full md:w-10/12 lg:w-9/12 mb-16 md:mb-20 xl:mb-24 relative" key={i}>
                              {/* <Img fluid={ node.image.fluid } className="w-full mb-8 h-auto" /> */}
                              <div className="flex items-center border-b border-offwhite pb-5 mb-5">
                                <h4 className="mb-0 pb-0">
                                  <span className="overflow-hidden block scrollreveal">
                                    <span className=" block">
                                      { node.firstName } <span className="italic">{ node.secondName }</span>
                                    </span>
                                  </span>
                                </h4>
                                { node.jobTitle && (
                                  <span className="ml-auto overflow-hidden block scrollreveal">
                                    <span className="block">
                                      <span className="text-xs md:text-sm italic">{ node.jobTitle }</span>
                                    </span>
                                  </span>
                                )}
                              </div>
                              
                              <div className="scrollreveal">
                                <div className="xl:text-lg w-11/12 " dangerouslySetInnerHTML={{ __html: node.bio }}></div>
                              </div>

                            </motion.div>
                          )
                        })}
                      </div>
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
      heroText
      contentText
      image {
        fluid(
          maxWidth: 1600,
          imgixParams: { w: "1600", h: "1600", sharp: 8 , fit: "fillmax", crop: "center" }) {
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
    projects: allDatoCmsProject(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          title
          slug
          location
          image {
            fluid(
              maxWidth: 1400,
              imgixParams: { w: "1300", h: "850", fit: "fillmax", crop: "center" }) {
              ...GatsbyDatoCmsFluid_noBase64
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
          bio
        }
      }
    }
  }
`