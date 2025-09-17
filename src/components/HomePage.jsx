import React from 'react'
import SpeechToText from './SpeechToText'
import ToggleMode from './ToggleMode'
import PromptResultCard from './PromptResultCard'
import icon from "../assets/icon.png"

function HomePage({props}) {
    const {mode,setmode,setloading,loading,result,imageUrl,Demo,setimageUrl,setresult}=props
  return (

    <>
    <div className="min-h-screen w-full relative bg-black">
    {/* Prismatic Aurora Burst - Multi-layered Gradient */}
    <div
      className="absolute inset-0 z-0"
      style={{
        background: `
          radial-gradient(ellipse 120% 80% at 70% 20%, rgba(255, 20, 147, 0.15), transparent 50%),
          radial-gradient(ellipse 100% 60% at 30% 10%, rgba(0, 255, 255, 0.12), transparent 60%),
          radial-gradient(ellipse 90% 70% at 50% 0%, rgba(138, 43, 226, 0.18), transparent 65%),
          radial-gradient(ellipse 110% 50% at 80% 30%, rgba(255, 215, 0, 0.08), transparent 40%),
          #000000
        `,
      }}
    />
    {/* Your Content/Components */}
    <div className='relative z-10 bg-transparent text-white min-h-screen  flex flex-col items-center justify-center p-6'>
      <div>
       <img className='w-60' src={icon} alt="" />
      </div>
      <h1 className="text-4xl font-bold mb-6">🎙️ Voice to AI Generator</h1>
        <PromptResultCard props={{loading,result,imageUrl,mode}}/>
        <SpeechToText props={{Demo,mode,setimageUrl,setresult,setloading}} />
        <ToggleMode props={{mode,setmode}}/>
    </div>

  </div>
  </>
    // <div className="dark:text-white min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      
    // <div>
    //     <img className='w-60' src={icon} alt="" />
    // </div>
    // <h1 className="text-4xl font-bold mb-6">🎙️ Voice to AI Generator</h1>
    //     <PromptResultCard props={{loading,result,imageUrl,mode}}/>
    //     <SpeechToText props={{Demo,mode,setimageUrl,setresult,setloading}} />
    //     <ToggleMode props={{mode,setmode}}/>
    // </div>
  )
}

export default HomePage