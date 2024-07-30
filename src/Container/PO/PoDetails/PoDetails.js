import React, { useEffect } from 'react'
import PoDetailsHeader from './PoDetailsHeader'
import { getPoListDetails, getPoStageDetails, getPoDetailsList } from "../PoAction"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PoDetailsTab from "./PoDetailsTab"

const PoDetails = (props) => {

    useEffect(() => {
        props.getPoListDetails(props.match.params.quotationSupplierSuppliesId);
        props.getPoDetailsList(props.match.params.quotationSupplierSuppliesId);
        props.getPoStageDetails()
    }, [])
    console.log("po", props.poDetails)
    return (
        <div>
            <PoDetailsHeader poDetailsList={props.poDetailsList} />
            <PoDetailsTab
                poStageDetails={props.poStageDetails}
                poDetails={props.poDetails}
                quotationSupplierSuppliesId={props.match.params.quotationSupplierSuppliesId}
            />
        </div>
    )
}

const mapStateToProps = ({ po }) => ({
    poDetails: po.poDetails,
    poStageDetails: po.poStageDetails,
    poDetailsList: po.poDetailsList
    // fetchingPoList: po.fetchingPoList,
    // showTrackingOrderItem: po.showTrackingOrderItem
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            getPoListDetails,
            getPoStageDetails,
            getPoDetailsList

        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(PoDetails);


