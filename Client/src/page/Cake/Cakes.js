import React from 'react'
import data from "../../Data/cakenavdata"
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navabr/Navbar'
import Heading from '../../components/heading/Heading'
import headingdata from "../../Data/typecake"
import Footer from '../../components/footer/Footer'
import BestSelling from '../../components/Bestselling/BestSelling'
import bestcake from "../../Data/pagecake"
import Banner from '../../components/Banner/Banner'
import Excluvie from '../../components/Excluviebanner/Excluvie'


const Cakes = () => {
  return (
    <div>
      <Header/>
      <Navbar sliderImage={data}/>
      <Heading images={headingdata}/>
      <Banner/>
      <BestSelling data={bestcake} head1="Best Selling Cakes" head2="Surprise Your Loved Ones"/>
      <Excluvie/>
      <Footer/>
    </div>
  )
}

export default Cakes