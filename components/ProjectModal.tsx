// @ts-ignore
import React, { useState } from 'react'
import Footer from './Footer';


// can you create a page instead of a model 

// printing doing odd things 
// process building pages 
// 

const ProjectModal = ({ selectedProject, setSelectedProject }) => {

  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedProject(null);
    }
  }

  return (
    <div className="backdrop" onClick={handleClick}>

      <div className="presenter_small block w-11/12 mx-auto my-2  top-5 bottom-5 overflow-y-auto relative bg-white 
               sm:w-2/3 
                ">


        {/* about project */}


        {/* image removed? it does look cleaner? */}
        <img src={selectedProject.primaryImageUrl} className="modalheroimage w-full object-cover " alt="This is a project" />

        <br />
        <div className="max-w-2xl mx-auto  px-4  sm:px-6 sm:pt-8 xl:pt-14 2xl:pt-14 lg:max-w-7xl lg:px-8 lg:grid-cols-2" >
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{selectedProject.FullName} </h2>

        </div>
        {/*Paragraph data */ }
        <div className="max-w-2xl mx-auto  px-4 grid items-center grid-cols-1 gap-y-8 gap-x-8  lg:max-w-7xl lg:px-8 lg:grid-cols-2">
          <div>
            <p className=" text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum amet quiss atque a enim odit eligendi dolor iusto minima quaerat. Eveniet nesciunt, nemo quos, asperiores molestiae quisquam deserunt dicta iste necessitatibus labore ut animi suscipit illo maxime quis nulla natus sint quidem et recusandae odit aut a corporis quam! Suscipit explicabo quasi doloribus, consequuntur inventore qui rerum atque voluptatibus officia unde, quisquam quaerat consectetur est, numquam ducimus cum aliquam dicta ullam harum corrupti quos error?
            </p>
      {/*Table for data */ }
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">People:</dt>
                <dd className="mt-2 text-sm text-gray-500">Clients and Collaborators</dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Project Details </dt>
                <dd className="mt-2 text-sm text-gray-500">Solid walnut base with rare earth magnets and powder coated steel card cover</dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Budget</dt>
                <dd className="mt-2 text-sm text-gray-500">$120,000</dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Location</dt>
                <dd className="mt-2 text-sm text-gray-500">Hand sanded and finished with natural oil</dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Includes</dt>
                <dd className="mt-2 text-sm text-gray-500">Wood card tray and 3 refill packs</dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Considerations</dt>
                <dd className="mt-2 text-sm text-gray-500">Made from natural materials. Grain and color vary with each item.</dd>
              </div>
            </dl>
          </div>

                {/*Images to display  */ }
          <div className="flex-grid mt-2  gap-4 sm:gap-6 lg:gap-8">
            <img src={selectedProject.primaryImageUrl} alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." className="bg-gray-100 m-8  h-72 w-full object-cover rounded-lg" />
            <img src={selectedProject.primaryImageUrl} alt="Walnut card tray filled with cards and card angled in dedicated groove." className="bg-gray-100 h-72  m-8   w-full object-cover rounded-lg" />
          </div>

        </div>



        <br />
           {/* New paragraph*/ }
        <div className="max-w-2xl mx-auto  px-4  items-center  gap-y-8 gap-x-8 sm:px-6 sm:py-8 xl:py-4 2xl:py-4 lg:max-w-7xl lg:px-8 ">
          <h3 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl"> Concept </h3>
          <p className="mt-4 text-gray-500">
            This artwork is inspired by the tactile local experience of the flavour of Fremantle. The soffit surface was create digitally via a cutting edge, innovative design process. The form is achieved through a unique form-finding process - using a physics based simulation software - to simulated the ‘Fremantle Doctor’ on a sail like surface, allowing for a unique, free flowing form to evolve.
          </p>

          <img src={selectedProject.primaryImageUrl} className="backdrop_img" alt="This is a project" />

        </div>


        <div className="max-w-2xl mx-auto  px-4  items-center  gap-y-8 gap-x-8 sm:px-6 sm:py-8 xl:py-4 2xl:py-4 lg:max-w-7xl lg:px-8 ">
          <h3 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl"> Processes </h3>
          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ex assumenda eaque quo explicabo! Quam esse, odio, iure eveniet provident fugiat nisi vel nam cupiditate tenetur ratione enim necessitatibus corrupti?

            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem incidunt dolor quas, voluptas ab id porro voluptatem officiis aperiam labore ipsa, perspiciatis, facilis nisi molestiae! Quos, numquam. Cumque, voluptatibus natus!

            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque harum tenetur perspiciatis! Adipisci ducimus recusandae praesentium voluptatem nesciunt doloremque, velit quas sed consequatur eaque accusantium? Perspiciatis optio consectetur distinctio accusantium, eum repellat sit earum quis tempore ipsam, eos atque nesciunt. Alias delectus, ipsam expedita recusandae similique asperiores praesentium eos quos doloremque temporibus nisi, in perferendis neque laborum facilis consequatur natus suscipit ut, distinctio ducimus! Vero ipsa molestias suscipit delectus illo repellat eius sequi provident odit accusantium recusandae, tempore illum asperiores iste voluptates laboriosam atque obcaecati aut dolorum adipisci assumenda cum? At asperiores fugit facilis, impedit mollitia expedita architecto placeat quae quo fugiat libero eaque, quisquam quasi provident fuga doloribus obcaecati vel dolorum voluptate nobis explicabo veniam? Exercitationem inventore, sequi dolor totam vitae doloremque. Cum, repellat? Incidunt facere neque eveniet eligendi quo eos. Quas, at. Similique deleniti rem consequatur sequi reiciendis sint eius id sapiente distinctio molestiae sunt maiores minima ipsum, architecto tempore ea rerum fuga dolores consectetur blanditiis placeat. Iusto, laboriosam! Aliquid eaque non aperiam dolores exercitationem laborum sint harum sequi assumenda molestias incidunt iste, distinctio ipsam. Tenetur commodi consequuntur itaque molestias dolore officia eaque tempora aliquam! Cum, rerum, incidunt doloribus, eligendi quaerat perferendis nisi minus dolore illo voluptates in.

          </p>
           {/* paragraph image  */ }
          <img src={selectedProject.primaryImageUrl} className="backdrop_img" alt="This is a project" />



        </div>


        <div>



          {/* <Footer /> */}




          {/* <div className="max-w-2xl mx-auto  bg-gray-400 h-12 items-center  gap-y-8 gap-x-8 sm:px-6 sm:py-8 xl:py-4 2xl:py-4 lg:max-w-7xl lg:px-8 "> */}

        </div>
      </div>

      {/* 

<div className="bg-white w-1/3 shadow my-4 overflow-hidden sm:rounded-lg">
  <div className="px-4 py-5 sm:px-6">
    <h3 className="text-lg leading-6 font-medium text-gray-900">
    Project Details
    </h3>
    <p className="mt-1 max-w-2xl text-sm text-gray-500">
      This could be a project sub heading or tag line 
    </p>
  </div>
  <div className="border-t border-gray-200">
    <dl>
      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Client:
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          This would be the client 
        </dd>
      </div>
      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Collaboration with:
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          Name, Of The, Collaborators
        </dd>
      </div>
      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Date: 
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          05/07/1996
        </dd>
      </div>
      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Buget
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          $120,000
        </dd>
      </div>
      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Location
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            37 Park Rd, Mt Lawley
        </dd>
      </div>
      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Status
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            Built
        </dd>
      </div>
      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Type
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            Public Art
        </dd>
      </div>
    </dl>
  </div>
</div>
 */}










    </div>
  );
}

export default ProjectModal