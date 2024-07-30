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



  const [checkNo, setcheckNo] = useState("");

  const handlePayByCheck = (e) => {
    setcheckNo(e.target.value);
  };

  const handlePayByBlur = async () => {
    const check = checkNo.trim();
    if (check !== "") {
      try {
        const response = await axios.put(`${base_url2}/payment/protal/prosess`, { paymentNo: check, orderPhoneId:props.invencartItem.orderPhoneId },
          { headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token") || "",
        }},

        );
        console.log("API Response:", response.data);  
        props.closeModal();
      } catch (error) {
        console.error("Error verifying :", error);
        props.closeModal();
      }
    }
  };
        return (
            <>
                 
                <div class="flex justify-center">
                <Input  className='rounded border-black w-48'
        type="text"
        value={checkNo}
        onChange={handlePayByCheck}
        onBlur={handlePayByBlur}
        placeholder="Enter check No"
                /></div>
                
            </>
        )
    }

    const mapStateToProps = ({ inventory, auth }) => ({
   
        userId: auth.userDetails.userId,
      });
      
      const mapDispatchToProps = (dispatch) =>
        bindActionCreators(
          {
       

          },
          dispatch
        );
      
      export default connect(mapStateToProps, mapDispatchToProps)(InvoPayment);
      
      
      