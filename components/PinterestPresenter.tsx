import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { Component, useState, useEffect } from 'react'
import useFirestore from '../hooks/useFirestore';

import NoImagesCard from './NoResultsCard';
import PinterestCard from './PinterestCard';
import ProjectModal from './ProjectModal';



const  PinterestPresenter = () => {
   
  
        const {docs, loading} = useFirestore('iflab_Projects');

        const[selectedProject, setSelectedProject] =  useState(null);

        const [text, setText] = useState("");
         const TextParam = "";

    return (
        
      <div>
          <div className=" md:w-2/3  lg:w-2/3 xl:w-1/3 2xl:w-1/3  w-5/6 relative my-4 lg:my-0 mx-auto flex flex-row ">
            <h2 className="text-xl font-medium font-mono   ">
                  Find Something That Interests You...
            </h2>
            
          </div>
            

          <div className="flex m-auto content-center justify-items-start ">
              
                <div className="pt-2  md:w-2/3  lg:w-2/3 xl:w-1/3 2xl:w-1/3  w-5/6 relative mx-auto text-gray-600 shadow-md shadow-inner-md ">
                    <input className="border-2  font-medium font-mono w-full border-gray-300 bg-white 
                    h-12 px-5 pr-16 rounded-lg text-sm focus:outline-none 
                    focus:ring-2 focus:scale-105 group-hover::ring-offset-blue-400  focus:ring-offset-blue-400 "
                    type="search" onChange={e => setText(e.target.value)} name="search" placeholder="Search"/>
                    <div  className="absolute right-0 top-0 mt-6 mr-4">
                        <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                            version="1.1" id="Capa_1" x="0px" y="0px"
                            viewBox="0 0 56.966 56.966"  xmlSpace="preserve"
                            width="512px" height="512px">
                            <path
                            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                        </svg>
                    </div>
          </div> 
          
          </div>
          
          
          <br/>


          <div className="md:w-2/3 lg:w-2/3 xl:w-1/3 2xl:w-1/3  w-5/6 relative mb-6 mx-auto pt-0 lg:mb-12 flex " >
                        <button 
                       className="mx-auto text-center font-light 
                       text-xs  md:text-sm lg:text-sm xl:text-sm 2xl:text-sm
                       p-2 w-1/4  text-gray-600 
                       shadow-md 
                       hover:text-blue-300  transition duration-200 ease-in-out hover:border-blue-200  hover:scale-105
                       ">
                        Architecture
                        </button>  
                        <button 
                        className="mx-auto text-center font-light 
                        text-xs  md:text-sm lg:text-sm xl:text-sm 2xl:text-sm
                        p-2 w-1/4  text-gray-600 
                        shadow-md 
                        hover:text-blue-300  transition duration-200 ease-in-out hover:border-blue-200  hover:scale-105
                        ">
                        Public Art
                        </button>  
                        <button 
                        className="mx-auto text-center font-light 
                        text-xs  md:text-sm lg:text-sm xl:text-sm 2xl:text-sm
                        p-2 w-1/4  text-gray-600 
                        shadow-md shadow-inner-md 
                        hover:text-blue-300  transition duration-200 ease-in-out hover:border-blue-200  hover:scale-105
                        ">
                        Fabrication
                        </button>  
                        <button 
                        className="mx-auto text-center font-light 
                        text-xs  md:text-sm lg:text-sm xl:text-sm 2xl:text-sm
                        p-2 w-1/4  text-gray-600 
                        shadow-md shadow-inner-md 
                        hover:text-blue-300  transition duration-200 ease-in-out hover:border-blue-200  hover:scale-105
                        ">
                        Other
                        <div className="absolute right-0 top-0 align-middle mt-3 mr-4">

                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 12 12">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </div>
                        </button>  
            </div>
                   
         
           
        {loading ? <h1 className="text-8xl font-mono animate-pulse text-center m-auto my-20">LOADING...</h1> :  
            <ul className="container w-full flex flex-wrap  m-auto">
                {
                
                setFlexGridWithCards(docs, text, setSelectedProject)}
                
                        {/* <li className="flex flex-grow"></li> */}
                </ul>
        }

        {selectedProject && <ProjectModal selectedProject={selectedProject} setSelectedProject={setSelectedProject}/> } 

       </div>
    )
}

export default PinterestPresenter

function setFlexGridWithCards (docs: any[], text: string, setSelectedProject:any)
{
    if(docs)
    {

        const filteredDocs =  docs.filter(doc => doc.FullName.toLowerCase().includes(text.toLowerCase()) )
        if(filteredDocs.length === 1)
        {
            return  filteredDocs.map(doc => (

                <motion.li className="  flex-col flex  m-auto w-2/3 p-4" key={doc.id} layout >
                    
                        <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{delay: 0.1}}>

                                <PinterestCard setSelectedProject={setSelectedProject} doc={doc} projectName={doc.FullName} image={doc.primaryImageUrl} />

                        {/* <h3>{doc.FullName}</h3>
                        <img src={doc.primaryImageUrl} alt="If/lab Image"/> */}
                    </motion.div> 
                </motion.li>
            ))
        }
        else if(filteredDocs.length > 1)
        {
          return  filteredDocs.map(doc => (
                        <motion.li className="  flex-col flex  flex-grow p-4" key={doc.id} layout >                    
                                <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{delay: 0.1}}>
                                {/* <h3>{doc.FullName}</h3>
                                <img src={doc.primaryImageUrl} alt="If/lab Image"/> */}
                                <PinterestCard setSelectedProject={setSelectedProject} doc={doc}  projectName={doc.FullName} image={doc.primaryImageUrl} />
                            </motion.div>  
                        </motion.li>
                    ))
          }
          else{
              return  <motion.li className="  flex-col flex   m-auto w-2/3  p-4" key="999" layout >                 
              <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{delay: 0.1}}>
              {/* <h3>{doc.FullName}</h3>
              <img src={doc.primaryImageUrl} alt="If/lab Image"/> */}
            < NoImagesCard/>
          </motion.div>
      
      </motion.li>
          }
    }
}

