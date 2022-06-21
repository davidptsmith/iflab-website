import Link from "next/dist/client/link";
import KeyProjectsCard from "./KeyProjectsCard";
import NavigationText from "../Utilities/NavigationText";
const WhatWeDoPresenter = () => {
  return (
    <div id="KeyProjects" className=" relative mx-auto  h-full ">
      <div className="absolute w-full pt-8 pl-24 ">
        <h1 className=" w-10/12 pt-8 mx-auto underline">What We Do.</h1>
      </div>
      <div className=" m-auto place-items-center grid  ">
        <img
          src="./images/diagrams/Iflab Network Diagram-01.png"
          className=" h-[1000px]"
        ></img>
      </div>
    </div>
  );
};

export default WhatWeDoPresenter;
