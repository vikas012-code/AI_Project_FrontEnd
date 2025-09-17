import { useState } from "react"

function ToggleMode ({props}){
    const {mode,setmode}=props
    return (
      <div className="flex gap-4 mb-6">
        <button onClick={()=>{
            setmode("text")
        }} className={`px-4 py-2 rounded-xl  shadow hover:shadow-md transition ${mode === 'text' ? 'bg-indigo-500 text-white' : 'bg-white text-blue-500'}`}>
            📝 Content
        </button>
        <button onClick={()=>{
            setmode("image")
        }} className={`px-4 py-2 rounded-xl  shadow hover:shadow-md transition ${mode === 'image' ? 'bg-indigo-500 text-white' : 'bg-white text-blue-500'}`}>
            🖼️ Image
        </button>
    </div>
    )
  }

export default ToggleMode