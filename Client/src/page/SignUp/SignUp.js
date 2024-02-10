import React, { useState } from 'react'
import "./signup.css"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from "axios"
import {BASE_URL} from "../../server/server"
import PopUp from "../../components/popup/PopUp"

const SignUp = () => {
  const [isPopUp,setIsPopUp]=useState(false)
   const [input,setInput]=useState({
    username:"",
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
      const result=await axios.post(`${BASE_URL}/signup`,{
        username:input.username,
        email:input.email,
        password:input.password
      })
      console.log(result.data.status)
      if(result.data.statsu){ 
          openPopUp()
        console.log("successfull",result)
        navigate(location.state||'/login')
     }
    }catch(err){
      console.log("went samthing wrong")
      status=err.response.data.status
      openPopUp()
     }
   }
  return (
    <div className='signup-main'>
      <div className='signup'>
      <h1>SignUp</h1>
      <input name='username' value={input.username} type="text" onChange={handleChange} placeholder='Enter User Name'/>
      <input type="email" name='email' value={input.email} onChange={handleChange} placeholder='Enter Your Email' required='true'/>
      <input type="password" name='password' value={input.password} onChange={handleChange} placeholder='Enter Your Password'/>
      <div className='sigup-button'>
      <button onClick={heandelSubmit}>Submit</button>
      <Link to="/login" style={{textDecoration:"none"}}><button>LogIn</button></Link>
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

export default SignUp