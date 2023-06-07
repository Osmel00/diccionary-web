import { useState } from "react";
//import MoonSVG from "./MoonSVG";
import useDarkMode from "@/hooks/useDarkMode";
import dynamic from 'next/dynamic';
const MoonSVG = dynamic(() => import('./MoonSVG'), {
    ssr: false
});

const Toggle = () => {
  const [colorMode, setColorMode] = useDarkMode();
  function boolToggle(){
    return colorMode=== "dark";
   }
  const [toggle, setToggle] = useState(boolToggle());
  
  
  const handleToggle = () => {
    setToggle(!toggle);
    setColorMode(colorMode === "light" ? "dark" : "light");
  };
  return (
    <>
      <button
        onClick={handleToggle}
        className="relative inline-flex items-center mr-5 cursor-pointer"
      >
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          defaultChecked={toggle}
        />
        <div className="hover:bg-[#A445ED] w-11 h-6 bg-[#757575] rounded-full peer dark:bg-gray-700  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#A445ED]"></div>
        <span className="ml-3 text-sm font-medium">
          <MoonSVG stroke={toggle ? "#A445ED" : "#838383"} />
        </span>
      </button>
    </>
  );
};

export default Toggle;

// ()=>{
//   const item = window.localStorage.getItem("theme");
//   if (item) {
//     return JSON.parse(item)=== 'dark';
//   }
//   return false;
//  }
