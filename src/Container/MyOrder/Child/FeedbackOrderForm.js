import React, { Component } from "react";
import { bindActionCreators } from 'redux'
import { connect } from "react-redux";
import {Timeline} from "antd";
import {getFeedbackOrder}  from "../MyOrderAction";
import FeebackSingleOrder from "./FeebackSingleOrder";
import { BundleLoader } from "../../../Components/Placeholder";
import OrderNoteFile from "./OrderNoteFile";

class FeedbackOrderForm extends Component {
  componentDidMount() {
   this.props.getFeedbackOrder(this.props.particularRowData.orderId);
  }

  render() {


    return (
      <>
        <div style={{ backgroundColor: "#dcdcdc", height: "14.375em" }}>
          <OrderNoteFile 
            type={"order"}
            orderId={this.props.particularRowData.orderId}
            callback={() =>
              this.props.getFeedbackOrder(this.props.particularRowData.orderId)
            }
          />
        </div>
        <br />

        <div class="border-spacing-2 rounded-md shadow-2xl mb-1 mt-9">
          <div style={{ height: 200, overflow: "auto", padding: "1rem" }}>
            {this.props.fetchingFeedbackOrder ? (
              <BundleLoader />
            ) : (
                <Timeline>
                  {this.props.showFeedbackOrder &&
                    this.props.showFeedbackOrder.map((item, index) => (
                      <Timeline.Item
                        key={index}
                        style={{ paddingBottom: "0.625em" }}
                      >
                        <FeebackSingleOrder {...item}  particularRowData={this.props.particularRowData} />
                      </Timeline.Item>
                    ))}
                </Timeline>
              )}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ myorder,auth }) => ({
    postingFeedback:myorder.postingFeedback,
    userId: auth.userDetails.userId,
    organizationId: auth.userDetails.organizationId,
    showFeedbackOrder:myorder.showFeedbackOrder,
    fetchingFeedbackOrder:myorder.fetchingFeedbackOrder
});
const mapDispatchToProps = (dispatch) =>
bindActionCreators(
  {
    
    getFeedbackOrder
  },
  dispatch,
)
export default connect(mapStateToProps, mapDispatchToProps)(FeedbackOrderForm);