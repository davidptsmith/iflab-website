import IflabLogoSVG from "./IfLabLogoSVG";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="  lg:pt-2 pt-0 cursor-pointer w-4/5 flex flex-row  justify-between self-center  m-auto lg:border-transparent border-b-2">
      <div className="flex items-center  ">
        <IflabLogoSVG />
      </div>
      <div className="lg:hidden grid place-items-center cursor-pointer h-10  my-auto ">
        <button className="grid place-items-center  px-3 py-2 border rounded text-black border-white-400 hover:text-blue-300 hover:border-blue-300">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div className="w-full  flex-grow lg:flex lg:items-center   hidden lg:w-auto justify-end">
        <Link href="/" passHref>
          <a className="navButtons">Home</a>
        </Link>
        <Link href="/About" passHref>
          <a className="navButtons">About</a>
        </Link>
        <Link href="/Projects" passHref>
          <a className="navButtons">Projects</a>
        </Link>
        <Link href="/Insights" passHref>
          <a className="navButtons">Insights</a>
        </Link>
        <Link href="/Contact" passHref>
          <a className="navButtons">Contact</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
