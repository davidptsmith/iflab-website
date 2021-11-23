import IflabLogoSVG from './IfLabLogoSVG';
import Link from 'next/link';


const Navbar = () => {
    return (

        <nav className="  lg:pt-4  w-4/5 flex flex-row  justify-between self-center  m-auto lg:border-transparent border-b-2">

            <div className="flex items-center mt-8  ">
               
                <IflabLogoSVG />
            
            </div>
            <div className="lg:hidden flex h-10 justify-end my-auto ">
                <button className="flex items-center justify-end px-3 py-2 border rounded text-black border-white-400 hover:text-blue-300 hover:border-blue-300">
                     <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>

            <div className="w-full  flex-grow lg:flex lg:items-center hidden lg:w-auto justify-end">
                            <Link  href="/" passHref   >
                                <div className="block mt-4 text-xl mr-8 border-b-2 border-transparent lg:inline-block lg:mt-0 text-black hover:text-blue-300  font-mono transition duration-500 ease-in-out hover:border-blue-200  transform hover:-translate-y-1 hover:scale-105  " >
                                    Home 
                                    </div>
                                </Link>
                            <Link  href="/About" passHref> 
                            <div className="block mt-4 text-xl mr-8 border-b-2 border-transparent lg:inline-block lg:mt-0 text-black hover:text-blue-300  font-mono transition duration-500 ease-in-out hover:border-blue-200  transform hover:-translate-y-1 hover:scale-105  " >
                                About 
                            </div>
                            </Link>
                            <Link  href="/Projects"     passHref   > 
                            <div  className="block mt-4 text-xl mr-8 border-b-2 border-transparent lg:inline-block lg:mt-0 text-black hover:text-blue-300  font-mono transition duration-500 ease-in-out hover:border-blue-200  transform hover:-translate-y-1 hover:scale-105 " >
                                Projects
                                </div>
                                </Link>
                            <Link    href="/Insights"     passHref  > 
                            <div className="block mt-4 text-xl mr-8 border-b-2 border-transparent lg:inline-block lg:mt-0 text-black hover:text-blue-300  font-mono transition duration-500 ease-in-out hover:border-blue-200  transform hover:-translate-y-1 hover:scale-105 " >
                            Insights
                                </div>
                                </Link>
                            <Link   href="/Contact" passHref> 
                            <div   className="block mt-4 text-xl mr-8 border-b-2 border-transparent lg:inline-block lg:mt-0 text-black hover:text-blue-300  font-mono transition duration-500 ease-in-out hover:border-blue-200  transform hover:-translate-y-1 hover:scale-105 " >
                                Contact
                                </div>
                                </Link>

            </div>
        </nav>

    )
}

export default Navbar