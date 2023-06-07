import { useEffect, useState } from "react";
import PlaySvg from "./PlaySVG";
import NotFound from "./NotFound";
import Link from "next/link";
import Audio from "./Audio";

const ShowData = ({ words }) => {
  const [playColor, setPlayColor] = useState({ fill: null, opacity: null });
  const [wordFetch, setWordFetch] = useState(null);
  const [boolPlay, setBoolPlay] = useState(false);
  const [url, setUrl] = useState(null);
  const handlePlay = () => {
    let audio = null;
    setBoolPlay(true);
    if (wordFetch && wordFetch.length && words) {
      audio = findAudio(wordFetch[0].phonetics);

      setUrl(audio);
    }
  };

  const findAudio = (arry) => {
    let url;
    arry.find(({ audio }) => {
      if (audio) {
        url = audio;
      }
    });
    return url;
  };
  useEffect(() => {
    if (!words) return;
    getData();
  }, [words]);

  async function getData() {
    try {
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${words}`
      );
      const data = await res.json();
      setWordFetch(data);

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {wordFetch && wordFetch.length && words ? (
        <>
          <Audio boolPlay={boolPlay} setBoolPlay={setBoolPlay} url={url} />
          <div className=" flex justify-between items-center w-full pt-14 ">
            <div className="flex flex-col space-y-2">
              <h2 className="text-5xl font-bold dark:text-white">{words}</h2>
              <p className="text-[#A445ED] text-xl">{wordFetch[0].phonetic}</p>
            </div>
            <div
              onMouseLeave={() =>
                setPlayColor({ ...playColor, fill: null, opacity: null })
              }
              onMouseEnter={() =>
                setPlayColor({ ...playColor, fill: "white", opacity: 1 })
              }
              className="cursor-pointer"
            >
              <div onClick={handlePlay}>
                <PlaySvg fill={playColor.fill} opacity={playColor.opacity} />
              </div>
            </div>
          </div>

          <div className=" flex justify-between items-center mt-8">
            <p className="font-bold italic pr-10 dark:text-white">noun</p>
            <hr className="min-w-[266px] w-full" />
          </div>

          <div>
            <p className="text-[#757575] pt-8 pb-2   ">Meaning</p>
            <ul className="list-disc  px-4  text-[#A445ED]">
              {wordFetch[0].meanings[0].definitions?.map(({ definition }) => {
                return (
                  <li key={definition} className="py-2">
                    {" "}
                    <p className="text-black dark:dark:text-white">
                      {definition}
                    </p>
                  </li>
                );
              })}
            </ul>
            {wordFetch[0].meanings[0].synonyms?.map((synonyms, index) => {
              return (
                <div key={synonyms + index} className="flex space-x-8 mt-6">
                  <p className="text-[#757575]  ">Synonyms</p>
                  <p className="text-[#A445ED] font-bold ">{synonyms}</p>
                </div>
              );
            })}
          </div>

          <div className=" flex justify-between items-center mt-8">
            <p className="font-bold italic pr-10 dark:text-white">verb</p>
            <hr className="min-w-[266px] w-full" />
          </div>

          <div>
            <p className="text-[#757575] pt-8 pb-2 ">Meaning</p>
            <ul className="list-disc  px-4  text-[#A445ED]">
              {wordFetch[0].meanings.length > 1 &&
                wordFetch[0].meanings[1].definitions?.map(({ definition }) => {
                  return (
                    <li key={definition} className="py-2">
                      {" "}
                      <p className="text-black dark:text-white">{definition}</p>
                    </li>
                  );
                })}
            </ul>
          </div>

          <div className=" flex justify-center  my-8">
            <hr className="min-w-[266px] w-full" />
          </div>
          {
            <div className="flex flex-col sm:flex-row sm:space-x-5 dark:text-white ">
              <p>Source</p>
              <Link
                className="underline m-0"
                target="_blank"
                href={`${wordFetch[0]?.sourceUrls}`}
              >
                {" "}
                {wordFetch[0]?.sourceUrls && wordFetch[0]?.sourceUrls[0]}{" "}
              </Link>
            </div>
          }
        </>
      ) : (
        wordFetch &&
        words && (
          <NotFound
            title={wordFetch.title}
            message={wordFetch.message}
            resolution={wordFetch.resolution}
          />
        )
      )}
    </>
  );
};

export default ShowData;
//fill={playColor.fill} opacity={playColor.opacity}
//hover:${setPlayColor({...playColor,fill:'white',opacity:1})}`
//{wordFetch[0].meanings.map(({definitions},i)=>{
//   return  <div key={i}> {definitions.map(({definition},index)=> {
//     return <li key={index}   className="py-2"> <p  className=" text-black">{definition}</p></li>

//    })}</div>
//  })}
