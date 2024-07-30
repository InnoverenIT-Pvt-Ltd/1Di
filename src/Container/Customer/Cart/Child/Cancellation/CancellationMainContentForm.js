import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import CustomerContentHeaderActionLeft from "../../../Header/CustomerContentHeaderActionLeft";
import { Radio, Input, Space, Button } from "antd";
import {
  FlexContainer,
  MainWrapper,
} from "../../../../../Components/UI/Elements";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {getCancelOrder} from "../../../CustomerAction";

class CancellationMainContentForm extends React.Component {
  state = {
    value: "",
    currentOrderId:"",
    trackingOrderData:[]
  };

  componentDidMount() {
   this.setState({currentOrderId:this.props.match.params.orderId});
    
  }

  handleCancelOrder = () => {
  
    this.props.getCancelOrder(this.state.currentOrderId,{orderId:this.state.currentOrderId,reason:this.state.value});
  }
    
  onChange = (e) => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    console.log(this.state.currentOrderId);
    const { value } = this.state;
    return (
      <>
        <CustomerContentHeaderActionLeft />
        <MainWrapper
          
            background= "#FFFFFF"
            boxShadow= "4px 4px 4px rgba(163, 171, 185, 0.5)"
            borderRadius= "20px"
            width= "70%"
            marginLeft= "173px"
            border= "none"
            marginTop= "33px"
        
        >
          <FlexContainer>
            <h1>
              Order
              <br />
              <h3>items</h3>
            </h1>

            <FlexContainer justifyContent="flex-end">
              <div>
                <h4>$350</h4>

                <br />
                <h4>Today, 11:11am</h4>
              </div>
            </FlexContainer>
          </FlexContainer>
          <hr />
          <br />
          <h1 style={{ color: " rgba(0, 0, 0, 0.5)" }}>
            {" "}
            Reason for cancellation
          </h1>
          <Radio.Group onChange={this.onChange} value={value}>
            <Space direction="vertical">
              <Radio value={"I order it by mistake"}>I order it by mistake</Radio>
              <Radio value={"I want to change my delivery address"}>I want to change my delivery address</Radio>
              <Radio value={"Price for the product has decreased"}>Price for the product has decreased</Radio>
              <Radio value={"I have changed my mind"}>I have changed my mind</Radio>
              <Radio value={"Others"}>Others</Radio>

              <Link to="/shopName/ordercancelltemplate">
                <Button className="cnclOrder"
                // Loading={cancelingOrder}
                onClick={this.handleCancelOrder}
                >Cancel Order</Button>
              </Link>
            </Space>
          </Radio.Group>
          <br />
          {/* <hr /> */}
          {/* <h1>Your Details</h1>
          <br />
          <h4>Name:</h4>

          <br />
          <h4>Mobile:</h4>
          <br />
          <h4>Address:</h4>
          <br />
          <h4>City:</h4>
          <br />
          <h4>Pin Code:</h4>
          <br />
          <h4>Payment:</h4> */}
        </MainWrapper>
      </>
    );
  }
}
const mapStateToProps = ({ customer }) => ({
  fetchingCancelOrder:customer.fetchingCancelOrder,
  orderId: customer.trackingOrderData.orderId,
  trackingOrderData:customer.trackingOrderData
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getCancelOrder,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CancellationMainContentForm);

