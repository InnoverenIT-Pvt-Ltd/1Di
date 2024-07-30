import React from 'react'
import CustomerContentHeader from '../../../Header/CustomerContentHeader'
import MainHeader from '../../../Header/MainHeader'
import CancellationMainContent from './CancellationMainContent'

function Cancellation() {
  return (
      <>
      {/* <h1> Cart</h1> */}
    <MainHeader/>
          <div style={{backgroundColor: "#F6F7FB" , height: "100vh"}}>
          <CustomerContentHeader/>
          <CancellationMainContent/>
          </div>
          </>
  )
}

export default Cancellation