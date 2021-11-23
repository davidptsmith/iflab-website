import Image from 'next/image'

const ProjectPresenter = () => {
    return (
        <div>
{/* hero landing page  */}
{/* <div className=" mx-auto  mt-32 w-2/3">

    <h1 className="text-2xl  w-2/3 i italic" >
        Landing section and Here Shot 
    </h1>
</div> */}

<div className="relative bg-white overflow-hidden">
<div className="w-2/3 mx-auto">
<div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 200 200" preserveAspectRatio="none" aria-hidden="true">
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>
 
   
   


      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">We Solve Your </span>
            <span className="block text-blue-400 xl:inline">Complex Problems.</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                Get started
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10">
                See Projects
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
    <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://firebasestorage.googleapis.com/v0/b/iflab-website-test1.appspot.com/o/Ravensthrope%2F210224_Ravy_presentation_2%20-%20Photo.jpg?alt=media&token=d626b819-0882-493c-aaff-8d7b5a55466f" alt=""/>
  </div>
</div>


{/* About our services and button to contact   */}
{/* <div className=" mx-auto  mt-32 w-2/3">

    <h1 className="text-2xl w-2/3 italic" >
        Mission and what we do 
    </h1>
</div> */}

{/* <div className="w-2/3  m-auto justify-items-center">
            <h1 className="font-semibold text-2xl tracking-widest mt-4 tracking-tight text-black  mx-auto lg:text-center text-left  lg:my-8 ">if/Lab Projects</h1>   
            
                <p className=" lg:text-justify md:text-justify text-left  font-medium text-gray-600 mx-auto sm:overflow-x-auto  xs:h-48 px-2 lg:mt-8 ">
                    We collaborate with architects, engineers and builders to assist in the design and delivery of innovative and complex architectural projects. From concept to delivery, we can help you delivery your project, by automating processes and eliminating inefficiencies and bottlenecks from your design processes.
            </p>
                   
                 
                    <p className=" hidden sm:block md:block lg:block lg:text-justify md:text-justify text-left  font-medium text-gray-600 mx-auto sm:overflow-x-auto  xs:h-48  lg:mt-8 ">
  
                    Integrated public artwork projects in collaboration with local Perth artists. With a background in architecture, we specialise in delivering integrated artworks, using digital design tools and coding to bring innovation into our design and delivery of public art projects. We use digital fabrication or file to fabrication techniques, working closely with fabricators to deliver our projects efficiently.
            
                    </p>
          
           


 </div> */}


{/* key Projects - three cards, link to projects and contact - 2 buttons  */}
<div className=" mx-auto  mt-8 w-2/3">
    <h1 className="text-2xl italic" >
        Key Projects and link 
    </h1>
</div>

<div className="grid 2xl:grid-cols-3 gap-4 w-2/3 space-x-4 justify-items-stretch  mx-auto  mt-4 mb-20 ">

    <div className="shadow-lg rounded-2xl  bg-white flex-1  p-2">
        <img src="https://firebasestorage.googleapis.com/v0/b/iflab-website-test1.appspot.com/o/Barangaroo%2FRender01.png?alt=media&token=356438b5-0da2-49de-9483-706e60a072da" 
        alt="adidas" 
        className=" object-cover p-4 h-96 m-auto"/>
        <div className=" m-3 p-4 rounded-sm">
            <p className="text-gray-600 text-xl font-bold ">
                Barangaroo
            </p>
            <p className="text-gray-400 text-xs">
                Concept Design 
            </p>
            <div className="flex items-center mt-2 justify-between ">
                <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, fugiat.
                </p>
                
            </div>
        </div>
    </div>
    <div className="shadow-lg rounded-2xl  bg-white flex-1  p-2">
        <img src="https://firebasestorage.googleapis.com/v0/b/iflab-website-test1.appspot.com/o/Yanchep%2FYanchep.jpg?alt=media&token=6a2fb95e-799c-4334-be44-4192d7437312" 
        alt="adidas" className="p-4 h-96 m-auto"/>
        <div className=" m-3 p-4 rounded-lg">
            <p className="text-gray-600 text-xl font-bold ">
                Yanchep
            </p>
            <p className="text-gray-400 text-xs">
                Public Art
            </p>
            <div className="flex items-center mt-2 justify-between ">
                <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, fugiat.
                </p>
                
            </div>
        </div>
    </div>
    <div className="shadow-lg rounded-2xl  bg-white flex-1  p-2">
        <img src="https://firebasestorage.googleapis.com/v0/b/iflab-website-test1.appspot.com/o/Crest%2FDJI_0073-firstpass.jpg?alt=media&token=5e8091e2-8e86-4ce8-98fc-44bcf33b371a" 
        alt="adidas" className=" p-4 h-96 m-auto"/>
        <div className="m-3 p-4 rounded-lg">
            <p className="text-gray-600 text-xl font-bold ">
                The Crest 
            </p>
            <p className="text-gray-400 text-xs">
                Public Art
            </p>
            <div className="flex items-center mt-2 justify-between ">
                <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, fugiat.
                </p>
                
            </div>
        </div>
    </div>

</div>



{/* testimonials */}
<div className="bg-gray-200  ">

    <div className="sm:w-2/3 w-5/6 m-auto flex-row md:flex-row gap-4 mb-8 md:mb-0 flex-between items-center p-8">


    <div className="bg-white dark:bg-gray-800 w-full mx-auto m-8 p-8">
        <div className="flex items-center md:items-start flex-col md:flex-row justify-center">
         
                <img alt="Company Logo" src="https://kilmoregroup.com.au/wp-content/uploads/2020/02/Kilmore-Group-White_178x62.png" 
                    className="m-auto  block relative  w-1/3"/>
     
            <div className="w-full md:w-2/3">
                <p className="text-gray-600 dark:text-white w-full md:w-5/6 m-auto italic md:text-justify text-left text-lg lg:text-3xl">
                <span className="font-bold mr-1 text-blue-400">
                        “
                    </span>
                    IfLAB have provided a huge amount of value to both our projects and day to day operations. Their design capabilities and incredible understanding of digital tools have enabled us to find efficiencies throughout our projects, including minimising material wastages and optimising tooling paths for our CNC machines.
                    <span className="font-bold ml-1 text-blue-400">
                        ”
                    </span>
                </p>
                <div className="flex mt-8 items-center justify-center">
                    <span className="font-semibold text-blue-400 mr-2 text-lg">
                    Oran Fitzsimons
                    </span>
                    <span className="text-gray-400 text-xl font-light">
                        /
                    </span>
                    <span className="text-gray-400 text-md ml-2">
                    Construction Manager, Kilmore Group
                    </span>
                </div>
            </div>
        </div>
    </div>

    <div className="bg-white dark:bg-gray-800 w-full mx-auto m-8 p-8">
        <div className="flex items-center md:items-start flex-col md:flex-row justify-center">
  
                <img alt="Company Logo" src="https://timberbuilt.com.au/wp-content/uploads/2015/11/logo.png"
                        className="m-auto  block relative  w-1/3"/>

            <div className="w-full md:w-2/3">
                <p className="text-gray-600 dark:text-white w-full  md:w-5/6 m-auto italic md:text-justify   text-left text-lg lg:text-3xl">
                <span className="font-bold mr-1 text-blue-400">
                        “
                    </span>
                    ifLAB have been assisting Timberbuilt in the development of design-to-fabrication workflows for our prefabricated timber manufacturing processes. Their use of parametric design and overall understanding of digital technologies has made their involvement within our company invaluable
                    <span className="font-bold ml-1 text-blue-400">
                        ”
                    </span>
                </p>
                <div className="flex mt-8 items-center justify-center">
                    <span className="font-semibold text-blue-400 mr-2 text-lg">
                    John O’Donnell
                    </span>
                    <span className="text-gray-400 text-xl font-light">
                        /
                    </span>
                    <span className="text-gray-400 text-md ml-2">
                    Business Manager, Timberbuilt Australia
                    </span>
                </div>
            </div>
        </div>
    </div>

    <div className="bg-white dark:bg-gray-800 m-8 w-full mx-auto p-8">
        <div className="flex items-center md:items-start flex-col md:flex-row  justify-center">
  
                <img alt="Company Logo" 
                src="data:image/jpeg;base64,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" 
                className="m-auto  block relative  h-64 "/>

            <div className="w-full md:w-2/3">
                <p className="text-gray-600 dark:text-white w-full  md:w-5/6  m-auto italic md:text-justify   text-left text-lg lg:text-3xl">
                    <span className="font-bold mr-1 text-blue-400">
                        “
                    </span>
                    PHA engage if/LAB across numerous projects to assist in adding value to both the design and delivery phases of our projects. if/LAB enable us to make better informed design decisions earlier on in the project phase, before changes become costly. We love being able to assess and optimise our designs for daylighting and heating and cooling, minimising material use for a smaller carbon footprint, and test and iterate across many design options at the early conceptual massing stages       
                    <span className="font-bold ml-1 text-blue-400">
                        ”
                    </span>
                </p>
                <div className="flex mt-8 items-center justify-center">
                    <span className="font-semibold text-blue-400 mr-2 text-lg">
                    Peter Hobbs
                    </span>
                    <span className="text-gray-400 text-xl font-light">
                        /
                    </span>
                    <span className="text-gray-400 text-md ml-2">
                    Director, Peter Hobbs Architects (PHA)
                    </span>
                </div>
            </div>
        </div>
    </div>

    
    </div>
</div> 



{/* Contact Section*/}
<div className=" flex flex-row  flex-nowrap	 mx-auto  grid-cols-2 mt-32 w-2/3">

<div className="w-2/3">

    <h1 className="text-2xl italic" >
         Contact Us 
    </h1>
      <p className="text-gray-600 font-light text-justify p-4 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur exercitationem saepe iure eos quas nobis nihil fuga quis! Accusamus cumque nobis provident explicabo at corrupti, perspiciatis tempora libero distinctio aspernatur quos deserunt sed non consequuntur? Quod voluptatibus quas vero fuga nobis omnis in nesciunt? Vero minima commodi illum cumque quas a asperiores, fugiat architecto accusamus nihil soluta officiis ullam ut doloremque dolores perferendis velit incidunt et enim minus ipsam sequi. Tempore at culpa itaque delectus tenetur ab quasi quae, temporibus quibusdam alias consectetur libero ipsa ducimus dolorem? Animi ad at, ipsum labore quibusdam eos officia magni soluta excepturi dolor voluptates quisquam sit iste placeat repellendus voluptatibus beatae sequi enim nostrum neque. Beatae mollitia maxime, facilis ipsam fuga doloremque ab in, tempore delectus nihil cupiditate vero explicabo porro distinctio facere. Itaque assumenda asperiores temporibus ea maxime distinctio consequuntur. Harum nobis perferendis corporis quo iste earum! Voluptatibus debitis impedit omnis eaque doloremque!
      </p>
</div>
<div className="w-2/3">

    <img className=" object-cover  inset-y-0 right-0 "
    src="https://firebasestorage.googleapis.com/v0/b/iflab-website-test1.appspot.com/o/Redcliffe%2F2021-03-29%2015_21_13-200322%20Key%20Stakeholder%20Meeting%203%20Presentation_Final%20Draft.pdf%20-%20Adobe%20Acrobat%20Pr.png?alt=media&token=43f32fe4-2c07-469f-b0d5-10527f99e6ec" 
    alt="Redecliffe" />

    </div>



</div>

     </div>
    )
}

export default ProjectPresenter