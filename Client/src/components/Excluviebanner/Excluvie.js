import React from 'react'
import hero from "../../images/hero.png"
import hero1 from "../../images/hero1.png"
import "./excluvie.css"

const Excluvie = () => {
  return (
    <div className='exclusive'>
       <div className='exclusive-left'>
        <img src={hero} alt='' />
       </div>
       <div className='exclusive-mid'>
         <h1>Add Personal Touch To Your Gift   </h1>
         <h1>Send a Video Message</h1>
         <button>Shop Now</button>
         <h3>See How It Works</h3>
       </div>
       <div className='exlusive-right'>
        <img src={hero1} alt='' style={{height:"100%",width:"100%"}}/>

       </div>
    </div>
  )
}

export default Excluvie