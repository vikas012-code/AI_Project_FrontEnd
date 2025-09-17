import { useState } from 'react'
import HomePage from './components/HomePage'

function App() {
  const [mode,setmode]=useState("text")

  const [loading,setloading]=useState(false)
  const [result,setresult]=useState([])
  const [imageUrl,setimageUrl]=useState([])

  function Demo(){
    setTimeout(() => {
      setloading(true)
      setTimeout(()=>{
        mode==="text"?setresult("This is fake result and fake image"):setimageUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWhFxyF4sN427M3RwN2WEzItUtR97SYqQ5_A&s")
        setloading(false)
      },3000)
  },0);
  }

  console.log("image ",imageUrl)
  return(
  <HomePage props={{mode,setmode,setloading,loading,result,imageUrl,Demo,setimageUrl,setresult}} />
)
}

export default App
