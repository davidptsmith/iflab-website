import Link from "next/dist/client/link";
import KeyProjectsCard from "./KeyProjectsCard";
import NavigationText from "../Utilities/NavigationText";
const ResearchPresenter = () => {
  return (
    <div id="KeyProjects" className="SectionStyle">
      <div className=" flex flex-col-reverse lg:grid  lg:col  lg:grid-cols-3  md:w-10/12 w-11/12  2xl:space-x-8 gap-8 mx-auto pt-4">
        <KeyProjectsCard
          projectName={"Shop Drawing Automation"}
          projectType={"Public Art"}
          projectDescription={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, fugiat."
          }
          imageUrl={"/images/posts/Automated_Modeling_Drawings_from_Site_Measurements/Automated_Modeling_Drawings_from_Site_Measurements_4.jpg"}
          link_path={"/Insights/Automated_Modeling_Drawings_from_Site_Measurements"}
        />

        <KeyProjectsCard
          projectName={"Creative Design Workflows"}
          projectType={"Public Art"}
          projectDescription={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, fugiat."
          }
          imageUrl={"/images/posts/Physics_based_Simulations/Physics_based_Simulations_1.jpg"}
          link_path={"/Insights/Physics_based_Simulations"}
        />

        <div className=" m-auto md:w-10/12   lg:pl-8">
          <h1>
            Creating Value
            <br />
            Through Applied Research
          </h1>
          <p className="">
            Research is at the heart of if/lab's processes. We are never happy
            with "what is" but rather challenge the status quo by asking{" "}
            "what if?"
          </p>
          <p className="">
            Projects provide numerous challenges and opportunities to do better.
            We are constantly learning and adapting to changing technologies and
            challenge.
          </p>
          <NavigationText
            text={"Find our project insights here"}
            url={"/Insights"}
          />
        </div>
      </div>
    </div>
  );
};

export default ResearchPresenter;
