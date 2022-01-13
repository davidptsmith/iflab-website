import Link from "next/dist/client/link"
const KeyProjectsCard = ({ projectName, projectType, imageUrl, projectDescription }) => {
    return (
    
                <div className="shadow-lg rounded-md h-full m-4 flex flex-col  bg-white  ">
                 <div className="h-2/3  object-cover  ">

                    <img src={imageUrl}
                        alt=""
                        className="  h-full   " />
               
                </div>
                  
                    <div className=" grid gap-2 p-2 rounded-sm">
                        <p className="text-gray-600 text-xl font-bold ">
                            {projectName}
                        </p>
                        <p className="text-gray-400 text-xs">
                            {projectType}
                        </p>
                        <div className="flex items-center justify-between ">
                            <p className="text-gray-600">
                                {projectDescription}
                            </p>
                        </div>
                    </div>
            </div>

    )
}

export default KeyProjectsCard