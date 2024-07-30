import React, { Component } from "react";
import { connect } from "react-redux";
import { MultiAvatar } from "../../../../../Components/UI/Elements";
import { bindActionCreators } from "redux";
import { ActionHeader } from "../../../../../Components/Utils";
import FWLogo from "../../../../../Assets/Images/logo-shopper.PNG";
import Item from "antd/lib/list/Item";
import PaymentMainHeaderCenter from "./PaymentMainHeaderCenter";
import PaymentMainHeaderRight from "./PaymentMainHeaderRight";
import "../../../Header/MainHeader.scss";
class PaymentMainHeader extends Component {
  render() {
    return (
      <>
        <ActionHeader
          hideInMobile={true}
          fontWeight={"bold"}
          leftComponent={<img src={FWLogo} alt="img" class=" w-48"/>}
          centerComponent={<PaymentMainHeaderCenter />}
          rightComponent={<PaymentMainHeaderRight />}
        />
      </>
    );
  }
}

const mapStateToProps = ({ customer, auth }) => ({
  shopName: customer.shopName,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PaymentMainHeader);
