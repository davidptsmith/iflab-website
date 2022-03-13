

const ProjectTable = ({items}) => {

    return (
        <div >
      {/*Table for data */ }
      <dl className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{items[0][0]}</dt>
                <dd className="mt-2 text-sm -mb-4 md:-mb-8 text-gray-500">{items[0][1]}</dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{items[1][0]}</dt>
                <dd className="mt-2 text-sm -mb-4 md:-mb-8 text-gray-500">{items[1][1]}</dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{items[2][0]}</dt>
                <dd className="mt-2 text-sm -mb-4 md:-mb-8 text-gray-500 ">{items[2][1]}</dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{items[3][0]}</dt>
                <dd className="mt-2 text-sm -mb-4 md:-mb-8 text-gray-500">{items[3][1]}</dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{items[4][0]}</dt>
                <dd className="mt-2 text-sm -mb-4 md:-mb-8 text-gray-500">{items[4][1]}</dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{items[5][0]}</dt>
                <dd className="mt-2 text-sm -mb-4 md:-mb-8  text-gray-500">{items[5][1]}</dd>
              </div>
            
            </dl>

        </div>


    );
}




export default ProjectTable

