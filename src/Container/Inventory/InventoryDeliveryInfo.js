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
            <RollbackOutlined
          className="BackButton flex justify-start "
          style={{}}
          onClick={() => history.back()}
        />           
               <div class="flex justify-center items-center">
                    <div class="w-[70%] bg-white shadow-2xl rounded-lg border p-8 h-[85vh]"   >
                    <div class="text-lg text-black font-bold"> Shipping Information</div> 
                    <h2>QuotationId : {props.invencartItem.orderPhoneId}</h2>
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
