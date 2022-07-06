import React, { Component } from "react";
import Image from 'next/image'

import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineArrowDown,
} from "react-icons/ai";
import Swipe from "react-easy-swipe";
import IflabLogo_SVG from "../IfLab_logo/IfLabLogoSVG-No-Hover";

class HeroCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      paused: false,
    };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.paused === false) {
        let newSlide =
          this.state.currentSlide === this.props.CarouselData.length - 1
            ? 0
            : this.state.currentSlide + 1;
        this.setState({ currentSlide: newSlide });
      }
    }, 3000);
  }

  nextSlide = () => {
    let newSlide =
      this.state.currentSlide === this.props.CarouselData.length - 1
        ? 0
        : this.state.currentSlide + 1;
    this.setState({ currentSlide: newSlide });
  };

  prevSlide = () => {
    let newSlide =
      this.state.currentSlide === 0
        ? this.props.CarouselData.length - 1
        : this.state.currentSlide - 1;
    this.setState({ currentSlide: newSlide });
  };

  setCurrentSlide = (index) => {
    this.setState({ currentSlide: index });
  };

  render() {
    return (
      <header className="absolute w-full h-screen overflow-hidden z-50">
        <div className="h-full w-full grid place-items-center absolute z-20 ">
          {/* <div className="bg-white m-auto h-72 w-72"> */}
          <div className="text-white">
            <div className="text-white  m-auto pb-12 z-50   w-72  md:w-[480px]  ">
              <IflabLogo_SVG />
            </div>
            {/* review if we want this  */}
            {/* <div className="flex pt-14 mb-4 justify-center   border-b"> */}
            {/* <p className="flex  mb-4 justify-center  text-2xl" >WE ASK WHAT IF?</p> */}
            {/* <p className="flex  mb-4 justify-center font-light text-2xl" >We Solve Complex Problems</p> */}
            {/* </div> */}
            <div className="flex pt-2 justify-center border-t   ">
              <a href="#Home" className="pt-12">
                <AiOutlineArrowDown className=" bg-opacity-20 motion-safe:animate-bounce z-50 bg-black  text-4xl rounded-md border-2  text-white cursor-pointer" />
              </a>
            </div>
          </div>
        </div>

        <Swipe onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
          {this.props.CarouselData.map((slide, index) => {
            return (
              <img
              loading={
                (index === this.state.currentSlide || index + 1 === this.state.currentSlide || index + 2 === this.state.currentSlide)
                ? "eager"
                : "eager"
              }
              fetchpriority="high"
              key={index} 
              src={slide.image}
              alt="if/lab Project image"
              className={
                index === this.state.currentSlide
                ? " mx-auto object-cover h-screen  opacity-100 w-full z-0  filter brightness-75"
                : "hidden"
              }
              />
            );
          })}
        </Swipe>
      </header>
    );
  }
}

export default HeroCarousel;
