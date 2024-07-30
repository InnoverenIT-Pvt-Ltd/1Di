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
            <RollbackOutlined
          className="BackButton flex justify-start "
          style={{}}
          onClick={() => history.back()}
        />
                <FlexContainer style={{justifyContent: "center"}}>
                <div class="text-lg text-black font-bold"> Shipping Information</div> 
                <h2>QuotationId : {props.invencartItem.orderPhoneId}</h2>
                </FlexContainer>
                <FlexContainer 
                style={{justifyContent: "center"}}
                // marginTop="-44px"
                >
                    <MainWrapper 
                        background= "#FFFFFF"
                        boxShadow= "4px 4px 4px rgba(163, 171, 185, 0.5)"
                        borderRadius= "20px"
                        width= "65%"
                        border="none"
                    >
                
                        <InventoryDeliveryInfoForm 
                         invencartItem={props.invencartItem}
                         fetchingInventoryCartItems={props.fetchingInventoryCartItems}
                        />
                    </MainWrapper>
                    
                </FlexContainer>
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
