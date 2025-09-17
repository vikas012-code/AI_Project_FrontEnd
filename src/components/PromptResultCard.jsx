import { useState } from "react";
import LoadingResult from "./LoadingResult";
import { marked } from "marked";
import { useRef } from "react";
import { useEffect } from "react";

function PromptResultCard ({props}) {
    const {loading,result,imageUrl,mode}=props

    const bottomRef = useRef(null);

    useEffect(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [result]);

    console.log(result)

    marked.setOptions({
      highlight: function (code, lang) {
        if (lang && hljs.getLanguage(lang)) {
          return hljs.highlight(code, { language: lang }).value;
        }
        return hljs.highlightAuto(code).value;
      },
    });

    return (
      <div className={` transition-all duration-300 ${!result.length>0 && !imageUrl.length>0 ?"w-lg":"w-[80%]"} bg-white dark:bg-black rounded-2xl shadow-sm shadow-gray-900 p-6`}>
        <p className="text-sm text-gray-400 mb-2">Generated Result:</p>
        
        <>
        {
        mode==="text"? 
        <>
        {result.length>0 && 
        <div className="text-lg font-medium">
          {result.map((data ,id) =>
        (data?.user ? 
        <div className="mt-6 flex justify-end" key={id}>
          <p>{data.user}</p>
        </div>
        :
        <div className="mt-6 flex" key={id}>
          <p className="mr-2">EchoGen:</p>
          <div className="w-full text-wrap " dangerouslySetInnerHTML={{ __html: marked.parse(data.ai.result) }}>
          </div>
        </div>
        ))}
          
         </div>}
         </>

        :

        <>{imageUrl.length>0 && 
        
        <div className="text-lg font-medium">
          {imageUrl.map((data ,id) =>
        (data?.user? 
        <div className="mt-6 flex justify-end" key={id}>
          <p>{data.user}</p>
        </div>
        :
        <div className="mt-6 flex" key={id}>
          <p className="mr-2">EchoGen:</p>
          <div className="w-full text-wrap mt-2" >
            {data.ai}
          </div>
        </div>
        ))}
          
         </div>
         }</>
        }
        </>
        {loading && <LoadingResult/>}
        <div ref={bottomRef} /> 
      </div>
    )
  }

export default PromptResultCard