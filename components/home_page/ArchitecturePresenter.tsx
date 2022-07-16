import Link from "next/dist/client/link";
import KeyProjectsCard from "./KeyProjectsCard";
import NavigationText from "../Utilities/NavigationText";
const ArchitecturePresenter = () => {
  return (
    <div id="KeyProjects" className="SectionStyle">
      <div className="grid  lg:grid-cols-3 w-11/12  md:w-10/12 md:py-24  2xl:space-x-8 gap-8 mx-auto ">
        <div className=" m-auto md:w-10/12 pt-12 ">
          <h1>
            Key Projects:
            <br />
            Architecture 
          </h1>
          <p className="">
          At intensive fields, we are a small design practice of architects, creative technologists and designers who aspire to change and disrupt the future of design, architecture and construction.
          </p>
          <p>
            We aspire to do so by using innovative thinking and expertise, creativity, open minds and collaboration to solve complex design problems and create sustainable and equitable design solutions for all.
          </p>
          {/* <p>
          Our architectural approach is focused around modern digital methods of design that allow us to make better design decisions for a better built environment.
          </p>
          <p>
          Most of our architectural projects are primarily in prefabricated timber and span across Modern Methods of Construction and Design for Manufacture and Assembly (DfMA), enabled by the use of creative technologies and integrated design and automation.
          </p> */}
          <NavigationText
            text={"See our projects here"}
            url={"/Projects"}
          />
        </div>

        <KeyProjectsCard
          projectName={"Ravensthorpe"}
          projectType={"Architecture"}
          projectDescription={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, fugiat."
          }
          
          imageUrl={"/images/projects/Ravensthorpe/cover_image.jpg"}
          link_path={"/Projects/Ravensthorpe"}
          />

        <KeyProjectsCard
          projectName={"Timberbuilt Cabins"}
          projectType={"Architecture"}
          projectDescription={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, fugiat."
          }
          imageUrl={"/images/projects/Prefabricated Chalets/cover_image.jpg"}
          link_path={"/Projects/Prefabricated-Chalets"}
        />
      </div>
    </div>
  );
};

export default ArchitecturePresenter;
