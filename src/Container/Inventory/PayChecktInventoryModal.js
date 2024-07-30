import React, { lazy, Suspense } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import InventoryCheckout from "./InventoryCheckout";
import { BundleLoader } from "../../Components/Placeholder";
import { StyledModal } from "../../Components/UI/Antd";
import "./Inventory.scss";
import PayChecktInventoryForm from "./PayChecktInventoryForm";

const PayChecktInventoryModal  = (props) => {
  const { ...formProps } = props;
  

  return (
    <>
      <StyledModal
        title="Check pay"
        //  width="40%"
        className="modal"
        visible={props.modalVisible}
        maskClosable={false}
        destroyOnClose
        onCancel={props.closeModal}
        maskStyle={{ backgroundColor: "rgba(1, 30, 71,0.7)" }}
        style={{ top: 40 }}
        footer={null}
      >
        <Suspense fallback={<BundleLoader />}>
        <PayChecktInventoryForm
invencartItem={props.invencartItem}
closeModal={props.closeModal}
        />
        </Suspense>
      </StyledModal>
    </>
  );
};
const mapStateToProps = ({ customer, auth }) => ({
  // cart: customer.cart,
  // contactId: customer.productInfo.contactId,
  // shopName: customer.shopName,
  // deliveryInfo: customer.deliveryInfo,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PayChecktInventoryModal )
);
