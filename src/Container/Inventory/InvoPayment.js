import React, { useEffect,useState } from 'react'
import { FlexContainer, MainWrapper } from '../../Components/UI/Layout';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InvoPaymentLeft from './InvoPaymentLeft'
import InvoPaymentRight from './InvoPaymentRight'
import { getInventoryCartItems,getStripeInd} from "./InventoryAction";
import {Button, Input} from "antd";
import axios from 'axios';
import Swal from 'sweetalert2';
import { base_url,base_url2 } from '../../Config/Auth'; 
import InvSingleCard1 from './InvSingleCard1';
import { createBrowserHistory } from "history";
import { RollbackOutlined } from "@ant-design/icons";

const history = createBrowserHistory();

function InvoPayment (props) {

      useEffect(() => {
    props.getInventoryCartItems(props.userId);
    props.getStripeInd()
  }, [props.userId]);

  const [promocode, setPromocode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoCodeId, setPromoCodeId] = useState(null);
  const [qn, setqn] = useState({});
  const handlePromoCodeChange = (e) => {
    setPromocode(e.target.value);
  };
  function handleInc(data) {
    setqn({ ...data, quantity: data.quantity + 1 });
  }
  function handleDec(data) {
    setqn({ ...data, quantity: data.quantity - 1 });
  }
  function handlebackdelete(item) {
    const cartItemId = item.cartItemId;
    props.deleteCartItem(cartItemId);
  }
  function handleRemoveCart(data) {
    setqn({ ...data });
  }
 
  const handlePromoCodeBlur = async () => {
    const promo = promocode.trim();
    if (promo !== "") {
      try {
        const response = await axios.put(`${base_url2}/quotation/portal/order/validatePromo`, { promoCode: promo, orderPhoneId:props.invencartItem.orderPhoneId },
          { headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token") || "",
        }},

        );
        console.log("API Response:", response.data);  
        if (response.data.msg === "Promo code applied") {
          setPromoApplied(true);
          setPromoCodeId(response.data.promoCodeId);
        }

        Swal.fire({
          icon: 'success',
          title: response.data.msg,
        })
      } catch (error) {
        console.error("Error verifying promo code:", error);
      }
    }
  };

  const handlePromoCodeWhite = async () => {
    const promo = promocode.trim();
    if (promo !== "") {
      try {
        const response = await axios.put(`${base_url2}/quotation/protal/order/applyPromo`, {promoCodeId: promoCodeId, promoCode: promo, orderPhoneId:props.invencartItem.orderPhoneId },
          { headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token") || "",
        }},

        );
        console.log("API Response:", response.data);  
        Swal.fire({
          icon: 'success',
          title: "Prmocode Applied SucessFully",
        })
        //window.location.reload();
      } catch (error) {
        console.error("Error verifying promo code:", error);
      }
    }
  };
  console.log(props.stripeNo && props.stripeNo.payByCashInd)
        return (
            <>
              <div className="relative bg-[#1124AA] text-white w-wk h-8 flex items-center justify-center">
              <div class="flex w-wk items-center">
            <RollbackOutlined
          className="!text-[24px] BackButton  flex justify-start "
          style={{color:"white"}}
          onClick={() => history.back()}
        /> 
          <div class=" flex text-sm text-white w-[100%] justify-center font-semibold"> Checkout</div> 
          <div className=" flex justify-end w-[100%] text-white text-sm text-[16px] font-normal pr-3"> </div>
          </div>
                <div class="text-white font-semibold text-sm"></div>
               
                
                </div>
              
               
                     <div class="w-wk bg-white shadow-2xl rounded-lg border p-1 h-[87vh] flex justify-between"   >
                     
                      <div className='w-[40%]'>
                      {/* <div class="flex  justify-start mt-1">
                <Input  className='rounded border-black w-48'
        type="text"
        value={promocode}
        onChange={handlePromoCodeChange}
        onBlur={handlePromoCodeBlur}
        placeholder="Enter promo code"
                />
                 {promoApplied && (
        <div className="flex justify-start ml-2">
          <Button className="rounded "
          onClick={handlePromoCodeWhite}
          style={{backgroundColor:"#1124aa",color:"white"}}
          >
            Apply
          </Button>
        </div>
      )}
    </div> */}
                        <InvoPaymentLeft invencartItem={props.invencartItem} stripeNo={props.stripeNo }/>
                        <InvoPaymentRight invencartItem={props.invencartItem} repeatDeliveryInfo={props.repeatDeliveryInfo}
                          addingRepeatDeliveryInfo={props.addingRepeatDeliveryInfo}/>
                        </div>
                        <div className=" w-[55%] h-[83vh] border box-border overflow-x-auto">
      <div className="w-[100%]">
     {props.invencartItem.cartItems && props.invencartItem.cartItems.length === 0 ? <div class="flex justify-center  text-2xl text-[red]">Your Shopping cart is empty !</div>:
props.invencartItem.cartItems && props.invencartItem.cartItems.map((item) => {
            return ( 
           <InvSingleCard1
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
      
      
     

  </div>

                    </div>
                   
              
            </>
        )
    }

    const mapStateToProps = ({ inventory, auth }) => ({
        invencartItem: inventory.invencartItem,
        userId: auth.userDetails.userId,
        stripeNo:inventory.stripeNo,
        repeatDeliveryInfo:inventory.repeatDeliveryInfo,
        addingRepeatDeliveryInfo:inventory.addingRepeatDeliveryInfo
      });
      
      const mapDispatchToProps = (dispatch) =>
        bindActionCreators(
          {
       
            getInventoryCartItems,
            getStripeInd
          },
          dispatch
        );
      
      export default connect(mapStateToProps, mapDispatchToProps)(InvoPayment);
      
      
      