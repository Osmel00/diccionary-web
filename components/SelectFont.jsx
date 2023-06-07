import {useState,useContext } from "react";
import Image from "next/image";
import arrowdown from "../asset/images/arrowdown.svg";
import { inter,lora,inconsolata } from "@/Objects/Fonts";
import { contexto } from "@/context/FontsContext";

const SelectFont = () => {
  const {font,setFont} = useContext(contexto);
  const [pFont,setPFont] = useState('Sans Serif');
  const [openMenu, setOpenMenu] = useState(false);
  const show = (e) => {
    if (
      e.target.className.split(" ")[0] === "pararaph" ||
      e.target.className === "img"
    )
      setOpenMenu(!openMenu);
      if(e.target.className.split(" ")[0] === "pararaph" ){
         if(e.target.innerText === 'Sans Serif'){setFont(inter); setPFont('Sans Serif')}
         else if(e.target.innerText === 'Serif'){setFont(lora); setPFont('Serif')}
         else {setFont(inconsolata);setPFont('Mono')}
      }
  };
 
  return (
    <div className="relative">
      <div className="select flex gap-4 cursor-pointer font-semibold  dark:text-white">
        {pFont}
        <Image
          className="img"
          onClick={show}
          src={arrowdown}
          alt="arrow down"
        />
      </div>
      <div
        onClick={show}
        className={`menu ${
          openMenu ? "block" : "hidden"
        } w-44 h-40  absolute border top-9 rounded-xl shadow-2xl text-[#2D2D2D] font-bold px-7 flex flex-col justify-evenly z-10 bg-white dark:bg-[#1F1F1F] border-[#979797] dark:shadow-[#A445ED] dark:shadow-lg `}
      >
        <p className="pararaph hover:text-[#A445ED] cursor-pointer  dark:text-white dark:hover:text-[#A445ED]">
          Sans Serif
        </p>
        <p className="pararaph hover:text-[#A445ED] cursor-pointer  dark:text-white  dark:hover:text-[#A445ED]">Serif</p>
        <p className="pararaph hover:text-[#A445ED] cursor-pointer  dark:text-white  dark:hover:text-[#A445ED]">Mono</p>
      </div>
    </div>
  );
};

export default SelectFont;
