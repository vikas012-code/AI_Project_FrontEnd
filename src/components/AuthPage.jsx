import { useState } from 'react'
import cancel_img from "../assets/cancel.png"

function AuthPage({props}) {
    const {Auth,setAuth,setmode}=props
    const [adminDetail,setAdminDetail]=useState({
        name:"",
        password:""
    })

    function AuthUser(){
        if(import.meta.env.VITE_Name===adminDetail.name){
            if(import.meta.env.VITE_Password===adminDetail.password){
                setAuth(true)
                setAdminDetail({
                    name:"",
                    password:""
                })
                setmode("image")
            }
            else{
                alert("wrong password")
                setAdminDetail({
                    name:"",
                    password:""
                })
            }
        }
        else{
            alert("wrong User Name")
            setAdminDetail({
                    name:"",
                    password:""
                })
        }
    }

  return (
    Auth===false &&
    <div className="w-[100vw] h-[100vh] flex justify-center items-center rounded-2xl p-2 backdrop-blur-[3px] absolute top-0 z-20">
        <form className=' shadow-lg rounded-2xl flex flex-col w-[50vw] p-10 max-sm:w-[90vw] bg-white relative' onSubmit={(e)=>{
            e.preventDefault()
            AuthUser()
            }}>
            <div className='mb-4'>
                <p className=' font-bold'>INFO-</p>
                <p className='text-sm font-light'>This is personal project and image generation API have limited usage per month.So contact Developer to use image generation</p>
            </div>
            <button type='button' className="w-8 h-8 absolute top-1 right-0.5 cursor-pointer" onClick={()=>{
                setAuth(null)
            }}><img className="w-7" src={cancel_img} alt="" />
            </button>
            <div>
                <label className="font-bold" htmlFor="">Name<span className="text-red-600">*</span></label>
            </div>
            <input className="border border-gray-400 p-4 h-10 rounded-lg" type="text" placeholder="Enter admin Name" value={adminDetail.name} onChange={(e)=>{
                setAdminDetail({...adminDetail,name:e.target.value})
            }} required />
            <br />

            <div>
                <label className="font-bold" htmlFor="">Password<span className="text-red-600">*</span></label>
            </div>
            <input className="border border-gray-400 p-4 h-10 rounded-lg" type="password" placeholder="Enter Password" value={adminDetail.password} onChange={(e)=>{
                setAdminDetail({...adminDetail,password:e.target.value})
            }} required />
            <br />

            <button type='submit' className=" border border-gray-300 w-[20%] h-10 self-end  hover:bg-cyan-500 hover:text-white hover:scale-105 duration-300 rounded-lg">Verify</button>
        </form>
    </div>
  )
}

export default AuthPage