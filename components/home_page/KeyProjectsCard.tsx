import Link from "next/dist/client/link"
const KeyProjectsCard = ({ projectName, projectType, imageUrl, projectDescription }) => {
    return (
    
                <div className="shadow-lg rounded-md m-4 h-auto bg-white flex-1 ">
                    <img src={imageUrl}
                        alt="adidas"
                        className=" object-cover rounded-t-md  h-96 m-auto" />
                    <div className=" m-3 p-4 rounded-sm">
                        <p className="text-gray-600 text-xl font-bold ">
                            {projectName}
                        </p>
                        <p className="text-gray-400 text-xs">
                            {projectType}
                        </p>
                        <div className="flex items-center mt-2 justify-between ">
                            <p className="text-gray-600">
                                {projectDescription}
                            </p>
                        </div>
                    </div>
            </div>

    )
}

export default KeyProjectsCard