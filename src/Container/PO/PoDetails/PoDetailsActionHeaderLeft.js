import React from "react";
import { withRouter } from "react-router";
import { FlexContainer } from "../../../Components/UI/Layout";
import { Tooltip } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { RollbackOutlined } from "@ant-design/icons";

function PoDEtailsActionHeaderleft(props) {
    return (
        <>
            <FlexContainer alignItems="center">
                <Tooltip title="Back">
                    <RollbackOutlined
                        style={{ color: "#1890ff", fontSize: "20px" }}
                        onClick={() => props.history.goBack()}
                    />
                </Tooltip>
                &nbsp;
                <div>
                    <b>{props.poDetailsList.length && props.poDetailsList[0].poNumber}/</b>
                    <b>{props.poDetailsList.length && props.poDetailsList[0].supplierName}</b>
                </div>

            </FlexContainer>

        </>
    );
}

const mapStateToProps = ({ }) => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(PoDEtailsActionHeaderleft)
);
