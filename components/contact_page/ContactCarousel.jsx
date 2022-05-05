import React, { Component } from "react";

import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineArrowDown,
} from "react-icons/ai";
import Swipe from "react-easy-swipe";
import IflabLogo_SVG from "../IfLab_logo/IfLabLogoSVG-No-Hover";

class ContactCarousel extends Component {
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
    }, 5000);
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
    console.log(this.props);

    return (
      <header className="h-ful w-full relative    overflow-hidden ">
        <div className="h-full w-full absolute grid place-items-center  z-20 ">
          {/* <div className="bg-white m-auto h-72 w-72"> */}
          <div className="text-white">
            <div className="text-white  m-auto pb-12   w-72   ">
              <IflabLogo_SVG />
            </div>
            {/* review if we want this  */}
            {/* <div className="flex pt-14 mb-4 justify-center   border-b"> */}
            {/* <p className="flex  mb-4 justify-center  text-2xl" >WE ASK WHAT IF?</p> */}
            {/* <p className="flex  mb-4 justify-center font-light text-2xl" >We Solve Complex Problems</p> */}
            {/* </div> */}
            {/* <div className="flex pt-2 justify-center border-t   ">
              <a href="#Home" className="pt-12">
                <AiOutlineArrowDown className=" bg-opacity-20 motion-safe:animate-bounce bg-black  text-4xl rounded-md border-2  text-white cursor-pointer" />
              </a>
            </div> */}
          </div>
        </div>

        <Swipe onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
          {this.props.CarouselData.map((slide, index) => {
            return (
              <img
                key={index}
                src={slide.image}
                alt="This is a carousel slide"
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

export default ContactCarousel;