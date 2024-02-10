import React from 'react'
import navplant from "../../Data/navplant"
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navabr/Navbar'
import Heading from '../../components/heading/Heading'
import typeplant from "../../Data/typeplant"
import Banner from '../../components/Banner/Banner'
import pageplant from "../../Data/pageplant"
import BestSelling from '../../components/Bestselling/BestSelling'
import Excluvie from '../../components/Excluviebanner/Excluvie'
import Footer from '../../components/footer/Footer'

const Plants = () => {
  return (
    <div>
        <Header/>
        <Navbar sliderImage={navplant}/>
        <Heading images={typeplant}/>
        <Banner/>
        <BestSelling data={pageplant} head1="Best Selling Plants" head2="Surprise Your Loved Ones"/>
        <Excluvie/>
        <Footer/>

    </div>
  )
}

export default Plants