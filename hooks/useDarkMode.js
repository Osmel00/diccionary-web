
import {useEffect} from 'react'
import useLocalStorage from './useLocalStorage';
const useDarkMode = () => {
   const [colorMode,setColorMode] = useLocalStorage('theme','light');

   useEffect(() => {
      const className = 'dark';
      const bodyClasses = window.document.body.classList;

      colorMode === 'dark'? bodyClasses.add(className) : bodyClasses.remove(className);
   },[colorMode])

   return [colorMode,setColorMode];
}

export default useDarkMode