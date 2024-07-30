import React, {  Suspense,useEffect } from "react";
import { StyledDrawer } from "../../../Components/UI/Antd";
import { BundleLoader } from "../../../Components/Placeholder";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PhoneListOrderNoteModalForm from "./PhoneListOrderNoteModalForm";

const PhoneListOrderNoteModal = (props) => {
    const { rowData,...formProps } = props;
    return (
        <>
            <StyledDrawer
                title={`Notes`}
                width="60%"
                visible={props.phonListNoteModal}
                maskClosable={false}
                destroyOnClose
                style={{marginTop:"3rem"}}
                onClose={() =>  props.handlePhoneListOrderNoteModal(false)}
            
            >
                <Suspense fallback={<BundleLoader />}>
                    <PhoneListOrderNoteModalForm RowData={props.RowData} />
                </Suspense>
            </StyledDrawer>
        </>
    );


}
const mapStateToProps = ({auth, distributor}) => ({

      
});
  const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
      {

      },
      dispatch
    );
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PhoneListOrderNoteModal);

