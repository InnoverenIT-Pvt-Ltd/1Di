import React from "react";
import Button from "antd/lib/button";
import { FlexContainer } from "../../../Components/UI/Layout";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from 'react-redux';
import cart1 from "../../../Assests/Images/cart1.png"
import { bindActionCreators } from 'redux';

class CustomerCartHeaderActionRight extends React.Component {
  render() {
    // console.log(this.props.shopName.name) 
    // const cartData=this.props.cart.storeCart;
    // const cartItemData= cartData&&cartData.cartItems;
    // const cartItemCount =cartData&&cartData.itemCount;
    // const cartSummaryData=cartItemData&&cartItemData.cartSummary;
    // const cartItems=cartSummaryData && cartSummaryData.itemCount;
    // console.log(cartItemCount)
    // console.log(this.props.shopName.storeCart)
    // const shopName= this.props.shopName.name
    // const str = shopName&&shopName.replace(/ +/g, "");
    // console.log(str)
    return (
      <>
        <ButtonContainerWrapper >

          <Link to={`/shopName/customercart`}>
          <div className="cart-icon">
            {/* <Button
            className="crt1"
              type="primary"
              ghost
              // onClick={() => handleSuppliersModal(true)}
              // style={{
              //   background: "#FFFFFF",
              //   border: "0.0625em solid #000000",
              //   boxSizing: "border-box",
              //   borderRadius: "10px",

              //   color: "black"

              // }}
              
              icon={<i class="fas fa-shopping-cart"></i>}
            >
              <span style={{marginLeft:"0.5em"}}>
              Cart
              </span>
              <p>7</p>
            
            </Button> */}

<img
                                             src={cart1} alt="cart"
                                           
                                           
                                        />
                                  <p>{2}</p>
            &nbsp;
            </div>
          </Link>
        
          &nbsp; &nbsp;

         
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
//    shopName:customer.shopName,
//    cart: customer.cart,

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

  export default connect(mapStateToProps, mapDispatchToProps)(CustomerCartHeaderActionRight);

// export default CustomerContentActionRight;
const ButtonContainerWrapper = styled.div`
/* border:1px solid red; */
display:flex;
@media only screen and (max-width: 600px) {
    
}

`
