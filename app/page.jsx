"use client";
import { useContext } from "react";
import { contexto } from "@/context/FontsContext";
import NavBar from "@/components/NavBar";
import Form from "@/components/Form";


const Home = () => {
  const { font, } = useContext(contexto);
  
  return (
    <div className=" bg-white w-screen  py-5 dark:bg-[#050505] min-h-screen">
     
      <div className={`${font.className} container w-11/12 mx-auto lg:w-[740px]` }>
       <NavBar />
       <Form/>
       
      </div>
     
    </div>
  );
};

export default Home;
