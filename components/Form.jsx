import { useState } from "react";
import SearchSvg from "./SearchSVG";
import ShowData from "./ShowData";

const Form = () => {
    const [words,setWords] = useState('');
    const handleSubmit = (e) => {
     e.preventDefault();
     let input = e.target[0].value.trim();
     if(!input){
      setWords(null);
     }else {
      setWords(null);   
      setWords(input);
     }
  
    }
  return (
    <>
      <form onSubmit={handleSubmit } className="w-full relative flex justify-between items-center">
        <input
         name="input"
          type="text" placeholder="Search for any word..."
          
          className={` w-full pl-6 font-bold bg-[#F4F4F4]  h-12 md:h-16 rounded-xl outline-[#A445ED] ${words=== null? 'outline-red-500' : null} dark:bg-[#1F1F1F] dark:text-white `}
        />
        <div className="absolute right-8 ">
          <SearchSvg />
        </div>
      </form>
      { words === null && <p className="text-red-500">Whoops,can't be empty...</p>} 
      <ShowData words={words}/>
    </>
  );
};

export default Form;
// onChange={(e)=> setWordData(e.target.value)}