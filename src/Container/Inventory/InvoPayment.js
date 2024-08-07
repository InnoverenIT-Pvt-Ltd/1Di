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
function InvoPayment (props) {

      useEffect(() => {
    props.getInventoryCartItems(props.userId);
    props.getStripeInd()
  }, [props.userId]);

  const [promocode, setPromocode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoCodeId, setPromoCodeId] = useState(null);
  const handlePromoCodeChange = (e) => {
    setPromocode(e.target.value);
  };

 
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
        return (
            <>
              <div className="relative bg-[#1124AA] text-white w-wk h-16 flex items-center justify-center">
                
                <div class="text-white font-semibold text-2xl">Checkout</div>
               
                
                </div>
                <div class="flex  justify-start mt-4">
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
    </div>
                <FlexContainer
                style={{justifyContent: "center"}}
                >
                    <MainWrapper 
                        background= "#FFFFFF"
                        boxShadow= "0.25em 0.25em 0.25em rgba(163 171, 185, 0.5)"
                        borderRadius= "1.25em"
                        width= "65%"
                        border= "none"
                    >
                        <InvoPaymentLeft invencartItem={props.invencartItem} stripeInd={props.stripeInd}/>
                    </MainWrapper>
                    <MainWrapper 
                    
                        background= "#FFFFFF"
                        boxShadow= "0.25em 0.25em 0.25em rgba(163, 171, 185, 0.5)"
                        borderRadius= "1.25em"
                        width= "20%"
                        marginLeft= "1.875em"
                        border= "none"
                    >
                        <InvoPaymentRight invencartItem={props.invencartItem}/>
                    </MainWrapper>
                </FlexContainer>
            </>
        )
    }

    const mapStateToProps = ({ inventory, auth }) => ({
        invencartItem: inventory.invencartItem,
        userId: auth.userDetails.userId,
        stripeInd:inventory.stripeInd
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
      
      
      