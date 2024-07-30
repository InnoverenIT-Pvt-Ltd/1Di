import React, { useEffect,useState } from "react";
import "../Customer/Customer.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button } from "antd";
import {getInventoryCartItems, getInventoryCartItemsCount,
  updateCartPlus,deleteCartItem  
} from "./InventoryAction";
import InvSingleCard from "./InvSingleCard";
import { Scrollbars } from "react-custom-scrollbars-2";
import { BundleLoader } from "../../Components/Placeholder";
import { createBrowserHistory } from "history";
import { RollbackOutlined } from "@ant-design/icons";

const history = createBrowserHistory();

function InvCard (props) {

  useEffect(()=>{

    props.getInventoryCartItems(props.userId);
    props.getInventoryCartItemsCount(props.userId);
      },[]);

      const [qn, setqn] = useState({});
  
      useEffect(() => {
        if (qn.quantity) {
          handleBackInc();
        }
      }, [qn.quantity]);

      function handleInc(data) {
        setqn({ ...data, quantity: data.quantity + 1 });
      }
      function handleDec(data) {
        setqn({ ...data, quantity: data.quantity - 1 });
      }

      function handleBackInc() {
        const orderPhoneId = props.invencartItem.orderPhoneId ? props.invencartItem.orderPhoneId :null;
        const data = {
          productId: qn.productInfo.productId,
          orderPhoneId:orderPhoneId, quantity: qn.quantity };
        props.updateCartPlus(data);
      };

      function handlebackdelete(item) {
        const cartItemId = item.cartItemId;
        props.deleteCartItem(cartItemId);
      }

      function handleRemoveCart(data) {
        setqn({ ...data });
      }

      if (props.fetchingInventoryCartItems)
        {
          return <BundleLoader/>
        }
const invencartItem = {

  cartItems:[
     
  ]
}
  return (
    <>
<RollbackOutlined
          className="BackButton flex justify-start "
          style={{}}
          onClick={() => history.back()}
        />
    <section className="main-cart-section">
    <div class="text-lg text-black font-bold">Shopping Cart</div>
        <p className="total-items">
          You have <span className="text-orange-600 total-items-count">{props.invencartItemCount.productCount}</span> items in shopping cart</p>
        <div className="cart-items">
        <Scrollbars style={{ width: "-webkit-fill-available", height: "-webkit-fill-available" }}  renderThumbVertical={({style, ...props}) =>
        <div {...props} style={{...style, backgroundColor: 'orange'}}/>
    }
   >
            <div className="cart-items-container">
           {props.invencartItem.cartItems && props.invencartItem.cartItems.length === 0 ? <div class="flex justify-center  text-2xl text-[red]">Your Shopping cart is empty !</div>:
props.invencartItem.cartItems && props.invencartItem.cartItems.map((item) => {
                  return ( 
                 <InvSingleCard 
                 key={item.cartItemId}
                 invencartItem={props.invencartItem}
                 item={item}
                 handleDec={handleDec}
                 handleInc={handleInc}
                 handleRemoveCart={handleRemoveCart}
                 handlebackdelete={handlebackdelete}
                 setqn={setqn}
                 qn={qn}
                 updatingPlusCart={props.updatingPlusCart}
                  />

               )})} 
            </div>
            </Scrollbars>
        </div>
        
        <div style={{ textAlign: "right" }}>
        {props.invencartItem.cartItems && props.invencartItem.cartItems.length > 0 ?
          <Link to={props.invencartItem.cartItems && props.invencartItem.cartItems.length > 0 ? `/shopName/invcartInfo` :`/shopName/inventorycart`}>
            <Button type="primary"
              // disabled={props.invencartItem.cartItems && props.invencartItem.cartItems.length === 0 }
            ><div class="text-white cursor-pointer">Next</div></Button>
          </Link>
  :null}
        </div>
      </section>

      </>
  );
}

const mapStateToProps = ({ inventory, auth }) => ({
  invencartItem: inventory.invencartItem,
  userId: auth.userDetails.userId,
  invencartItemCount: inventory.invencartItemCount,
  fetchingInventoryCartItems:inventory.fetchingInventoryCartItems,
  updatingPlusCart:inventory.updatingPlusCart
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getInventoryCartItems,
      getInventoryCartItemsCount,
      updateCartPlus,
      deleteCartItem

    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(InvCard);
