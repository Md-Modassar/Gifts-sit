import React from 'react'
import "./heading.css"
//import images from "../../Data/headingdata"

const Heading = ({images}) => {
  return (
    <div className='heading-main'>
        {
            images.map((img,index)=>(
                <div className='heading'>
                    <img  src={img.image} alt=''/>
                    <h1>{img.title}</h1>

                </div>
            ))
        }
    </div>
  )
}

export default Heading