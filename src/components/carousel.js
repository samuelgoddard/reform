import React, { Component } from "react";
import Slider from "react-slick";
import Img from 'gatsby-image'

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      fade: true,
      arrows: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="flex flex-col w-full h-full">
        <div className="md:mb-6 md:mt-16  w-full h-full flex flex-col order-2 md:order-1">
          <Slider ref={c => (this.slider = c)} {...settings}>
            {this.props.images.map(({ fluid }, i) => {
              return (
                <div key={i} className="w-full h-full">
                  <Img fluid={fluid} className="w-full h-full object-cover object-center" />
                </div>
              )
            })}
          </Slider>
        </div>

        <div className="border-t border-b border-black w-full flex flex-wrap items-center md:mb-6 order-1 md:order-2">
          <div className="flex flex-wrap items-center w-full px-4 md:px-0 overflow-hidden">
            <div className="flex-1 pt-3 pb-5 md:pt-2 md:pb-2 border-r border-black md:border-none">
              <span className="block uppercase text-xs leading-tight mb-0 md:mb-0">{ this.props.location }</span>
              <span className="block text-sm md:text-lg xl:text-xl leading-tight md:mt-0">{this.props.title}</span>
            </div>

            <div className="w-auto ml-auto md:border-none border-black h-full md:py-4 pl-2">
              <div className="flex flex-wrap items-center">
                {/* <span className="hidden md:block md:text-lg">1/18</span> */}
                <div className="flex ml-3 -mt-3 md:mt-0">
                  <button onClick={this.previous} className="focus:outline-none hover:outline-none flex items-center justify-center w-8 md:w-12 h-8 md:h-12 rounded-full border border-black leading-none text-2xl mx-1 transform group">
                    <span className="block overflow-hidden relative h-auto md:h-4 xl:h-4">
                      <span className="block transform md:group-hover:-translate-y-1/2 transition duration-300 ease-in-out md:-mt-1 md:leading-tight">
                        <span className="block transform translate md:pt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-2 md:w-3" viewBox="0 0 16.01 18.144"><path d="M0 6.404l6.4-6.4 1.52 1.511-3.832 3.821H16.01v12.808h-2.135V7.471H4.088l3.832 3.821-1.516 1.516z" fill="currentColor"/></svg>
                        </span>
                        <span className="hidden md:block md:pt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-2 md:w-3" viewBox="0 0 16.01 18.144"><path d="M0 6.404l6.4-6.4 1.52 1.511-3.832 3.821H16.01v12.808h-2.135V7.471H4.088l3.832 3.821-1.516 1.516z" fill="currentColor"/></svg>
                        </span>
                      </span>
                    </span>
                  </button>

                  <button onClick={this.next} className="flex items-center justify-center w-8 md:w-12 h-8 md:h-12 rounded-full border border-black leading-none text-2xl mx-1 transform group focus:outline-none hover:outline-none">

                    <span className="block overflow-hidden relative h-auto md:h-4 xl:h-4">
                      <span className="block transform md:group-hover:-translate-y-1/2 transition duration-300 ease-in-out md:-mt-1 md:leading-tight">
                        <span className="block transform translate md:pt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-2 md:w-3" viewBox="0 0 16.01 18.144"><path d="M16.01 6.4L9.606 0 8.09 1.516l3.832 3.821H0v12.807h2.135V7.471h9.787L8.09 11.292l1.516 1.516z" fill="currentColor"/></svg>
                        </span>
                        <span className="hidden md:block md:pt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-2 md:w-3" viewBox="0 0 16.01 18.144"><path d="M16.01 6.4L9.606 0 8.09 1.516l3.832 3.821H0v12.807h2.135V7.471h9.787L8.09 11.292l1.516 1.516z" fill="currentColor"/></svg>
                        </span>
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}