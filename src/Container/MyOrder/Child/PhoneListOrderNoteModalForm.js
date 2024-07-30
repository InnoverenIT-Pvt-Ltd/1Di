import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Timeline } from "antd";
import { BorderBox } from "../../../Components/UI/Layout";
import { BundleLoader } from "../../../Components/Placeholder";
import PhoneListOrderNoteModalFile from "./PhoneListOrderNoteModalFile";
import PhoneListOrderSingleNote from "./PhoneListOrderSingleNote";
import {getNotesInOrder}  from "../MyOrderAction";

class PhoneListOrderNoteModalForm extends Component {
    componentDidMount() {
        this.props.getNotesInOrder(this.props.RowData.phoneId);
    }

    render() {
        const { fetchingNotesInOrders, notesInOrders } = this.props;

        return (
            <>
                <div style={{ backgroundColor: "#dcdcdc", height: "230px" }}>
                    <PhoneListOrderNoteModalFile
                        type={"phoneorder"}
                        phoneId={this.props.RowData.phoneId}
                        callback={() =>
                            this.props.getNotesInOrder(this.props.RowData.phoneId)
                        }
                    />
                </div>
                <br />

                <BorderBox>
                    <div style={{ height: 200, overflow: "auto", padding: "0.3rem" }}>
                        {fetchingNotesInOrders ? (
                            <BundleLoader />
                        ) : (
                            <Timeline>
                                {notesInOrders &&
                                    notesInOrders.map((item, index) => (
                                        <Timeline.Item
                                            key={index}
                                            style={{ paddingBottom: "10px" }}
                                        >
                                            <PhoneListOrderSingleNote {...item} RowData={this.props.RowData} />
                                        </Timeline.Item>
                                    ))}
                            </Timeline>
                        )}
                    </div>
                </BorderBox>
            </>
        );
    }
}

const mapStateToProps = ({ auth, myorder }) => ({
    userId: auth.userDetails.userId,
    notesInOrders: myorder.notesInOrders,
    fetchingNotesInOrders: myorder.fetchingNotesInOrders,

});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            getNotesInOrder,
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PhoneListOrderNoteModalForm);
