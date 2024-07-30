import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { FlexContainer } from '../../../../../Components/UI/Layout'
import { MultiAvatar } from '../../../../../Components/UI/Elements'

const PaymentMainHeaderCenter = (props) => {
    const cartData=props.deliveryInfo.storeCart;
    const cartMerchantData= cartData && cartData.merchantInfo;
    
  return (
    <div className="flex justify-center md:w-w60">
      <div className=' w-auto'>
      <MultiAvatar
         primaryTitle={cartMerchantData && cartMerchantData.name}
          imageId={cartMerchantData && cartMerchantData.imageId}
          imgHeight={45}
          imgWidth={45}
        />
    
        
      </div>
      <div className=' w-auto'>
      <h1 className=' xl:text-3xl sm:text-base'>{`${cartMerchantData && cartMerchantData.name}`}</h1>
      
        </div>
        </div>
  )
}

const mapStateToProps = ({ auth, customer }) => ({
    deliveryInfo:customer.showDeliveryInfo
})

export default connect(mapStateToProps)(PaymentMainHeaderCenter)
