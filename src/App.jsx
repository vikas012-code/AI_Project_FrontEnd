import { useState } from 'react'
import HomePage from './components/HomePage'
import AuthPage from './components/AuthPage'

function App() {
  const [mode,setmode]=useState("text")

  const [loading,setloading]=useState(false)
  const [result,setresult]=useState([])
  const [imageUrl,setimageUrl]=useState([])
  const [Auth,setAuth]=useState(null)


  

  console.log("image ",imageUrl)
  return(
  <>
  <AuthPage props={{Auth,setAuth,setmode}}/>
  <HomePage props={{mode,setmode,setloading,loading,result,imageUrl,setimageUrl,setresult,Auth,setAuth}} />
  </>
  )
}

export default App
