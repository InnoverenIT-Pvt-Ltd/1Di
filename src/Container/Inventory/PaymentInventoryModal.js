import React, { lazy, Suspense } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import InventoryCheckout from "./InventoryCheckout";
import { BundleLoader } from "../../Components/Placeholder";
import { StyledModal } from "../../Components/UI/Antd";
import "./Inventory.scss";

const PaymentInventoryModal = (props) => {
  const { ...formProps } = props;
  // const cartData=props.deliveryInfo.storeCart;
  // const cartSummaryData= cartData && cartData.cartSummary
  // const finalSubTotalValue=cartSummaryData && cartSummaryData.subTotal;
  // const finalgrandTotalValue=cartSummaryData && cartSummaryData.grandTotal;

  return (
    <>
      <StyledModal
        title="Stripe"
        //  width="40%"
        className="modal"
        visible={props.addiNVEStripeModal}
        maskClosable={false}
        destroyOnClose
        onCancel={() => props.handleInventoryStripeModal(false)}
        maskStyle={{ backgroundColor: "rgba(1, 30, 71,0.7)" }}
        style={{ top: 40 }}
        footer={null}
      >
        <Suspense fallback={<BundleLoader />}>
          <InventoryCheckout
            handleInventoryStripeModal={props.handleInventoryStripeModal}
            invencartItem={props.invencartItem}
            //   total={
            //     parseFloat(
            //       Math.round(this.state.grandTotal * 100) / 100
            //     ).toFixed(2) || ""
            //   }
            // total={props.invencartItem.cartSummary && props.invencartItem.cartSummary.grandTotal}
            total={"100"}
              currency={"EUR"}
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
  connect(mapStateToProps, mapDispatchToProps)(PaymentInventoryModal)
);
