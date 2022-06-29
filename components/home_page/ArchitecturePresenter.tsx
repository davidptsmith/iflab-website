import Link from "next/dist/client/link";
import KeyProjectsCard from "./KeyProjectsCard";
import NavigationText from "../Utilities/NavigationText";
const ArchitecturePresenter = () => {
  return (
    <div id="KeyProjects" className="SectionStyle">
      <div className="grid  lg:grid-cols-3  w-10/12 md:py-24  2xl:space-x-8 gap-8 mx-auto ">
        <div className=" m-auto w-10/12 pt-12 ">
          <h1>
            Key Projects:
            <br />
            Architecture 
          </h1>
          <p className="">
            Here we should write some text about how we do architectural projects and challenge the status quo. Here we should write some text about how we do architectural projects and challenge the status quo.
            <br />
            Something more about architecture, usually two paragraphs will look nice. Something more about architecture, usually two paragraphs will look nice. 
          </p>
          <NavigationText
            text={"See our other projects here"}
            url={"./Projects"}
          />
        </div>

        <KeyProjectsCard
          projectName={"Ravensthorpe"}
          projectType={"Architecture"}
          projectDescription={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, fugiat."
          }
          
          imageUrl={"/images/projects/Ravensthorpe/cover_image.jpg"}
          link_path={"/Projects/Anemoi"}
        />

        <KeyProjectsCard
          projectName={"Timberbuilt Cabins"}
          projectType={"Architecture"}
          projectDescription={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, fugiat."
          }
          imageUrl={"/images/HomeHeroImages/10_ifLab_Timber_Architecture.jpg"}
          link_path={"/Projects/Yanchep-Stage-1"}
        />
      </div>
    </div>
  );
};

export default ArchitecturePresenter;
