import React, { useState } from 'react'
import "./login.css"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useAuth } from '../../context/auth';
import PopUp from "../../components/popup/PopUp"
import {BASE_URL} from "../../server/server"
const Login = () => {
  const [isPopUp,setIsPopUp]=useState(false)
  const [auth,setAuth]=useAuth() 
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
      const result=await axios.post(`${BASE_URL}/login`,{
        email:input.email,
        password:input.password
      })
      //console.log("rsult=--------0000-",result.data)
      status=result.data.status
      if(result.data.status){ 
        openPopUp()
        setAuth({
          ...auth,
          user:result.data.emailexist,
          token:result.data.token
  
        })
        localStorage.setItem("auth",JSON.stringify(result.data))
        navigate(location.state||'/')
       // console.log("successfull",result)
        //console.log("result",result.data)
    }
  
   }catch(err){
  //  console.log("error===",err.response.data)
    status=err.response.data.status
  ///  console.log("login--",status)
    openPopUp()
   }
 }
 //console.log("login--1",status)


  return (
    <div className='signup-main'>
    <div className='signup'>
    <h1>LogIn</h1>
    <input name='email' value={input.email} type="email" onChange={handleChange} placeholder='Enter Your Email'/>
    <input name='password' value={input.password}  type="password" onChange={handleChange} placeholder='Enter Your Password'/>
    <div className='sigup-button'>
    <Link to="/signup"><button>SignUp</button></Link>
    <button onClick={heandelSubmit}>LogIn</button>
    </div>
    <div className='signup-home'>
    <Link to="/"><h2>Home</h2></Link>
    <Link to="/forget"><h2>forget Password</h2></Link>
    </div>
    </div>
    <PopUp isOpen={isPopUp} onClose={closePopUp} status={status}>
     <h2>Update sccessfully</h2>
     <p>Pop-Up content goes here.</p>
   </PopUp>
  </div>
  )
}

export default Login