import React from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navabr/Navbar'
import gitnav from "../../Data/giftnav"
import headingimage from "../../Data/typegifts"
import Heading from '../../components/heading/Heading'
import Banner from '../../components/Banner/Banner'
import BestSelling from '../../components/Bestselling/BestSelling'
import pagegift from "../../Data/pagegift"
import Excluvie from '../../components/Excluviebanner/Excluvie'


const Gifts = () => {
  return (
    <div>
    <Header/>
    <Navbar sliderImage={gitnav}/>
    <Heading images={headingimage} />
    <Banner/>
    <BestSelling data={pagegift} head1="Best Selling Gifts" head2="Surprise Your Loved Ones"/>
    <Excluvie/>
    </div>
  )
}

export default Gifts