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

    <section className="main-cart-section h-[85vh]">
    <div className="relative bg-[#1124AA] h-10 text-white w-wk flex flex-col justify-center">
      <div class="flex">
    <RollbackOutlined
          className="BackButton flex justify-start "
          style={{color:"white"}}
          onClick={() => history.back()}
        />
    <div class="text-lg w-[100%] flex justify-center text-white font-semibold">Shopping Cart</div>
   
        <p className="text-white font-normal flex w-[100%] justify-end pr-3">
          You have &nbsp; <span className="text-[#eacc0c] total-items-count">{props.invencartItemCount.productCount}</span> &nbsp; items in shopping cart</p> </div>
          </div>
          <div class="rounded-lg m-2 p-2 h-12 w-wk overflow-hidden shadow-[4px_0px_9px_3px_] shadow-[#a3abb980] bg-[#DFE2F8]">
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
        <div className=" w-[100%] h-[30vh]">
      
        <Scrollbars style={{ width: "-webkit-fill-available", height:"35vh" }}  renderThumbVertical={({style, ...props}) =>
        <div {...props} style={{...style, backgroundColor: 'orange'}}/>
    }
   >
    
            <div className="w-[100%]">
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
            ><div class="text-white cursor-pointer">To Shipping</div></Button>
          </Link>
  :null}
        </div>
        <div className=" h-[36vh]"> <FeaturedMaterialCard/></div>
        
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
