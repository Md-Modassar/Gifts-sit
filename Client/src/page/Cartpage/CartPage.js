import React from 'react'
import "./cartpage.css"
import { useCart } from '../../context/carts'
import { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import SecurityIcon from '@mui/icons-material/Security';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { useEffect } from 'react';
import {Link} from "react-router-dom"
import { useAuth } from '../../context/auth';
import axios from 'axios';
import Footer from '../../components/footer/Footer';
import {BASE_URL} from "../../server/server"
import {  useLocation, useNavigate } from 'react-router-dom'
//import { Footer } from 'antd/es/layout/layout';
const CartPage = () => {
    const [cart,setCart]=useCart()
    const [auth]=useAuth()
    const navigate=useNavigate();
    const location =useLocation();
    let email=auth?.user?.email
    console.log("email===",email)
   let productsname=cart?.map((produt)=>produt.title)
      // console.log(productsname)

    //const [count,setCount]=useState(1)
    const [count, setCount] = useState(Array(cart.length).fill(1));
    useEffect(() => {
        //console.log("Count or Cart changed:", count, cart);

        // Calculate and log the total price dynamically
        const totalPrice = cart.reduce((acc, item, index) => {
            return acc + item.rs * count[index];
        }, 0);

       // console.log("Total Price:", totalPrice);

        // Additional actions can be performed here based on count or cart changes
        // For example, you might want to update the total price in the UI or make an API call
    }, [count, cart]);
     // const [price,setPrice]=useState(0)
    const totalprice = () => {
        try {
            let totalPrice = 0;
            cart.forEach((item, index) => {
                totalPrice += item.rs * count[index];
            });
           // setPrice(totalPrice)
            return totalPrice;
        } catch (err) {
            console.log(err);
        }
    };
    const price=totalprice()
  
    //console.log("price",price)


    const [emailData, setEmailData] = useState({
        to: email, // Replace with the user's email address
        subject: 'Your Order',
        message:`this is your products ${productsname} 
        and this to total prices :${price}`,
      });

      const handleSendEmail = async () => {
        try {
         const result= await axios.post(`${BASE_URL}/sendemail`, emailData);
         if(result.data.status){ 
            
            console.log('Email sent successfully!');
      
            }
          

        } catch (error) {
          console.error('Failed to send email:', error);
        }
      };

      const removeCartItem=(index)=>{
        try{
           let mycart=[...cart]
          // let index=mycart.findIndex(item=>item._id===pid)
           mycart.splice(index,1)
           setCart(mycart)
           localStorage.setItem('cart',JSON.stringify(mycart))
        }catch(err){
         console.log(err)
        }
      }

   
      

const handleCountChange = (index, newCount) => {
    // Ensure count doesn't go below 1
    newCount = Math.max(newCount, 1);
    

   //cart[index].rs*newCount
   //setCart([...cart])
    // Make a copy of the counts array
    const newCounts = [...count];
    // Update the count for the specific product at the given index
    newCounts[index] = newCount;

    // Set the updated counts array
    setCount(newCounts);
};
//console.log(count)
//console.log("dataauth",auth)
// if(!auth.user){
//     navigate(location.state||'/login')
// }

  return (
    
    auth.user ?(
     <>
   

    
    <div className='cart-parts'>
    <div className='cart-main'>
        <h1>My Carts</h1>

        {
            cart.map((product,i)=>(
                <div className='cart'>
                    <div className='cart-left'>
                        <img src={product.image} alt=''/>
                    </div>
                    <div className='cart-right'>
                        <h1>{product.title}</h1>
                        <div className='cart-price'><span>Rs:</span><span>{product.rs*count[i]}</span></div>
                        <div className='cart-count'>
                            <button onClick={() => handleCountChange(i, count[i] - 1)}>-</button>
                            <h4 onClick={()=>product.rs*count}>{count[i]}</h4>
                            <button onClick={() => handleCountChange(i, count[i] + 1)}>+</button>
                        </div>
                    </div>
                    <div className='cart-down'>
                        <DeleteIcon style={{height:"50px",width:"50px", color:"red", cursor:"pointer"}} onClick={()=>(removeCartItem(i))}/>

                    </div>

                </div>
            ))
        }

    </div>
    <div className='cart-total-main'>
    <div className='cart-price-total'>
        <h1>Cart Summary</h1>
        <hr/>
        <h2>Grand Total</h2>
        <div className='price-total'><span>Rs:</span><span>{totalprice()}</span></div>
        <p>Have a Coupon Code? You can apply the discount coupon in the Checkout Process</p>
        <button onClick={handleSendEmail}>Place Order</button>
    </div>
    <Link to="/"><button className='b-sh' >Continue Shopping</button></Link>
    <div className='cart-icons'>
        <div className='cart-icon'>
          <CurrencyRupeeIcon/>
          <h1>No Hidden</h1> 
          <h1>Charge</h1>
        </div>
        <div className='cart-icon'>
          <SecurityIcon/>
          <h1>100% Secure</h1> 
          <h1>payments</h1>
        </div>
        <div className='cart-icon'>
          <SentimentSatisfiedAltIcon/>
          <h1>7 Million</h1> 
          <h1>Smiles Delivered</h1>
        </div>
    </div>
    </div>
 
    
    </div>
    <Footer/>
    

    </>):(
    <div className='elepart'>
         <h1>Please login </h1>
         <Link to="/login" style={{direction:"none"}}><button>Login</button></Link>
    </div>)
    
  )
}


export default CartPage