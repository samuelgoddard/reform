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

class PrivacyPage extends React.Component {
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
          <div className="grid md:grid-cols-3 pt-16 md:pt-16 xl:pt-20">
            {/* The Pinned area - BUGFIX */}
            <div className="absolute top-0 left-0 right-0 bottom-0" id="pinned-pane"></div>

            <motion.div variants={fade} className="md:col-span-1 md:h-screen relative px-4 py-6 md:py-24 md:px-12 md:mt-2 xl:mt-5 overflow-hidden" data-scroll-sticky data-scroll data-scroll-target="#pinned-pane">
              <h1 className="mb-0 pb-0 md:-mt-12 xl:-mt-16 relative about-title md:w-12/12 xl:w-12/12 xl:pr-0 textreveal project-title">
                Privacy Policy
              </h1>

              <span className="block max-w-xs pt-6 pb-6 md:pb-12 md:pt-24 xl:text-lg">
                { this.props.data.contact.address && (
                  <span className="mb-4 block textreveal" dangerouslySetInnerHTML={{ __html:this.props.data. contact.address }} />
                )}
                { this.props.data.contact.emailAddress && (
                  <a href={`mailto:${this.props.data.contact.emailAddress}`} className="block group textreveal underline">
                    <span className="block overflow-hidden relative h-auto md:h-5 xl:h-6 md:my-3px">
                      <span className="block transform md:group-hover:-translate-y-1/2 md:group-focus:-translate-y-1/2 transition duration-300 ease-in-out md:-mt-px md:leading-tight">
                        <span className="block transform translate">{this.props.data.contact.emailAddress}</span>
                        <span className="hidden md:block">{this.props.data.contact.emailAddress}</span>
                      </span>
                    </span>
                  </a>
                )}
                { this.props.data.contact.phoneNumber && (
                  <a href={`tel:${this.props.data.contact.phoneNumber}`} className="block group textreveal underline">
                    <span className="block overflow-hidden relative h-auto md:h-5 xl:h-6 md:my-3px">
                      <span className="block transform md:group-hover:-translate-y-1/2 md:group-focus:-translate-y-1/2 transition duration-300 ease-in-out md:-mt-px md:leading-tight">
                        <span className="block transform translate">{this.props.data.contact.phoneNumber}</span>
                        <span className="hidden md:block">{this.props.data.contact.phoneNumber}</span>
                      </span>
                    </span>
                  </a>
                )}
              </span>
              {/* <div className="top-0 left-0 right-0 bottom-0 absolute h-full z-0 flex items-center justify-center">
                <Motif classList={"w-1/2 md:-mt-16 xl:-mt-20 motif skew-y-12"} />
              </div> */}
            </motion.div>

            <motion.div variants={fade} className="md:col-span-2 bg-offwhitelight texture-overlay texture-overlay--dark text-offblack relative">
              <div className="content relative" id="content-pane">
                
                {/* <div className="h-full about-content"> */}
                <div className="h-full">
                  {/* z-30 here */}

                  <div className="mb-12 md:mb-24 xl:mb-32">

                    {/* <div className="h-screen z-50" data-scroll-sticky data-scroll data-scroll-target="#scroll-container">
                      <div className="w-full h-56 hidden md:block from-black via-black to-transparent absolute bottom-0 left-0 right-0 bg-red-500 z-50"></div>
                    </div> */}

                    {/* <Img fluid={ this.props.data.about.image.fluid } className="w-full object-cover object-center relative md:h-screen will-change md:-mt-100vh" /> */}

                    {/* <Img fluid={ this.props.data.about.image.fluid } className="w-full object-cover object-center relative md:h-screen will-change" /> */}

                    <div className="p-4 md:p-12 xl:p-16 md:pt-32 xl:pt-40 relative z-30">
                      <div className="lg:flex lg:flex-wrap items-start content">
                        <div className="w-11/12 md:w-9/12 lg:w-8/12 xl:w-8/12" dangerouslySetInnerHTML={{ __html:this.props.data.about.content }}>
                        </div>
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

export default PrivacyPage

export const query = graphql`
  query PrivacyQuery {
    about: datoCmsPrivacy {
      title
      content
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
    contact: datoCmsContact {
      emailAddress
      phoneNumber
      address
      instagram
    }
  }
`