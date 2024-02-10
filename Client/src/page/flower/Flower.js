import React from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navabr/Navbar'
import flowernav from "../../Data/flowernavdata" 
import typeflower from "../../Data/typeflower"
import Heading from '../../components/heading/Heading'
import Banner from '../../components/Banner/Banner'
import BestSelling from '../../components/Bestselling/BestSelling'
import flowerdata from "../../Data/pageflower"
import Excluvie from '../../components/Excluviebanner/Excluvie'
import Footer from '../../components/footer/Footer'


const Flower = () => {
  return (
    <div>
        <Header/>
        <Navbar sliderImage={flowernav}/>
        <Heading images={typeflower}/>
        <Banner/>
        <BestSelling data={flowerdata} head1="Best Selling Flowers" head2="Surprise Your Loved Ones"/>
        <Excluvie/>
        <Footer/>
    </div>
  )
}

export default Flower