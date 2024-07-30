import React, { lazy, Suspense } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { BundleLoader } from "../../Components/Placeholder";
import { StyledDrawer } from "../../Components/UI/Antd";
import "./Inventory.scss";

const SuplrInventoryDrawerForm =lazy(()=>import("./SuplrInventoryDrawerForm"));

const AddSuplrInventoryDrawer = (props) => {
  const { ...formProps } = props;

  return (
    <>
      <StyledDrawer
        title="Add Inventory"
        width="90%"
        visible={props.addSuplrInventoryDrwr}
        maskStyle={{ backgroundColor: "rgba(1, 30, 71,0.7)" }}
        style={{ top: 40 }}
        destroyOnClose
        closable
        onClose={() => props.handleAddSuplrInventory(false)}
        footer={null}
      >
        <Suspense fallback={<BundleLoader />}>
   <SuplrInventoryDrawerForm/> 
        </Suspense>
      </StyledDrawer>
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
  connect(mapStateToProps, mapDispatchToProps)(AddSuplrInventoryDrawer)
);
