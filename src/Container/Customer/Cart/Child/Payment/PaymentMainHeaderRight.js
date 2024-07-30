import React, { useEffect } from "react";
import { connect } from "react-redux";
import { FlexContainer } from "../../../../../Components/UI/Layout";
import { MultiAvatar } from "../../../../../Components/UI/Elements";
import "../../../Header/MainHeader.scss";

const PaymentMainHeaderRight = (props) => {
    const cartData=props.deliveryInfo.storeCart;
    const cartMerchantData= cartData && cartData.merchantInfo;
    const cartMerchantAddress=cartMerchantData && cartMerchantData.addresses[0];
   
  return (
    <FlexContainer alignItems="center">
     <div class="max-sm:flex justify-end">
        <p
       class=" max-sm:mt-1 font-bold text-xs text-gray-500 w-wk m-1 break-words md:text-sm mt-0 ">
          {`+${cartMerchantData && cartMerchantData.dialCode}  ${cartMerchantData && cartMerchantData.mobileNo}`} <br />
          {cartMerchantData && cartMerchantData.emailId}
          <br />
          {cartMerchantAddress && cartMerchantAddress.address1},{" "}<br/>
          {cartMerchantAddress && cartMerchantAddress.city},{" "}
          {cartMerchantAddress && cartMerchantAddress.state},{" "}<br/>
          {cartMerchantAddress && cartMerchantAddress.countryName}<br/>
        </p>
      </div>
    </FlexContainer>
  );
};

const mapStateToProps = ({ auth, customer }) => ({
    deliveryInfo:customer.showDeliveryInfo
});

export default connect(mapStateToProps)(PaymentMainHeaderRight);
