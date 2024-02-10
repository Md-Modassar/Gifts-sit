import React from 'react'
import "./footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useState } from 'react';
const Footer = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
  return (

    <div className='footer'>
        <div className='footer-left'>
         <h1>FLOWERS SIT</h1>
         <div className='left-lists'>
         <div className='sub-list-left'>
            <ul>
                <li>Careers</li>
                <li>Our Cafe</li>
                <li>Chobain News</li>
                <li>Foodservice</li>
            </ul>

         </div>
         <div className='sub-list-right'>
         <ul>
                <li>Consumer Care</li>
                <li>Alimni</li>
                <li>Chobani Canada</li>
                <li>Chobani Mexico</li>
            </ul>

          </div>
          </div>
          <div className='footer-social'>
            <FacebookIcon className='footer-icon' style={{height:"100%", width:"100%"}} />
            <InstagramIcon className='footer-icon'style={{height:"100%", width:"100%"}}  />
            <TwitterIcon className='footer-icon' style={{height:"100%", width:"100%"}}  />
            <LinkedInIcon className='footer-icon' style={{height:"100%", width:"100%"}}  />
          </div>
        </div>
        <div className='footer-right'>
          <h2>Get the freshest Chobani news</h2>
          <div className='email-palce'>
            <input typ="text" placeholder='Your email here'/>
            <button>Subscribe</button>
          </div>
          <div className='ch-box'>
          <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <h3>By checking the box, you agree that you are at least 16 years of age
        </h3>
          </div>
          

        </div>
       

    </div>
  )
}

export default Footer