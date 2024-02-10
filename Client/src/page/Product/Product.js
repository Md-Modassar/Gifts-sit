import React from 'react'
//import { useState } from 'react';
//import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star';
import "./product.css"
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Header from '../../components/Header/Header';
import Footer from '../../components/footer/Footer';
import { useCart } from '../../context/carts';
import bigdata from "../../Data/Bigdata"
import BestSelling from '../../components/Bestselling/BestSelling';
const Product = () => {
  const { productparams } = useParams();
  const [cart,setCart]=useCart()
  
  let parsedProduct
      const decodedParams = decodeURIComponent(productparams);
        parsedProduct = JSON.parse(decodedParams);
      
  console.log(parsedProduct.id)
  const similarproducts=bigdata.filter((data)=>data.id===parsedProduct.id)
  console.log("simaler",similarproducts)

  
  
  return (
    <>
    <Header/>
    
    <div className='product'>
     
      <div className='product-left'>
      <div className='product-left-up'>
        <div className='sub-image'>
         <img src={parsedProduct.image} alt='' />
         <img src={parsedProduct.image} alt='' />
         <img src={parsedProduct.image} alt='' />
        </div>
        <div className='main-image'>
        <img src={parsedProduct.image} alt='' />
        </div>
        
      </div>
      <div className='product-icons'>
          <div className='product-icon'>
           <SentimentSatisfiedAltIcon style={{height:"40px",width:"40px"}}/>
           <span>20+ Mn Smiles</span>
           <span>Delivered</span>
          </div>
          <div className='product-icon'>
            <LocalShippingIcon style={{height:"40px",width:"40px"}}/>
            <span>20000+ </span>
           <span>Pincodes Covered</span>
            
          </div>
          <div className='product-icon'>
            <LocationOnIcon style={{height:"40px",width:"40px"}}/>
            <span>620+ Cities Enjoying </span>
           <span>same-day delivery</span>
          </div>
        </div>
    
        
      </div>
      
      <div className='product-right'>
        <h1>{parsedProduct.title}</h1>
        <div className='prodict-right-up'>
        <div className='rat-box'>
          <StarIcon style={{color:"white"}}/><h3>{parsedProduct.rating}</h3>
        </div>
        <p>.1324 Reviews</p>
        </div>
        

        <hr/>
        <div className='product-price'><span>Rs:</span><span>{parsedProduct.rs}</span></div>
        <h4>Make this gift extra special</h4>
        <div className='extra-gifts'>
          <div className='extra-gift-card'>
          <img src={parsedProduct.image} alt='' style={{height:"100px",width:"100px",borderRadius:"5px"}}/>
          <div className='gift-card'><span>Rs:</span><h6>{parsedProduct.rs}</h6></div>
          </div>
          <div className='extra-gift-card'>
          <img src={parsedProduct.image} alt='' style={{height:"100px",width:"100px",borderRadius:"5px"}}/>
          <div className='gift-card'><span>Rs:</span><h6>{parsedProduct.rs+300}</h6></div>

          </div>
          <div className='extra-gift-card'>
          <img src={parsedProduct.image} alt='' style={{height:"100px",width:"100px",borderRadius:"5px"}}/>
          <div className='gift-card'><span>Rs:</span><h6>{parsedProduct.rs+500}</h6></div>

          </div>
        </div>
        <div className='description'>
          <span>Description:</span>
          <span>{parsedProduct.des}</span>
        </div>
        <div className='product-button'>
          <button className='card-button' onClick={()=>{setCart([...cart,parsedProduct])
          localStorage.setItem('cart',JSON.stringify([...cart,parsedProduct]))}}  
         >ADD TO CART</button>
          <button className='buy-button'>BUY NOW|{parsedProduct.rs}</button>
        </div>

      </div>
   
    </div>
    <BestSelling data={similarproducts} head1="Similar Products" head2="For You"/>
    <Footer/>
    </>
  )
}

export default Product