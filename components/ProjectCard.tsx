// @ts-ignore
import React from 'react'

const ProjectCard = () => {
    return (
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
 
        <article className="overflow-hidden rounded-lg shadow-lg ">
            <div >
                <a href="#">
                    <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random"/>
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 className="text-lg">
                            <a className="no-underline hover:underline text-black" href="#">
                            Article Title
                            </a>
                        </h1>
                        <p className="text-grey-darker text-sm">
                        11/1/19
                        </p>
                </header>
            </div>

        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
        <a className="flex items-center no-underline hover:underline text-black" href="#">
        <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random"/>
        <p className="ml-2 text-sm">
        Author Name
        </p>
        </a>
        <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
        <span className="hidden">Like</span>
        <i className="fa fa-heart"></i>
        </a>
        </footer>

        </article>


</div>
       
    )
}

class ProjectCard1 extends React.Component<{projectName: string, image:any}>
{
    render() {
    return(
        
          <article  className=" overflow-hidden h-72 rounded-lg shadow-lg  relative  transition duration-500 ease-in-out transform hover:scale-105 ">

             
                    <img alt="iflab Project Image" className="block object-cover h-full w-auto opacity-90"  src={this.props.image}  />
                   
                <div className="flex items-center justify-center h-full w-full top-0 absolute z-20 opacity-0 hover:opacity-100 hover:bg-black hover:bg-opacity-50 hover:scale-105 hover:shadow-lg">
                                
                             
                   <h3 className="lg:text-2xl xl:text-2xl 2xl:text-3xl md:text-2xl text-2xl p-2  font-bold  text-white z-50 text-center   uppercase">{this.props.projectName}</h3>
                  </div>
                  
              
         
          </article>
         
     
        );
    }
}

const ProjectCard2 = () => {
    return(
        <div className="bg-gray-100 m-auto w-96 h-64 mt-5" style={{backgroundImage:`url("https://picsum.photos/600/400/?random")`}}>
                    <div className="flex flex-row items-center h-full w-full">
                        <div className="flex flex-col w-full pb-3 pt-30 px-3 text-white">
                              <h3 className="text-3xl font-bold leading-8 text-centre uppercase">Revensthorpe Cultural Precinct</h3>

                        </div>
                    </div>
        </div>
    )
}


export default ProjectCard1
