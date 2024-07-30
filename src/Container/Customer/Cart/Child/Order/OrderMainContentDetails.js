import { Button } from 'antd';
import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import {cancelOrder} from "../../../CustomerAction"
//import Orange from "../../../../../Assets/Images/orange.jpg";
import { Link } from "react-router-dom";
import {withRouter} from "react-router";
import { addTrackOrder } from "../../../CustomerAction";

// import Guava from "../../../../../Assets/Images/guava.jpg";


import { FlexContainer, MainWrapper, Spacer } from '../../../../../Components/UI/Elements';

import styled from 'styled-components';
import MainHeader from '../../../Header/MainHeader';


class OrderMainContentDetails extends React.Component {
    state = {
       
        trackcurrentOrderId:"",
        
      };
    

    componentDidMount() {
      
        this.setState({trackcurrentOrderId:this.props.match.params.orderId});
         
       }

    render() {
        console.log(this.props.trackingOrderData.length && this.props.trackingOrderData[0].name)        
        // {this.props.trackingOrderData.map((item) => {
        return (
            <>
            <MainHeader />
             {/* {this.props.trackingOrderData.map((item) => { */}
            
                <FlexContainer justifyContent="center">
                <MainWrapper style={{
                        background:"#FFFFFF",
                        boxShadow:"4px 4px 4px rgba(163, 171, 185, 0.5)",
                        borderRadius: "20px",
                        width: "65%",
                        border:"none",
                        marginLeft:"0.5%"
       }}
       >
         <FlexContainer>
                    <Spacer marginTop="10px"/>
                    {/* <span >
                        <i class="fas fa-clipboard-list"></i>
                    </span> */}
                    &nbsp;
                    <div> 
                     <h2>Order #-ORDR0313079677142022{this.props.trackingOrderData.orderId}</h2> 
                    {/* <h4>Your order is successful and seller will confirm your order shortly</h4> */}

                        
                        <Link to={`/shopName/ordercancellationmaincontent/${this.props.trackingOrderData.length && this.props.trackingOrderData[0].orderId}`}>
                        <Button 
                        className='cnclordr'
                        >
                            Cancel Order
                        </Button>
                        </Link>
                    </div>

                </FlexContainer>
             {/* })} */}
            
                 <hr /> 
                {/* <div>
                    <br />
                    <i class="fas fa-truck"></i>
                    &nbsp;&nbsp;
                  
                </div> */}
                 {/* <hr />
                 <div>
                     &nbsp;&nbsp;
                     <br />
                     <i class="fas fa-sticky-note"></i>
                     &nbsp;&nbsp;
                   
                </div>
                 <hr /> */}
                <br />
                {/* <div>2 Items</div> */}
                <br />
                {/* <FlexContainer>
                    <img
                        src={Orange}
                        style={{ width: "80px", height: "80px", borderRadius: "20px" }}
                    />
                    <span style={{ marginLeft: "40px" }}>Orange</span>
                </FlexContainer> */}
                {/* <br /> */}
                <FlexContainer>
                <CardWrapper>
{/*               
                {this.props.trackingOrderData && this.props.trackingOrderData.product.map((item) => { 
                     return ( */}
                        <CardElement>
                        {/* <img
                            // src={Guava}
                            style={{ width: "80px", height: "80px", borderRadius: "20px" }}
                        /> */}
                        <img
                                             //   src={Orange} alt=""
                                                style={{ height: "200px", width: "200px", borderRadius: "20px" }}
                                            />
                        {/* <span style={{ marginLeft: "40px" }}>Guava</span> */}
                          <Header>
                            Mango  {/* {item.name}  */}
                              </Header> 
                           {/* <Header>{item.product.categoryName} </Header> */}
                           {/* <Header>ORDR46423333539262</Header>   */}
                        {/* <SubHeader>200-250gm </SubHeader> */}
                       <Price>
                          7845 Eur {/* {item.price} */}
                           </Price>
                       <p></p>
                       {/* <p>
                           {item.attributeName}
                           <br/>
                           {item.categoryName}
                           <br/>
                           {item.quantity}
                           <br/>
                           {item.subAttribute}<br/>
                           {item.subAttributeName}<br/>
                           {item.subCategory}<br/>
                           {item.subCategoryName}<br/>
                           {item.subscriptionInd}<br/>
                           {item.tax}<br/>
                           {item.units}<br/>
                           {item.active}<br/>
                           {item.actualProductPrice}<br/>
                           {item.allowedDiscount}<br/>
                           {item.closingingInventory}<br/>
                           {item.closingingInventory}<br/>
                           {item.consumerMaxMargin}<br/>
                           {item.customerMarginInd}<br/>
                           {item.distributorAllowedDiscount}<br/>
                           {item.distributorAllowedMargin}<br/>
                           {item.distributorMarginInd}<br/>
                           {item.distributorMaxDiscount}<br/>
                           {item.distributorMaxMargin}<br/>
                           {item.distributorOfferInd}<br/>
                           {item.gstIncludeInd}<br/>
                           {item.maxDiscount}<br/>
                           {item.offerInd}<br/>
                           {item.openingInventory}<br/>
                           {item.orderAmount}<br/>
                           {item.orderValue}<br/>
                           {item.pickupStatusInd}<br/>
                           {item.publishInd}<br/>
                       </p> */}
                       
                    </CardElement>
                     {/* )

                     })} */}
                

                </CardWrapper>
                </FlexContainer>
                <hr />
                <p>Item Total</p>
                <Spacer marginTop= "1%" />
                <p> Delivery </p>
                <Spacer marginTop= "1%"  />
                <p> Grand Total</p>
                <hr />
                <Spacer  marginTop="1%"  />
              
                <h2>Your Details</h2>
                <Spacer/>
               
                    <h4>Name:</h4>
                     <Spacer/>
                   <h4>Mobile:</h4> 
                     <Spacer/>
                    <h4>Address:</h4>
                     <Spacer/>
                    <h4>City:</h4>
                     <Spacer/>
                    <h4>Pin Code:</h4>
                     <Spacer/>
                    <h4>Payment:</h4>
                   
                    </MainWrapper>  
           </FlexContainer>   
                
            </>
       
           
        );
        
        // })}
    }

}
const mapStateToProps = ({ customer }) => ({
    trackingOrderData: customer.trackingOrderData,
    product:customer.trackingOrderData.product
  });
  const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
      {
        addTrackOrder,
      },
      dispatch
    );


export default connect(mapStateToProps,mapDispatchToProps)(OrderMainContentDetails);

const CardWrapper = styled.div`
 
 display:flex;
 /* justify-content:space-between; */
 flex-wrap:wrap;
 width:100%

/* margin:0px 20px; */
@media only screen and (max-width: 600px) {
    justify-content:center;
}

`
const CardElement = styled.div`
 /*  */
 width:20%;
 padding:0 20px;
/* margin:0px 20px; */
@media only screen and (max-width: 600px) {
    
}

`

const Header = styled.div`
 text-overflow: ellipsis;

    white-space: nowrap;
    overflow: hidden;
    height:2em;
`

const SubHeader = styled.div`

 height:2em;
`
const Price = styled.div`
 
  height:2em;
  font-weight:700;
  font-family:Poppins;
  font-size:1em;
`