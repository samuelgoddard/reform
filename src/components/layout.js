import React from "react"
import PropTypes from "prop-types"
import { AnimatePresence, motion } from "framer-motion"

import Header from "./header/header"
import Logo from "./logo/logo"
import "../styles/main.css"

class Layout extends React.Component {
  constructor() {
    super()
    this.state = {
      showIntro: true,
      timing: 3.1,
    }
  }

  componentDidMount() {
    var that = this;

    setTimeout(function() {
      that.setState({
        showIntro: false,
        timing: 0
      })
     }, 3500);
  }

  render() {
    const location = this.props.location

    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
          childAnimationDelay: this.state.timing,
      }),
    );

    return (
      <>
        
        { this.state.showIntro && (
          <motion.section
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <motion.div
              animate={{ y: "-100%" }}
              transition={{ duration: 0.1, delay: 3.75, ease: [0.76, 0, 0.24, 1] }}
              className="fixed w-full h-screen z-50"
            >
              <motion.div
                animate={{ opacity: 0 }}
                transition={{ duration: 1, delay: 2.75, ease: [0.76, 0, 0.24, 1] }}
                className="h-screen w-full z-40 bg-offwhite flex flex-wrap"
              >
                <motion.div
                  className="h-screen w-full z-40 bg-offwhite text-offblack px-5 md:px-8 font-sans pt-10 md:pt-12 xl:pt-16"
                >
                  <motion.div
                    initial={{ x: "-105%" }}
                    animate={{ x: "0" }}
                    transition={{ duration: 3.35, delay: 0, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed top-0 left-0 right-0 w-full border-black border-t-10"></motion.div>

                  <div className="flex flex-wrap w-full pt-12 md:pt-16 xl:pt-16 relative z-10">
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 2, delay: 0, ease: [0.76, 0, 0.24, 1] }}
                      className="w-full md:w-9/12 opacity-0">

                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1127 240">
                        <defs>
                          <clipPath id="clip-logo-stroke">
                            <rect width="1127" height="240"/>
                          </clipPath>
                        </defs>
                        <g id="logo-stroke" clip-path="url(#clip-logo-stroke)">
                          <g id="Group_107" data-name="Group 107" transform="translate(-33 -148)">

                            
                            <path id="Path_8" className="intro-motif" data-name="Path 8" d="M245.163.016a59.832,59.832,0,0,1,25.293,4.892,45.449,45.449,0,0,1,17.318,13.6A61.3,61.3,0,0,1,297.95,39.154a93.638,93.638,0,0,1,3.376,25.88,138.408,138.408,0,0,1-5.235,36.3A197.8,197.8,0,0,1,281.415,139a223.628,223.628,0,0,1-22.5,35.42,180.428,180.428,0,0,1-28.717,29.745,136.248,136.248,0,0,1-33.463,20.352,92.952,92.952,0,0,1-36.643,7.583,60.762,60.762,0,0,1-25.2-4.892,45.009,45.009,0,0,1-17.514-13.6,61.3,61.3,0,0,1-10.078-20.5,95.788,95.788,0,0,1-3.327-25.88,138.257,138.257,0,0,1,5.039-36.447,197.8,197.8,0,0,1,14.677-37.67,227.589,227.589,0,0,1,22.5-35.469A182.629,182.629,0,0,1,174.96,27.9,138.207,138.207,0,0,1,208.373,7.6,92.953,92.953,0,0,1,245.163.016Zm24.461,56.8a89.769,89.769,0,0,0-1.859-18.493,43.589,43.589,0,0,0-6.213-15.264,30.577,30.577,0,0,0-11.937-10.42,41.389,41.389,0,0,0-18.982-3.865,46.77,46.77,0,0,0-27.739,9.246A101.9,101.9,0,0,0,179.362,42.04a193.639,193.639,0,0,0-18.835,33.12,300.877,300.877,0,0,0-13.747,36.594,294.844,294.844,0,0,0-8.415,34.637,161.106,161.106,0,0,0-2.886,26.712,89.771,89.771,0,0,0,1.859,18.493,45.644,45.644,0,0,0,6.066,15.313A29.99,29.99,0,0,0,155,217.33a39.529,39.529,0,0,0,18.493,3.865,48.091,48.091,0,0,0,28.473-9.246,100.535,100.535,0,0,0,23.678-24.021,189.08,189.08,0,0,0,18.835-33.12,329.854,329.854,0,0,0,13.943-36.643,276.316,276.316,0,0,0,8.561-34.637,161.113,161.113,0,0,0,2.74-26.712Z" transform="translate(437.674 151.004)" fill="none" stroke="#333" stroke-width="1"/>
                            <path className="opacity-0" d="M147.48.48h90.6c44.03,0,73.384,23.678,73.384,63.257,0,32.142-15.313,49.9-39.921,56.114v.587c49.558,9.784,31.506,97.258,43,100.976v1.761H284.316c-9.785-9.344,11.546-90.066-44.862-90.066H175.513v90.066H147.48Zm28.033,107.629h55.772c23.091,0,52.053-2.789,52.053-41.437s-28.962-41.437-52.053-41.437H175.513Z" transform="translate(607.028 152.888)" fill="none" stroke="#333" stroke-width="1"/>
                            <path className="opacity-0" d="M185.89.48h38.355L294.058,185.6h.587L364.457.48h38.355v222.7H374.78V40.058h-.636L306.826,223.175h-24.95L214.559,40.058h-.636V223.175H185.89Z" transform="translate(756.529 152.888)" fill="none" stroke="#333" stroke-width="1"/>
                            <path className="opacity-0" d="M0,.48H90.409c44.03,0,73.384,23.678,73.384,63.257,0,32.142-15.264,49.9-39.872,56.114v.587c49.51,9.784,31.457,97.258,43,100.976v1.761H136.983c-9.784-9.344,11.5-90.066-44.911-90.066H28.033v90.066H0ZM28.033,108.109H83.853c23.042,0,52.053-2.789,52.053-41.437S106.9,25.43,83.853,25.43H28.033Z" transform="translate(33 152.888)" fill="none" stroke="#333" stroke-width="1"/>
                            <path className="opacity-0" d="M180.872,95.536v24.9H66.492V198.42H199.561v24.755H38.41V.48H195.842V25.43H66.492V95.536Z" transform="translate(182.501 152.888)" fill="none" stroke="#333" stroke-width="1"/>
                            <path className="opacity-0" d="M203.573,97.738v24.95h-99.41V223.175H76.13V.48H227.154V25.43H104.163V97.738Z" transform="translate(329.316 152.888)" fill="none" stroke="#333" stroke-width="1"/>
                          </g>
                        </g>
                      </svg>



                      {/* <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230.23 47.41"><g>
                        
                        <motion.path
                          d={'M132.83,0A12.23,12.23,0,0,1,138,1a9.29,9.29,0,0,1,3.54,2.78A12.53,12.53,0,0,1,143.62,8a19.14,19.14,0,0,1,.69,5.29,28.29,28.29,0,0,1-1.07,7.42,40.43,40.43,0,0,1-3,7.7,45.71,45.71,0,0,1-4.6,7.24,36.88,36.88,0,0,1-5.87,6.08,27.85,27.85,0,0,1-6.84,4.16,19,19,0,0,1-7.49,1.55,12.42,12.42,0,0,1-5.15-1,9.2,9.2,0,0,1-3.58-2.78,12.53,12.53,0,0,1-2.06-4.19,19.58,19.58,0,0,1-.68-5.29A28.26,28.26,0,0,1,105,26.73a40.43,40.43,0,0,1,3-7.7,46.52,46.52,0,0,1,4.6-7.25,37.33,37.33,0,0,1,5.88-6.08,28.25,28.25,0,0,1,6.83-4.15A19,19,0,0,1,132.83,0Zm5,11.61a18.35,18.35,0,0,0-.38-3.78,8.91,8.91,0,0,0-1.27-3.12,6.25,6.25,0,0,0-2.44-2.13,8.46,8.46,0,0,0-3.88-.79,9.56,9.56,0,0,0-5.67,1.89,20.83,20.83,0,0,0-4.81,4.91,39.58,39.58,0,0,0-3.85,6.77,61.5,61.5,0,0,0-2.81,7.48A60.27,60.27,0,0,0,111,29.92a32.93,32.93,0,0,0-.59,5.46,18.35,18.35,0,0,0,.38,3.78,9.33,9.33,0,0,0,1.24,3.13,6.13,6.13,0,0,0,2.37,2.13,8.08,8.08,0,0,0,3.78.79A9.83,9.83,0,0,0,124,43.32a20.55,20.55,0,0,0,4.84-4.91,38.65,38.65,0,0,0,3.85-6.77,67.42,67.42,0,0,0,2.85-7.49,56.48,56.48,0,0,0,1.75-7.08A32.93,32.93,0,0,0,137.85,11.61Z'}
                          initial={{ pathLength: 1, pathOffset: 0 }}
                          animate={{ pathLength: 0, pathOffset: 1 }}
                          transition={{ duration: 2 }}
                          className="opacity-100"
                          fill="red"
                        />
                        </g>

                        <path className="opacity-0" fill="#333" d="M147.48.48H166c9,0,15,4.84,15,12.93,0,6.57-3.13,10.2-8.16,11.47V25c10.13,2,6.44,19.88,8.79,20.64V46h-6.18c-2-1.91,2.36-18.41-9.17-18.41H153.21V46h-5.73Zm5.73,22h11.4c4.72,0,10.64-.57,10.64-8.47s-5.92-8.47-10.64-8.47h-11.4Z"/>
                        <path className="opacity-0" fill="#333" d="M185.89.48h7.84L208,38.32h.12L222.39.48h7.84V46H224.5V8.57h-.13L210.61,46h-5.1L191.75,8.57h-.13V46h-5.73Z"/>
                        <path className="opacity-0" fill="#333" d="M0,.48H18.48c9,0,15,4.84,15,12.93,0,6.57-3.12,10.2-8.15,11.47V25c10.12,2,6.43,19.88,8.79,20.64V46H28c-2-1.91,2.35-18.41-9.18-18.41H5.73V46H0Zm5.73,22H17.14c4.71,0,10.64-.57,10.64-8.47S21.85,5.58,17.14,5.58H5.73Z"/>
                        <path className="opacity-0" fill="#333" d="M67.53,19.91V25H44.15V40.94h27.2V46H38.41V.48H70.59v5.1H44.15V19.91Z"/>
                        <path className="opacity-0" fill="#333" d="M102.18,20.36v5.1H81.86V46H76.13V.48H107v5.1H81.86V20.36Z"/></svg> */}
                    </motion.div>
                    <div className="w-full md:w-3/12 hidden md:block self-center">
                      <motion.div 
                        initial={{ x: "25%" }}
                        animate={{ x: "0" }}
                        transition={{ duration: 3.5, delay: 0, ease: [0.76, 0, 0.24, 1] }}
                        className="w-full h-px bg-offblack ml-8">
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.section>
        )}

        <div className="w-full h-screen absolute top-0 left-0 right-0 bottom-0 texture-overlay z-0"></div>
        <Header noLogo={ this.props.location.pathname === '/' ? true : false }/>
        <main id="scroll-container" data-scroll-container>
          <AnimatePresence exitBeforeEnter>
            {this.props.children}
          </AnimatePresence>
        </main>
      </>
    )
  }
}

export default Layout
