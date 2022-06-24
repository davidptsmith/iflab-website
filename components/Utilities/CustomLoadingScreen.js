import IflabLogo_SVG from "../IfLab_logo/IfLabLogoSVG-No-Hover";

export default function CustomLoadingScreen() {
    return (
        <div className="grid place-items-center z-50 h-screen w-screen ">
          
          {/* <IflabLogo_SVG className="w-96  fill-slate-700"/> */}
          <h1 className=" animate-pulse mx-auto my-auto text-[200px] md:text-[600px] border-b-gray-100 border-2 font-extralight text-gray-100">
            if/lab 
          </h1>
        </div>
    );
  }
  
