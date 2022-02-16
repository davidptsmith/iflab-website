import React, { Component } from "react";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";




class ImagesCarousel extends Component {
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

        <header className="relative  overflow-hidden  mx-auto ">

          <AiOutlineLeft
            onClick={this.prevSlide}
            className="absolute bg-gray-500 bg-opacity-20   left-0 text-3xl inset-y-1/2 text-white cursor-pointer"
          />

          <Swipe onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
            {this.props.CarouselData.map((slide, index) => {
              return (
                    <img
                     key={index}
                    src={slide.image}
                    alt="This is a carousel slide"
                   
                    className={
                        index === this.state.currentSlide
                        ? " mx-auto object-cover md:h-[800px] w-full  "
                        : "hidden"
                        }
                        onMouseEnter={() => {
                            this.setState({ paused: true });
                        }}
                        onMouseLeave={() => {
                            this.setState({ paused: false });
                        }}
                        />
             
              );
            })}
          </Swipe>

          <div className="absolute w-full flex justify-center bottom-0">
            {this.props.CarouselData.map((element, index) => {
              return (
                <div
                  className={
                    index === this.state.currentSlide
                      ? "h-2 w-2 bg-blue-700 rounded-full mx-2 mb-2 cursor-pointer"
                      : "h-2 w-2 bg-white rounded-full mx-2 mb-2 cursor-pointer"
                  }
                  key={index}
                  onClick={() => {
                    this.setCurrentSlide(index);
                  }}
                ></div>
              );
            })}
          </div>

          <AiOutlineRight
            onClick={this.nextSlide}
            className="absolute right-0 bg-gray-500 bg-opacity-20  text-3xl inset-y-1/2 text-white cursor-pointer"
          />
 
            

    </header>

    );
  }
}



export default ImagesCarousel;




  