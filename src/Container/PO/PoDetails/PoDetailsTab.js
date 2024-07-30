import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StyledTabs } from "../../../Components/UI/Antd";
import { TabsWrapper } from "../../../Components/UI/Layout";

import StagesView from "../../PO/PoDetails/StagesView"

const TabPane = StyledTabs.TabPane;

class PoDetailsTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeKey: "1",
            breadCumb: false,
            value: 1,
        };
    }

    onChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    };

    handleTabChange = (key) => this.setState({ activeKey: key });

    render() {
        const { activeKey } = this.state;

        console.log("po1", this.props.poDetails)

        return (
            <>
                <TabsWrapper>
                    <StyledTabs defaultActiveKey="1" onChange={this.handleTabChange}>
                        <TabPane
                            tab={
                                <>
                                    <span>
                                        <i className="fa fa-sticky-note" aria-hidden="true"></i>
                                        <span style={{ marginLeft: "0.25em" }}>Materials</span>
                                    </span>
                                </>
                            }
                            key="1"
                        >
                            <Suspense fallback={"Loading ..."}>
                                {" "}
                                <StagesView
                                    poStageDetails={this.props.poStageDetails}
                                    poDetails={this.props.poDetails}
                                    quotationSupplierSuppliesId={this.props.quotationSupplierSuppliesId}
                                />
                                {/* <ProjectOrderTable projectDetailsId={this.props.plant.projectDetailsId} /> */}
                            </Suspense>
                        </TabPane>
                        <TabPane
                            tab={
                                <>
                                    <span>
                                        <i className="fa fa-sticky-note" aria-hidden="true"></i>
                                        <span style={{ marginLeft: "0.25em" }}>Services</span>
                                    </span>
                                </>
                            }
                            key="2"
                        >
                            <Suspense fallback={"Loading ..."}>
                                {" "}
                                track
                                {/* <ProjectOrderTable projectDetailsId={this.props.plant.projectDetailsId} /> */}
                            </Suspense>
                        </TabPane>
                    </StyledTabs>
                </TabsWrapper>
            </>
        );
    }
}
const mapStateToProps = ({ plant, auth }) => ({

});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(PoDetailsTab);
