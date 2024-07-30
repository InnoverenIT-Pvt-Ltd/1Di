import React, { useEffect,useState } from 'react'
import { FlexContainer, MainWrapper } from '../../Components/UI/Layout';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InvoPaymentLeft from './InvoPaymentLeft'
import InvoPaymentRight from './InvoPaymentRight'
import { getInventoryCartItems,} from "./InventoryAction";
import {Input} from "antd";
import axios from 'axios';
import { base_url,base_url2 } from '../../Config/Auth'; 
function InvoPayment (props) {

      useEffect(() => {
    props.getInventoryCartItems(props.userId);
  }, [props.userId]);

  const [promocode, setPromocode] = useState("");

  const handlePromoCodeChange = (e) => {
    setPromocode(e.target.value);
  };

  const handlePromoCodeBlur = async () => {
    const promo = promocode.trim();
    if (promo !== "") {
      try {
        const response = await axios.put(`${base_url2}/quotation/protal/order/applyPromo`, { promoCode: promo, orderPhoneId:props.invencartItem.orderPhoneId },
          { headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token") || "",
        }},

        );
        console.log("API Response:", response.data);  
      } catch (error) {
        console.error("Error verifying promo code:", error);
      }
    }
  };
        return (
            <>
                 <FlexContainer style={{justifyContent: "center"}}>
                <h1><b>Checkout</b></h1>
                </FlexContainer>
                <div class="flex justify-center">
                <Input  className='rounded border-black w-48'
        type="text"
        value={promocode}
        onChange={handlePromoCodeChange}
        onBlur={handlePromoCodeBlur}
        placeholder="Enter promo code"
                /></div>
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
                        <InvoPaymentLeft invencartItem={props.invencartItem}/>
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
      });
      
      const mapDispatchToProps = (dispatch) =>
        bindActionCreators(
          {
       
            getInventoryCartItems
          },
          dispatch
        );
      
      export default connect(mapStateToProps, mapDispatchToProps)(InvoPayment);
      
      
      