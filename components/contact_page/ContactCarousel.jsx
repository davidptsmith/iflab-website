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
    return (
      <header className="h-ful w-full relative    overflow-hidden ">
        <div className="h-full w-full absolute grid place-items-center  z-20 ">
          {/* <div className="bg-white m-auto h-72 w-72"> */}
          <div className="text-white">
            <div className="text-white  m-auto pb-12   w-72 sm:w-48 lg:w-[480px]  ">
              <IflabLogo_SVG />
            </div>
           
          </div>
        </div>

        <Swipe onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
          {this.props.CarouselData.map((slide, index) => {
            return (
              <div className="h-full w-full object-cover  min-w-full overflow-clip">

              <img
                key={index}
                src={slide.image}
                alt="This is a carousel slide"
                className={
                  index === this.state.currentSlide
                  ? " mx-auto object-cover h-92    opacity-100 w-full z-0  filter brightness-75"
                  : "hidden"
                }
                />
                </div>
            );
          })}
        </Swipe>
      </header>
    );
  }
}

export default ContactCarousel;
