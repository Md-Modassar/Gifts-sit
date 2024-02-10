import React from 'react'
//import data from "../../Data/selingdata"
import "./bestselling.css"
import Cards from '../cards/Cards';

const BestSelling = ({data,head1,head2}) => {
  return (
    <div className='selling'>
        <div className='sell-left'>
            <div className='sell-text'>
             <h1>{head1}</h1>
             <h3>{head2}</h3>
            </div>
            <div className='left-button'>
                <button>View</button>
            </div>
        </div>
        <div className='sell-right'>
           {
            data.map((produt,index)=>(
                  <Cards produt={produt}/>
            )

            )
           }
        </div>

    </div>
  )
}

export default BestSelling