import React, { lazy, Suspense } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import MyStoreCheckout from "../Child/MyStoreCheckout";
import { BundleLoader } from "../../../Components/Placeholder";
import { StyledModal } from "../../../Components/UI/Antd";
import "../courses.scss";
// const OpportunityForm = lazy(() => import("./OpportunityForm"));

const PaymentModal = (props) => {
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
        visible={props.addStripeModal}
        maskClosable={false}
        destroyOnClose
        onCancel={() => props.handleStripeModal(false)}
        maskStyle={{ backgroundColor: "rgba(1, 30, 71,0.7)" }}
        style={{ top: 40 }}
        footer={null}
      >
        <Suspense fallback={<BundleLoader />}>
          <MyStoreCheckout
            // currency={props.shopName.currencyName}
            total={props.finalSubTotalValue}
            handleStripeModal={props.handleStripeModal}
            //   total={
            //     parseFloat(
            //       Math.round(this.state.grandTotal * 100) / 100
            //     ).toFixed(2) || ""
            //   }
            //   currency={currency}
          />
        </Suspense>
      </StyledModal>
    </>
  );
};
const mapStateToProps = ({ customer, auth }) => ({
//   cart: customer.cart,
//   contactId: customer.productInfo.contactId,
//   shopName: customer.shopName,
//   deliveryInfo: customer.deliveryInfo,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PaymentModal)
);
