// @ts-ignore
import Link from 'next/link';
import React from 'react'
import ProjectModal from './ProjectModal';

// class PinterestCard extends React.Component<{projectName: string, image:any , doc: any, setSelectedProject}>
// {
const PinterestCard = ({ projectName, image, doc, setSelectedProject }) => {
    return (

        <div onClick={() => setSelectedProject(doc)} className=" overflow-hidden  rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:scale-105 ">

            <a href="#" className="">

                <img alt="iflab Project Image" className="max-h-full h-72  min-w-full align-bottom object-cover opacity-90" src={image} />

                <div className="flex items-center shadow-lg justify-center h-full w-full top-0 absolute z-20 opacity-0 hover:opacity-100 hover:bg-black hover:bg-opacity-50 hover:scale-105 hover:shadow-lg">
                    <h3 className="lg:text-2xl xl:text-2xl 2xl:text-3xl md:text-2xl text-2xl p-2  font-bold  text-white z-50 text-center   uppercase">{projectName}</h3>
                </div>

            </a>

        </div>


    );
}
//}



export default PinterestCard

