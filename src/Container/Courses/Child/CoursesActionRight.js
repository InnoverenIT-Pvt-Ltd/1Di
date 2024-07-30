import React from 'react'
import { ActionIcon } from "../../../Components/Utils";
import { FlexContainer } from '../../../Components/UI/Layout'

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Menu, Icon, Popover, Badge } from "antd";

import { ShoppingCartOutlined ,TableOutlined} from '@ant-design/icons';

// import { FormattedMessage } from "react-intl";
// import PlannerShareForm from "./PlannerShareForm"
const CoursesActionRight = (props) => {
  const cartData = props.productInfo.storeCart;
  const cartItemData = cartData && cartData.cartItems;
  const cartItemCount = cartData && cartData.itemCount;
  const cartSummaryData = cartItemData && cartItemData.cartSummary;
  const cartItems = cartSummaryData && cartSummaryData.itemCount;
    return (
        <>
        <FlexContainer alignItems='center'>
            {/* <CalendarOutlined 
            // onClick={() => props.setPlannerViewType("dashboard")}
             style={{
                marginRight: "0.5rem",
              
                fontSize: "1.0625em",
                cursor: "pointer",
              }}
            /> */}
           
        
           <Badge
                    count={cartItemCount}
                    overflowCount={999}
                  >
        
             <ShoppingCartOutlined 
               onClick={() => props.setCoursesViewType("cart")}
               style={{
                  marginRight: "0.5rem",
                  
                  fontSize: "1.0625em",
                  cursor: "pointer",
                }}
            /> 
            </Badge>
           
        </FlexContainer>
       
   
    </>
    )
}

const mapStateToProps = ({ courses, auth }) => ({
  // shopName: customer.shopName,
  // cart: courses.cart,
  productInfo: courses.productInfo,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesActionRight);

