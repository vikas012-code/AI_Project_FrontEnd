import { useState } from 'react'
import HomePage from './components/HomePage'
import AuthPage from './components/AuthPage'
import { useEffect } from 'react'
import ServerIsLoading from './components/ServerIsLoading'

function App() {
  const [mode,setmode]=useState("text")

  const [loading,setloading]=useState(false)
  const [result,setresult]=useState([])
  const [imageUrl,setimageUrl]=useState([])
  const [Auth,setAuth]=useState(null)
  const [serverLoading,setServerLoading]=useState(false)

  const servercall = async () =>{
    try {
      setServerLoading(true)
      const res= await fetch("https://ai-project-backend-1vla.onrender.com")
      setServerLoading(false)

    } catch (error) {
      console.log(error)
      setServerLoading(false)
    }
  }

  useEffect( ()=>{
    servercall()
  },[])


  

  console.log("image ",imageUrl)
  return(
  <>
  {serverLoading && <ServerIsLoading/>}
  <AuthPage props={{Auth,setAuth,setmode}}/>
  <HomePage props={{mode,setmode,setloading,loading,result,imageUrl,setimageUrl,setresult,Auth,setAuth}} />
  </>
  )
}

export default App
