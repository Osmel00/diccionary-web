'use client'
import { createContext,useState } from "react";
import { inter } from "@/Objects/Fonts"; 

export const contexto = createContext();

const FontsContext = ({ children }) => {
 const [font,setFont] = useState(inter);
 
  return <contexto.Provider value={{font,setFont}}>
           {children}
        </contexto.Provider>;
};

export default FontsContext;
