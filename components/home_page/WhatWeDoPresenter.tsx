import Link from "next/dist/client/link";
import KeyProjectsCard from "./KeyProjectsCard";
import NavigationText from "../Utilities/NavigationText";
const WhatWeDoPresenter = () => {
  return (
    <div id="KeyProjects" className=" relative mx-auto  h-full ">
      <div className="lg:absolute w-full pt-8 lg:pl-24 ">
        <h1 className=" w-10/12 -mb-4  text-center lg:text-left pt-8 mx-auto ">What We Do.</h1>
      </div>
      <div className=" mx-auto place-items-center grid  ">
        <img
          src="./images/diagrams/Iflab Network Diagram-01.png"
          className=" w-11/12 xl:w-3/5 lg:pt-4"
        ></img>
      </div>
    </div>
  );
};

export default WhatWeDoPresenter;
