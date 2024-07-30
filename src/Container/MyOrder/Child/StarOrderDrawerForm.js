import React, { Component } from "react";
import { bindActionCreators } from 'redux'
import { connect } from "react-redux";
// import {getFeedbackOrder}  from "../MyOrderAction";
import { BundleLoader } from "../../../Components/Placeholder";
import { Rate } from "antd";

function StarOrderDrawerForm (props) {

    return (
        <>
        Quality : <Rate/>
        Time: <Rate/>
        </>
    )
}

const mapStateToProps =({})=>({});
const mapDispatchToProps =(dispatch)=> bindActionCreators({},dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(StarOrderDrawerForm);