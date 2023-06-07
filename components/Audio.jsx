import { useRef,useEffect } from "react";

const Audio = ({ url,boolPlay,setBoolPlay}) => {
  const ref = useRef(null);
  
  const play = () =>{
    if(ref.current && boolPlay) ref.current.play();
    //setBoolplay(false);
   }

  useEffect(() =>{
    play();
    setBoolPlay(false);
  },[url,boolPlay])
  return (
    <>
      <audio
        src={url}
        type="audio/mpeg"
        ref={ref}
      />
    </>
  );
};

export default Audio;
