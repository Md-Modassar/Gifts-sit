import React from 'react'
import "./card.css"
import StarIcon from '@mui/icons-material/Star';
//import Product from '../../page/Product/Product';
import { Link } from 'react-router-dom';

const Cards = ({produt}) => {
  //  const productString = encodeURIComponent(JSON.stringify(produt));

  return (
    <div className='card'>
    <Link to={`/product/${encodeURIComponent(JSON.stringify(produt))}`}><img src={produt.image} alt=''/></Link>
    <h1>{produt.title}</h1>
    <div className='price'><span>Rs:</span><spn>{produt.rs}</spn></div>
    
    <div className='rating'>
        <StarIcon style={{color:'yellow'}}/>
       <h3>{produt.rating}</h3>
    </div>
   </div>
  )
}

export default Cards