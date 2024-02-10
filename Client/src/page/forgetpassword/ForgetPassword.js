import React, { useState } from 'react'
import "./forgetpassword.css"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
//import { useAuth } from '../../context/auth';
import {BASE_URL} from "../../server/server"
import PopUp from "../../components/popup/PopUp"

const ForgetPassword = () => {
    const [isPopUp,setIsPopUp]=useState(false)
    const [input,setInput]=useState({
      email:"",
      password:""
     });
     const navigate=useNavigate();
     const location =useLocation();
     const openPopUp = () => {
      setIsPopUp(true);
    };
  
    const closePopUp = () => {
      setIsPopUp(false);
      window.location.reload();
    };
     const handleChange=(e)=>{
      setInput((preState)=>({
        ...preState,
        [e.target.name]:e.target.value
      }))
     }
  
     let status
  
     const heandelSubmit=async()=>{
      try{
        const result=await axios.put(`${BASE_URL}/updatepassword`,{
          email:input.email,
          newpassword:input.password
        })
       // console.log("rsult=--------0000-",result.data)
        status=result.data.status
        if(result.data.status){ 
          openPopUp() 
          navigate(location.state||'/login')
         // console.log("successfull",result)
          //console.log("result",result.data)
      }
    
     }catch(err){
     // console.log("error===",err.response.data)
      status=err.response.data.status
     // console.log("login--",status)
      openPopUp()
     }
   }
   //console.log("login--1",status)
  return (
    <div className='signup-main'>
    <div className='signup'>
    <h1>Set Password</h1>
    <input name='email' value={input.email} type="email" onChange={handleChange} placeholder='Enter Your Email'/>
    <input name='password' value={input.password}  type="password" onChange={handleChange} placeholder='Enter Your NewPassword'/>
    <div className='sigup-button'>
    <button>SignUp</button>
    <button onClick={heandelSubmit}>Submit</button>
    </div>
    <div className='signup-home'>
    <Link to="/"><h2>Home</h2></Link>
    
    </div>
    </div>
    <PopUp isOpen={isPopUp} onClose={closePopUp} status={status}>
     <h2>Update sccessfully</h2>
     <p>Pop-Up content goes here.</p>
   </PopUp>
  </div>
  )
}

export default ForgetPassword