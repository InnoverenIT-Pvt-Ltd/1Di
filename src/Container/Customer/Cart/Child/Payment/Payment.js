import React from 'react'
import PaymentMainContentHeader from '../../../Header/PaymentMainContentHeader'
import PaymentMainContent from './PaymentMainContent'

function Payment() {
  return (
      <>

    <PaymentMainContentHeader/> 
          <div style={{backgroundColor: "#F6F7FB" , height: "100vh"}}>
          <PaymentMainContent/>
          </div>
          </>
  )
}

export default Payment