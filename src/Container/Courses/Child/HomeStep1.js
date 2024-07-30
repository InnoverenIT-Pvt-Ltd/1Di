// import React ,{useState,useEffect}from 'react'
// import { connect } from 'react-redux'
// import "../courses.scss"
// import { bindActionCreators } from 'redux'
// import { CalendarOutlined ,TableOutlined} from '@ant-design/icons';
// import { MultiAvatar } from '../../../Components/UI/Elements'
// import { CurrencySymbol } from '../../../Components/Common';
// // import {deleteCartData} from "../CustomerAction"

// import {getCartProductList} from "../CoursesAction"
// import {
  
//   DeleteOutlined,
//   MinusOutlined,
//   PlusOutlined
  
// } from '@ant-design/icons';

// function HomeStep1(props) {

//   const [qn, setqn] = useState({});
//   const [open, setOpen] = useState(true)

//   useEffect(() => {
//     const value = localStorage.getItem("cartId");
//     const final = JSON.parse(value);
//     props.getCartProductList(final.cartId)
//   }, []);
//   useEffect(() => {
//     if (qn.quantity) {
//       // handleBackInc();
//     }
//   }, [qn.quantity]);

//   function handleInc(data) {
//     setqn({ ...data, quantity: data.quantity + 1 });
//     // handleBackInc();
//   }
//   function handleDec(data) {
//     setqn({ ...data, quantity: data.quantity - 1 });

//     // handleBackDec();
//   }



//   return (
  
//     <div className="items-info">
//        <div className=" sm:h-28 w-28 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
//       <div   className=" h-32 w-32 -mt-5 -ml-2 object-cover object-center">
//         <MultiAvatar
//           // imageId={
//           //   props.item.productInfo.imageUrl
//           //     ? props.item.productInfo.imageUrl
//           //     : ''
//           // }
          
//         />
//       </div>
//       </div>
//       <div className="title">
//         <h3>{props.cart.productInfo.name}</h3>

     
//       {/* <div className="">
     
//       <h3 class=" text-xs">
//        Size-{props.item.productInfo.productSize} 
//         </h3>
       
//       </div> */}
//       </div>
//       {/* <div className="price">
//         <h3>
//         <CurrencySymbol currencyType={props.shopName.currencyName}/> {props.item.productInfo.price} 
//         </h3>
//       </div> */}
//       {/* <div className="price2">
    
//       </div> */}
     
//       <div className="add-minus-quantity">
//         <span
//           onClick={() => {
//           //   setqn(props.item)
//           // handleDec(props.item)
//           }}
//         >
//           {/* <i class="fas fa-minus minus"></i> */}

//           <MinusOutlined />
//         </span>
//         <input
//           type="text"
//           // placeholder={
//           //   props.qn.quantity && props.item.cartItemId === props.qn.cartItemId
//           //     ? props.qn.quantity
//           //     : props.item.quantity
//           // }
//         />
      

//         <span
//           onClick={() => {
//             // setqn(props.item)
//             // handleInc(props.item)
//           }}
//         >
//           {/* <i class="fas fa-plus add"></i> */}
//           <PlusOutlined />
//         </span>
//       </div>
   
//       <div className="remove-item">
//       <span
//           onClick={() => {
//             // props.setqn(props.item)
//             // props.handlebackdelete(props.item)
//           }}
//         >
//         <DeleteOutlined />
//         </span>
//         <hr />
//       </div>
//     </div>
    

//   )
// }
// const mapStateToProps = ({ customer, courses }) => ({
//   cart:courses.cart
// })

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators(
//     {
//       getCartProductList
//     },
//     dispatch,
//   )

// export default connect(mapStateToProps, mapDispatchToProps)(HomeStep1)

import React, { useCallback, useEffect, useState } from "react";
// import image from "../../../Assets/Images/mango.jpg";
import "../courses.scss";

import { DownOutlined } from "@ant-design/icons";
// import { Scrollbars } from "react-custom-scrollbars-2";
import { Button, message, Tooltip } from "antd";
import { Scrollbars } from "react-custom-scrollbars-2";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { FlexContainer, Spacer } from "../../../Components/UI/Elements";

import SingleCard from "../Child/SingleCard";





function HomeStep1(props) {
  const [qn, setqn] = useState({});

  useEffect(() => {
    if (qn.quantity) {
      handleBackInc();
    }
  }, [qn.quantity]);
 
  console.log(props.cart);

  
  function handleInc(data) {
    setqn({ ...data, quantity: data.quantity + 1 });
    // handleBackInc();
  }
  function handleDec(data) {
    setqn({ ...data, quantity: data.quantity - 1 });

    // handleBackDec();
  }
  function handleBackInc() {
    const value = localStorage.getItem("cartId");
    const final = JSON.parse(value);
    const data = { cartItemId: qn.cartItemId, newQty: qn.quantity };
     props.updateCart(data, final.cartId);
  }

 
  return (
    <>
      <section className="main-cart-section">
        {/* <h1>Shopping Cart</h1> */}
        {/* <p className="total-items">
          You have <span className="total-items-count">{cartItemCount}</span>{" "}
          items in shopping cart
        </p> */}
        <div className="cart-items">
          <Scrollbars style={{ width: 1060, height: 262 }}  renderThumbVertical={({style, ...props}) =>
        <div {...props} style={{ ...style,backgroundColor: 'orange'}}/>
      }
   >
            <div className="cart-items-container">
              {props.cart.storeCart &&
               props.cart.storeCart.cartItems &&
                props.cart.storeCart.cartItems.length &&
                props.cart.storeCart.cartItems.map((item) => {
                  return (
                    <SingleCard
                      item={item}
                      handleDec={handleDec}
                      handleInc={handleInc}
                      // handleRemoveCart={handleRemoveCart}
                      // handlebackdelete={handlebackdelete}
                      setqn={setqn}
                      qn={qn}
                    />
                  );
                })}
            </div>
           </Scrollbars> 
        </div>
        {/* <div style={{ textAlign: "right" }}> */}
        
        {/* </div> */}
      </section>
      
    </>
  );
  
}


const mapStateToProps = ({ customer, auth,courses }) => ({
   cart: courses.cart,
  // contactId: customer.productInfo.contactId,
  // fetchingCartList: customer.fetchingCartList,
  // shopName: customer.shopName,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
     
      // deleteCartData,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(HomeStep1);