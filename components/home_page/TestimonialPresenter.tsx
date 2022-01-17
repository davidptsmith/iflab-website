import Link from "next/dist/client/link"
import TestimonialCard from "./TestimonialCard"


const TestimonialPresenter = () => {
    return (
        <div  id="Testimonials" className="h-full  min-h-full flex ">
            <div className="m-auto w-10/12">

            <section className=" my-auto   h-full  lg:px-4 ">
                <div className="w-full  pb-8">
                    <svg className="mx-auto to-blue-300" width="48" height="42" viewBox="0 0 48 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.6153 19.154H10.1537C9.38437 19.154 8.73037 18.8849 8.19185 18.3463C7.65363 17.8078 7.38417 17.154 7.38417 16.3845V15.4619C7.38417 13.4233 8.10546 11.6831 9.54795 10.2406C10.9903 8.79859 12.7309 8.0773 14.7693 8.0773H16.6153C17.1152 8.0773 17.5477 7.89453 17.9133 7.52929C18.2786 7.16384 18.4613 6.73131 18.4613 6.23128V2.53864C18.4613 2.03872 18.2785 1.60578 17.9133 1.24034C17.5478 0.875398 17.1153 0.692322 16.6153 0.692322H14.7693C12.7691 0.692322 10.8608 1.08212 9.04327 1.86059C7.22595 2.63958 5.65404 3.69257 4.32694 5.01967C2.99994 6.34616 1.94726 7.91817 1.16837 9.7357C0.389491 11.553 0 13.4618 0 15.4618V35.769C0 37.3083 0.538216 38.6152 1.61515 39.6926C2.69219 40.7693 4.00019 41.3076 5.53856 41.3076H16.616C18.1542 41.3076 19.4618 40.7693 20.539 39.6926C21.6157 38.6152 22.1542 37.3083 22.1542 35.769V24.6926C22.1542 23.1536 21.6157 21.8466 20.5383 20.7692C19.4616 19.6925 18.1535 19.154 16.6153 19.154Z" 
                         />
                        <path d="M46.3856 20.7692C45.309 19.6925 44.0013 19.154 42.4626 19.154H36.0011C35.2322 19.154 34.5776 18.8849 34.04 18.3463C33.5012 17.8078 33.2323 17.154 33.2323 16.3845V15.4619C33.2323 13.4233 33.9536 11.6831 35.3954 10.2406C36.8372 8.79859 38.5777 8.0773 40.6171 8.0773H42.4627C42.9627 8.0773 43.3955 7.89453 43.7608 7.52929C44.1258 7.16384 44.3092 6.73131 44.3092 6.23128V2.53864C44.3092 2.03872 44.1259 1.60578 43.7608 1.24034C43.3956 0.875398 42.9628 0.692322 42.4627 0.692322H40.6171C38.6158 0.692322 36.7079 1.08212 34.8899 1.86059C33.0729 2.63958 31.5015 3.69257 30.1744 5.01967C28.8473 6.34616 27.7941 7.91817 27.0155 9.7357C26.2368 11.553 25.8468 13.4618 25.8468 15.4618V35.769C25.8468 37.3083 26.3855 38.6152 27.4622 39.6926C28.5389 40.7693 29.8466 41.3076 31.3852 41.3076H42.462C44.0006 41.3076 45.3082 40.7693 46.3849 39.6926C47.4623 38.6152 47.9999 37.3083 47.9999 35.769V24.6926C48 23.1535 47.4623 21.8466 46.3856 20.7692Z" 
                        fill="" />
                    </svg>

                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900 ">
                        Testimonials & Collaborators 
                    </h1>
                    {/* <p className="text-gray-400 font-normal  text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p> */}
                </div>
                <div className="w-full h-full grid grid-cols-1  lg:grid-cols-3  gap-2 sm:gap-6">



                    <TestimonialCard
                        quote={"IfLAB have provided a huge amount of value to both our projects and day to day operations. Their design capabilities and incredible understanding of digital tools have enabled us to find efficiencies throughout our projects, including minimising material wastages and optimising tooling paths for our CNC machines."}
                        personName={"Oran Fitzsimons"}
                        personPosition={"Construction Manager, Kilmore Group"}
                        companyLogo={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXPaCUQ6F9FGbXQllLkj-eqUllG1J0cOyUpbjqkqsjMjAt_zCEKUE5kWWtD8ixnhzduD4&usqp=CAU"}
                    />
                    <TestimonialCard
                        quote={"ifLAB have been assisting Timberbuilt in the development of design-to-fabrication workflows for our prefabricated timber manufacturing processes. Their use of parametric design and overall understanding of digital technologies has made their involvement within our company invaluable."}
                        personName={"John O’Donnell"}
                        personPosition={"Business Manager, Timberbuilt Australia"}
                        companyLogo={"https://timberbuilt.com.au/wp-content/uploads/2015/11/logo.png"}
                        />
                    <TestimonialCard
                        quote={"PHA engage if/LAB across numerous projects to assist in adding value to both the design and delivery phases of our projects. if/LAB enable us to make better informed design decisions earlier on in the project phase, before changes become costly."}
                        personName={"Peter Hobbs"}
                        personPosition={"Director, Peter Hobbs Architects (PHA)"}
                        companyLogo={"data:image/jpeg;base64,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"}
                        />
                    {/* <TestimonialCard
                        quote={"IfLAB have provided a huge amount of value to both our projects and day to day operations. Their design capabilities and incredible understanding of digital tools have enabled us to find efficiencies throughout our projects, including minimising material wastages and optimising tooling paths for our CNC machines."}
                        personName={"Oran Fitzsimons"}
                        personPosition={"Construction Manager, Kilmore Group"}
                        companyLogo={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXPaCUQ6F9FGbXQllLkj-eqUllG1J0cOyUpbjqkqsjMjAt_zCEKUE5kWWtD8ixnhzduD4&usqp=CAU"}
                    /> */}



                </div>
            </section>
                    </div>
        </div>
    )
}

export default TestimonialPresenter
