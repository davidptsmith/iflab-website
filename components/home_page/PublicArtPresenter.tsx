import Link from "next/dist/client/link";
import KeyProjectsCard from "./KeyProjectsCard";
import NavigationText from "../Utilities/NavigationText";
const PublicArtPresenter = () => {
  return (
    <div id="KeyProjects" className="SectionStyle">
      <div className="grid  lg:grid-cols-3  w-10/12 md:py-24 2xl:space-x-8 gap-8 mx-auto ">
        <div className=" m-auto w-10/12 pt-12 ">
          <h1>
            Key Projects:
            <br />
            Public Art
          </h1>
          <p className="">
            We use public art as a way of giving back to the community and a
            testing bed for innovation. We work alongside architects,
            fabricators, and clients to ensure that the solutions we provide are
            fit for purpose add value.
            <br />
            Our projects work with new fabrication techniques to realise complex
            geometry and ensure that we minimize the wastage of our designs to
            ensure they align with our core sustainability goals.
          </p>
          <NavigationText
            text={"See our other projects here"}
            url={"./Projects"}
          />
        </div>

        <KeyProjectsCard
          projectName={"Anemoi"}
          projectType={"Public Art"}
          projectDescription={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, fugiat."
          }
          imageUrl={"/images/HomeHeroImages/01_ifLab_Public_Art_Anemoi.jpg"}
          link_path={"/Projects/Anemoi"}
        />

        <KeyProjectsCard
          projectName={"Yanchep SHS"}
          projectType={"Public Art"}
          projectDescription={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, fugiat."
          }
          imageUrl={"/images/HomeHeroImages/12_ifLab_Public_Art_Yanchep.jpg"}
          link_path={"/Projects/Yanchep-Stage-1"}
        />
      </div>
    </div>
  );
};

export default PublicArtPresenter;
