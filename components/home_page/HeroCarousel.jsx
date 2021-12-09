import React, { Component } from "react";

import { AiOutlineLeft, AiOutlineRight, AiOutlineArrowDown } from "react-icons/ai";
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

      <header className="absolute w-full h-screen overflow-hidden  ">




        <div className='h-full w-full grid place-items-center absolute z-20 '>
          {/* <div className="bg-white m-auto h-72 w-72"> */}
          <div className="text-white">

            <div className="text-white  m-auto pb-8 z-50   w-72  md:w-96  ">
 
              <IflabLogo_SVG  />
            </div>

            {/* <h1 className="text-white   text-7xl font-semibold pb-12  z-50 text-center">
              Intensive Fields Lab
            </h1> */}



{/* 

            <div className="grid grid-cols-2 gap-4">
              <button className=" bg-white bg-opacity-50 border-2 px-8 py-2 rounded-md text-white " > Contact Us </button>
              <button className=" bg-white bg-opacity-50 border-2 px-8 py-2 rounded-md text-white " > Contact Us </button>
            </div> */}

            <div className="flex pt-8 mb-4 justify-center   border-b">

              <p className="flex pt-8 mb-4 justify-center font-thin text-2xl" >We Solve Complex Problems</p>
            </div>
            <div className="flex pt-2 justify-center   ">
              <a href="#Home">
              <AiOutlineArrowDown className=" bg-opacity-20  z-50 bg-black  text-4xl rounded-md border-2  text-white cursor-pointer" />
              </a>
            </div>
          </div>

        </div>


      
  


        {/* <AiOutlineLeft
          onClick={this.prevSlide}
          className="absolute bg-gray-500 bg-opacity-20   left-0 text-3xl inset-y-1/2 bottom-0 text-white cursor-pointer"
          /> */}


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
              // onMouseEnter={() => {
              //     this.setState({ paused: true });
              // }}
              // onMouseLeave={() => {
              //     this.setState({ paused: false });
              // }}
              />
         );
        })}
        </Swipe>
   


        {/* <div className="absolute w-full flex justify-center bottom-0">
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
        </div> */}

        {/* <AiOutlineRight
          onClick={this.nextSlide}
          className="absolute right-0 bg-gray-500 bg-opacity-20  text-3xl inset-y-1/2 text-white cursor-pointer"
        /> */}



      </header>

    );
  }
}



export default HeroCarousel;




