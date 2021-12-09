import Link from "next/dist/client/link"
import KeyProjectsCard from "./KeyProjectsCard"
const KeyProjectsPresenter = () => {
    return (
        <div className=" mt-8 py-16">
            {/* key Projects - three cards, link to projects and contact - 2 buttons  */}
            <div className=" mx-auto   w-2/3">
                <h1 >
                    Key Projects and link
                </h1>
            </div>

            <div className="grid lg:grid-cols-3 w-10/12 2xl:gap-0 2xl:space-x-8 gap-4 mx-auto  mt-4 ">


                <KeyProjectsCard
                    projectName={"Barangaroo"}
                    projectType={"Concept Design"}
                    projectDescription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, fugiat."}
                    imageUrl={"https://firebasestorage.googleapis.com/v0/b/iflab-website-test1.appspot.com/o/Barangaroo%2FRender01.png?alt=media&token=356438b5-0da2-49de-9483-706e60a072da"}
                />

                <KeyProjectsCard
                    projectName={"The Crest "}
                    projectType={"Public Art"}
                    projectDescription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, fugiat."}
                    imageUrl={"https://firebasestorage.googleapis.com/v0/b/iflab-website-test1.appspot.com/o/Crest%2FDJI_0073-firstpass.jpg?alt=media&token=5e8091e2-8e86-4ce8-98fc-44bcf33b371a"}
                />

                <KeyProjectsCard
                    projectName={"Yanchep"}
                    projectType={"Public Art"}
                    projectDescription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, fugiat."}
                    imageUrl={"https://firebasestorage.googleapis.com/v0/b/iflab-website-test1.appspot.com/o/Yanchep%2FYanchep.jpg?alt=media&token=6a2fb95e-799c-4334-be44-4192d7437312"}
                />

            </div>

        </div>


    )
}

export default KeyProjectsPresenter