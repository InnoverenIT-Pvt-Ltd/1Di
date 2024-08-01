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
import FeaturedMaterialCard from "./FeaturedMaterialCard";

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

    <section className="main-cart-section">
    <div className="relative bg-[#1124AA] h-20 text-white w-wk flex flex-col justify-center">
      <div class="flex">
    <RollbackOutlined
          className="BackButton flex justify-start "
          style={{color:"white"}}
          onClick={() => history.back()}
        />
    <div class="text-lg text-white font-semibold">Shopping Cart</div>
    </div>
        <p className="text-white font-normal">
          You have <span className="text-orange-600 total-items-count">{props.invencartItemCount.productCount}</span> items in shopping cart</p>
          </div>
          <div class="rounded-lg m-2 p-2 w-wk overflow-auto shadow-[4px_0px_9px_3px_] shadow-[#a3abb980] bg-[#DFE2F8]">
          <div className=" flex justify-between w-[99%] p-1 bg-transparent font-bold sticky top-0 z-10">
          <div className=" md:w-[0rem]"></div>
        <div className=" md:w-[10.9rem]">Product title</div>
        <div className="md:h-[2rem] md:bg-[#ACB6FC]  w-[0.1rem]"></div>
        <div className=" md:w-[5.11rem] ">SKU</div>
        <div className="md:h-[2rem] md:bg-[#ACB6FC]  w-[0.1rem]"></div>
        <div className=" md:w-[8.2rem]">Available Date</div>
        <div className="md:h-[2rem] md:bg-[#ACB6FC]  w-[0.1rem]"></div>
        <div className="md:w-[8.2rem]">Price</div> 
        <div className="md:h-[2rem] md:bg-[#ACB6FC]  w-[0.1rem]"></div>
        <div className=" md:w-[8rem]">Ship By</div>        
      </div>
      </div>
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

            <FeaturedMaterialCard/>

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
        
        <hr class=" mt-4 w-auto ml-0 h-1 mx-auto  bg-black border-0 rounded " />
      <div class="text-sm flex justify-center  text-gray-700 bottom-0 absolute w-wk items-center" >
         © {new Date().getFullYear()} {` `}  1Di inc
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
