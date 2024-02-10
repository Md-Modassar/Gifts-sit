import React from 'react'
import "./occassion.css"
import data from "./occassiondata"

const Occassion = () => {
  return (
    <div className='occassion'>
        <div className='left '>
            <h1>Shop By Occasions & Relations</h1>
            <h4>Shop By Occasions & Relations</h4>
        </div>
        <div className='right'>
            {
                data.map((image,inde)=>(
                    <div className='right-card'>
                        <img  src={image.image} alt=''/>
                        <h1>{image.title}</h1>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Occassion