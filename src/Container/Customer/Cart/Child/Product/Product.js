import React from 'react'
import CustomerContentHeader from '../../../Header/CustomerContentHeader'
import MainHeader from '../../../Header/MainHeader'
import ProductMainContent from './ProductMainContent'

function Product() {
  return (
      <>
      {/* <h1> Cart</h1> */}
    <MainHeader/>
          <div style={{backgroundColor: "#F6F7FB" , height: "100vh"}}>
          <CustomerContentHeader/>
          <ProductMainContent/>
          </div>
          </>
  )
}

export default Product