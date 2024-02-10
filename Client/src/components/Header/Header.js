import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import logo from "../../images/logo.png"
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import DehazeIcon from '@mui/icons-material/Dehaze';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./header.css"
import { Link } from 'react-router-dom';
import { useCart } from '../../context/carts';
import {Badge} from 'antd'
import emoji from "../../images/emoji.jpg"
import { useAuth } from '../../context/auth';
import CloseIcon from '@mui/icons-material/Close';



const Header = () => {
   const [cart]=useCart()
   const [nav,setNav]=useState(false);
   const [auth,setAuth]=useAuth()
  // {console.log(cart?.length)}
   console.log("auth====",auth?.user?.username)

   const handleLogout = () => {
    setAuth({
      ...auth, user: null, token: ""
    })
    localStorage.removeItem('auth')
    //toast.success("Logout successfully")
  }
  
   
  return (
    <div className='header-main'>
    <div className='header'>
        <div className='header-up'>
            <img  src={logo} alt=''/>
          <Link to="/" style={{textDecoration:"none"}}><h1>Gifts Sit</h1></Link>  
        </div>
        <div className='header-middle'>
        <TextField
        type='text'
        variant='outlined'
        placeholder='Search'
        className='textfield'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" className='s-text'>
              <SearchIcon style={{...(window.innerWidth <= 480 && { height:"30px",width:"50px" })}} />
            </InputAdornment>
          ),
        }}
      />                                                                                                                                                                                                                                                                                                                                        

        </div>
        
        <div className='header-down'>
        <div className='header-midel1'>
           <img src={emoji} alt='' />
           <h1>{auth?.user?.username||"Guest"}</h1>
        </div>
          
           <Badge count={cart?.length}showZero>
             <Link to="/cart"> <ShoppingCartIcon/></Link>
            </Badge>
            {
              nav?<CloseIcon onClick={() => { setNav(!nav) }} style={{cursor:"pointer"}}/>: <DehazeIcon onClick={() => { setNav(!nav) }} style={{cursor:"pointer"}}/>
            }
           

        </div>
    </div>
    <div className='filter'>
       <ul>
        <Link to="/cakes" style={{textDecoration:"none",}}><li>Cakes</li></Link>
       <Link to="/flower" style={{textDecoration:"none",}}><li>Flowers</li></Link> 
       <Link to="/gifts" style={{textDecoration:"none",}}><li>Gifts</li></Link>
       <Link to="/plant" style={{textDecoration:"none",}}><li>Plants</li></Link>
       </ul>
    </div>
    {
        nav && auth?.user ?
          (
          <div className='side-nav'>
            
                <ul>
                 <li style={{cursor:"pointer"}} onClick={handleLogout}>LogOut</li>
                 <li>About</li>
                </ul>
              

            
         
            </div>
          ): nav &&(
            <div className='side-nav'>
              
                  <ul>
                  <Link to="/signup" style={{textDecoration:"none"}}><li>SingUp</li></Link> 
                   <Link to="/login" style={{textDecoration:"none"}}><li>Login</li></Link>
                   <li>About</li>
                  </ul>
                
  
              
           
              </div>
            )
       
        
          
          


          
            

        
    }


    </div>
  )
}

export default Header