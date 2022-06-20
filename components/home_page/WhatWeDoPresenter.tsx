import Link from "next/dist/client/link";
import KeyProjectsCard from "./KeyProjectsCard";
import NavigationText from "../Utilities/NavigationText";
const WhatWeDoPresenter = () => {
  return (
    <div
      id="KeyProjects"
      className=" relative mx-auto  h-full "
      // className=" md:min-h-[800px] py-24 md:p-0 md:py-36 lg:px-4 md:w-4/5 w-11/12 my-auto h-full place-items-center grid  mx-auto"
    > 
    <div className="absolute w-full pt-8 pl-24 ">
        <h1 className=" w-10/12 pt-8 mx-auto underline">What We Do.</h1>
    </div>
      {/* <div className=" "> */}
      <div className=" m-auto place-items-center grid  ">
         <img src="./images/diagrams/Iflab Network Diagram-01.png" className=" h-[1000px]"></img>
         
          </div>
        {/* <div className="grid  lg:grid-cols-3  w-full h-full md:min-h-[600px]  2xl:space-x-8 gap-8 mx-auto ">
          <KeyProjectsCard
            projectName={"Precinct"}
            projectType={"Concept Design"}
            projectDescription={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, fugiat."
            }
            imageUrl={"/images/HomeHeroImages/02.jpg"}
            link_path={"Projects/Precinct"}
          />

          <KeyProjectsCard
            projectName={"Anemoi"}
            projectType={"Public Art"}
            projectDescription={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, fugiat."
            }
            imageUrl={"/images/HomeHeroImages/01.jpg"}
            link_path={"Projects/Anemoi"}
          />

          <KeyProjectsCard
            projectName={"Yanchep SHS"}
            projectType={"Public Art"}
            projectDescription={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, fugiat."
            }
            imageUrl={"/images/HomeHeroImages/12.jpg"}
            link_path={"Projects/Yanchep-Stage-1"}
          />
        </div> */}



      {/* </div> */}
    </div>
  );
};

export default WhatWeDoPresenter;
