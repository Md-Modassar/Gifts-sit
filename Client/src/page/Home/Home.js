import React from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navabr/Navbar'
import Heading from '../../components/heading/Heading'
import Banner from '../../components/Banner/Banner'
import Occassion from '../../components/occassion/Occassion'
import BestSelling from '../../components/Bestselling/BestSelling'
import Excluvie from '../../components/Excluviebanner/Excluvie'
import Footer from '../../components/footer/Footer'
import data from '../../Data/homenavdata'
import headingdata from "../../Data/headingdata"
import sellehomededata from "../../Data/selingdata"


const Home = () => {
//  let head1="Best Selling Flowers & Gifts"
//  let head2="Surprise Your Loved Ones"
  return (
    <div>
      <Header/>
       <Navbar sliderImage={data}/>
       <Heading images={headingdata}/>
       <Banner/>
       <Occassion/>
       <BestSelling data={sellehomededata} head1="Best Selling Flowers & Gifts" head2="Surprise Your Loved Ones" />
       <Excluvie/>
      <Footer/>
    </div>
  )
}

export default Home