import React from 'react'
import CartMainContentHeader from "../Header/CartMainContentHeader";
import CartMainContent from './Child/CartMainContent'

function Cart() {
  return (
      <>
          <div style={{backgroundColor: "#F6F7FB" , height: "100vh"}}>
     <CartMainContentHeader/>
          <CartMainContent/>
          </div>
          </>
  )
}

export default Cart