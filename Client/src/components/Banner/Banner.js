import React from 'react'
import "./banner.css"
import paytm from "../../images/paytm.png"
import gift from "../../images/giftslogo.png"

const Banner = () => {
  return (
    <div className='banner'>
    <div className='ptm'>
        <img src={paytm} alt='' />
    </div>
    <div className='gift-img'>
        <img style={{height:"100%",width:"100%"}} src={gift} alt=''/>
    </div>
    </div>
  )
}

export default Banner