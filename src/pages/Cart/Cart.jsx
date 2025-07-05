import React from 'react'
import classes from './Cart.module.scss';
import Header from '../../components/Header/Header';
import Banner from '../../components/banner/Banner';
import Footer from '../../components/Footer/Footer';
const Cart = () => {
  return (
    <section>
      <Header/>
      <Banner heading="Cart"/>
      <Footer/>

    </section>
  )
}

export default Cart