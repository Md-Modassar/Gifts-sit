import React from 'react'

const SilderContant = ({ activeIndex, sliderImage }) => {
  return (
    
         <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
         
         
          <div className='text'>
         
          <h1>{slide.title}</h1>
          <h3>{slide.description}</h3>
          </div>
          <div className='img-sid'>
          <img style={{height:"70%", width:"70%"}}  src={slide.urls} alt="" />
          </div>
         
          
        </div>
      ))}
    </section>

    
  )
}

export default SilderContant