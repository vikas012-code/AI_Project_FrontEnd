import React, { useState } from 'react'
import blk_mic from "../assets/blk_mic.svg"
import red_mic from "../assets/red_mic.svg"

function SpeechToText({props}) {
    const {mode,setimageUrl,setresult,setloading}=props
    const [textData,setTextData]=useState("")
    const [isListing,setIsListing]=useState(false)

    const recognition = new window.webkitSpeechRecognition();

    async function returnImgData(data){
        const blob = await data.blob()
        // Create a URL for the Blob 
        const imageUrl = URL.createObjectURL(blob); 
         
        // Create an img element 
        const img = <img className='w-[40%]' src={imageUrl}/>
        

        console.log(img)
        return img
    }

    const sendPrompt = async (text, type) => {
        setloading(true)
        try {
            let data
            const res = await fetch(`https://ai-project-backend-1vla.onrender.com/api/generate-${type}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt: text }),
            });
            // console.log(res.body)
            type==="text"?data = await res.json() : data = await returnImgData(res)
            type==="text"? setresult(prev=> [...prev ,{ai:data}]):setimageUrl(prev=> [...prev,{ai:data}]);
            setloading(false)

        } catch (error) {
            console.log(error)
            setloading(false)
        }
        };

        const startListening = () => {
            setIsListing(true)
            recognition.lang = 'en-US';
            recognition.start();
            console.log("Ready to listen...")

            recognition.onresult = (event) => {
                setIsListing(false)
                const text = event.results[0][0].transcript;
                console.log(text)
                console.log("text send...")
                recognition.stop();
                mode==="text"?setresult(prev=> [...prev,{user:text}]):setimageUrl(prev=> [...prev,{user:text}])
                sendPrompt(text,mode)
            };

            // recognition.onspeechend = () => {
            //     setIsListing(false)
            //     recognition.stop();   
            // };
        };

        function stopListing(){
            recognition.stop();
            setIsListing(false)
            console.log("stop listing")
        }

        
  return (
    <div className=" mt-4 w-full max-w-md bg-white dark:bg-black shadow-sm shadow-gray-900 rounded-2xl p-6 mb-6 flex flex-col items-center">
        <p className="text-lg font-medium mb-2 max-sm:text-sm">Click the mic and speak your prompt</p>
        <button
            onClick={()=>{
                !isListing?startListening():stopListing()
            }  
            }
            className={`transition-all duration-500  ${!isListing===true?"h-10 w-45 rounded-xl":" h-30 w-30 rounded-full"}  px-4 py-2 bg-indigo-600 text-white  hover:bg-indigo-700 `}
        >
            {!isListing? <div className='flex justify-center'><img className='w-5' src={blk_mic} alt="" /><p>Start Recording</p></div>: <div className='px-4 animate-pulse flex flex-col items-center'><img className='w-15' src={red_mic} alt="" /><p>Listing...</p></div>}
        </button>
    </div>
  )
}

export default SpeechToText