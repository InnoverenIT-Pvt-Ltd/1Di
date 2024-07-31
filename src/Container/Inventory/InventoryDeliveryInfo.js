import { Button } from 'antd'
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FlexContainer, MainWrapper } from '../../Components/UI/Layout'
import InventoryDeliveryInfoForm from './InventoryDeliveryInfoForm';
import { createBrowserHistory } from "history";
import { RollbackOutlined } from "@ant-design/icons";
import {getInventoryCartItems} from "./InventoryAction";

const history = createBrowserHistory();

function InventoryDeliveryInfo (props) {

    useEffect(() => {
        props.getInventoryCartItems(props.userId);
      }, []);

        return (
            <>
            <div class="bg-[#F7F8FC]">
            <div className="relative bg-[#1124AA] h-20 text-white w-wk flex flex-col justify-center">
            <div class="flex">
            <RollbackOutlined
          className="BackButton flex justify-start "
          style={{color:"white"}}
          onClick={() => history.back()}
        /> 
          <div class="text-lg text-white font-semibold"> Shipping Information</div> 
          </div>
          <div className="text-white font-normal">QuotationId : {props.invencartItem.orderPhoneId}</div>
              </div>
                     
               <div class="flex justify-center items-center mt-4">
                    <div class="w-[70%] bg-white shadow-2xl rounded-lg border p-8 h-[79vh]"   >
                  
                        <InventoryDeliveryInfoForm 
                         invencartItem={props.invencartItem}
                         fetchingInventoryCartItems={props.fetchingInventoryCartItems}
                        />
                    </div>
                    </div>   
                    </div> 
            </>
        )
}

const mapStateToProps = ({ inventory, auth }) => ({
    invencartItem: inventory.invencartItem,
    userId: auth.userDetails.userId,
    fetchingInventoryCartItems:inventory.fetchingInventoryCartItems,
  });
  
  const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
       {
        getInventoryCartItems,
            
       },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps) (InventoryDeliveryInfo);
