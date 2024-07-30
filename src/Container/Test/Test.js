import React, { Component, Suspense, lazy } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { BundleLoader, GridLoader } from "../../Components/Placeholder";
import TestTable from "../Test/Child/TestTable"
import TestHeader from "../Test/Child/TestHeader"

class  Test extends Component {
  state = { currentData: "",currentUser:"" };
  handleClear = () => {
    this.setState({ currentData: "" });
    this.props.emptyCustomer();
    this.props.getCustomerListByUserId(this.state.currentUser?this.state.currentUser:this.props.userId,0);
  };
  setCurrentData = (value) => {
    this.setState({ currentData: value });
  };

  handleChange = (e) => {
    // console.log(e.target.value)
    // this.setState({ text: e.target.value });
    this.setState({ currentData: e.target.value })
   
  };

  handleDropChange=(value)=>{
    this.setState({ currentUser: value });
    
    // if(value === "all"){
    // this.props.sharePartnerPermission(0);
    // }
    // else{
      this.props.getCustomerPagination(value,0 );
    // }
    console.log("valid",value)
  };

  render() {
   
    return (
      <React.Fragment>
        <TestHeader
           
        />
     
        <Suspense fallback={<BundleLoader />}>
        <TestTable/>
        </Suspense> 
         
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ customer, auth }) => ({
//   userId: auth.userDetails.userId,
//   addCustomerModal: customer.addCustomerModal,
//   viewType: customer.viewType,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
   
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(Test);
