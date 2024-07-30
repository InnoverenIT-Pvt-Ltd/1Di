import React from "react";
import Button from "antd/lib/button";
import { FlexContainer } from "../../../Components/UI/Layout";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from 'react-redux';
import cart1 from "../../../Assests/Images/cart1.png"
import { bindActionCreators } from 'redux';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   solid,
//   regular,
//   brands,
// } from "@fortawesome/fontawesome-svg-core/import.macro";

class CartMainContentHeaderActionRight extends React.Component {
  render() {
    // const cartData=this.props.cart.storeCart;
    // const cartItemData= cartData&&cartData.cartItems;
    // const cartItemCount =cartData&&cartData.itemCount;
    // const cartSummaryData=cartItemData&&cartItemData.cartSummary;
    // const cartItems=cartSummaryData && cartSummaryData.itemCount;
   
    // const shopName= this.props.shopName.name
    // const str = shopName&&shopName.replace(/ +/g, "");
  
    return (
      <>
        <ButtonContainerWrapper >

         
          <Link to={`/shopName/customercart`}>
            
          <div className="cart-icon">
          

          {/* <FontAwesomeIcon icon={solid("cart-shopping")} style={{color:"blue",fontSize:"1.3em"}}/> */}
          <img src={cart1} alt="cart" />
                                        {/* {cartItemCount &&
                                  <p>{cartItemCount||"0"}</p>
                                } */}
                                  &nbsp;
            </div>
              
          </Link>
         
        
          &nbsp; &nbsp;

          {/* <div className="btnTrck">
            <Link to="/shopName/track">
              <Button
                 className="btnTrack"
              // type="primary"
              >
                Track Order
          </Button>
            </Link>
          </div> */}
          {/* <Button
            type="primary"
            ghost
            // onClick={() => handleSuppliersModal(true)}
            style={{backgroundColor:"white", color: "black", borderColor:"black", borderRadius:"10px"}}
            icon={<i class="far fa-user"></i>}
          >
           &nbsp;
            Account
          </Button> */}
        </ButtonContainerWrapper>
      </>
    );
  }
}

const mapStateToProps = ({ customer, auth }) => ({
  // customer: customer.customer,
  // linkingProductInfo: customer.linkingProductInfo,
  // productInfo:customer.productInfo,
  //  cartId:customer.productInfo.cartId,
   shopName:customer.shopName,
   cart: customer.cart,

  // cartId: customer.dispatch.length && customer.dispatch[0].cartId || "",

  // userId: auth.userDetails.userId,
  // productId:products.products.productId
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
      {
          // getCustomerProductList,
          // LinkProductInfo,
          // getShopName
      },
      dispatch
  );

  export default connect(mapStateToProps, mapDispatchToProps)(CartMainContentHeaderActionRight);

// export default CustomerContentActionRight;
const ButtonContainerWrapper = styled.div`
/* border:1px solid red; */
display:flex;
@media only screen and (max-width: 600px) {
    
}

`
