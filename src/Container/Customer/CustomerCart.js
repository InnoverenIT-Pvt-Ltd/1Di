import React from "react";

import {FlexContainer, MainWrapper} from "../../Components/UI/Layout";
import Card from "./Card/Card";
import CouponCard from "./Card/CouponCard";
 import MainHeader from "./Header/MainHeader";
 import CustomerCartHeader from "./Header/CustomerCartHeader";

function CustomerCart(props) {
  return (
    <>
 <MainHeader />
      <CustomerCartHeader />
      <FlexContainer justifyContent={"space-around"}  >
           <MainWrapper width={"80%"} height={"32em"}>
      
          <Card/>
           </MainWrapper>
        
        {/* <MainWrapper width={"35%"} height={"32em"} >
          <CouponCard
          // shopName={props.shopName}
           />
        </MainWrapper> */}
      
      </FlexContainer> 

    </>
  );
}

export default CustomerCart;
