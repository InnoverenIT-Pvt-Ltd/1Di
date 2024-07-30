import React, { Component, Suspense, lazy } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StyledDrawer } from "../../../Components/UI/Antd";
import { BundleLoader } from "../../../Components/Placeholder";
const UploadInventoryDrawerForm =lazy(()=>import("./UploadInventoryDrawerForm"));

class UploadInventoryDrawer extends Component {
    render() {
        const { uploadInvodrwr, handleUploadInventoryDrawer } = this.props;
        return (
            <div>
                <StyledDrawer
                    title="Upload Inventory"
                    width="60%"
                    visible={uploadInvodrwr}
                    destroyOnClose
                    maskClosable={false}
                    maskStyle={{ backgroundColor: "rgba(1, 30, 71,0.7)" }}
                    style={{ marginTop: "3rem" }}
                    onClose={() => handleUploadInventoryDrawer(false)}
                    footer={null}
                >
                    <Suspense fallback={<BundleLoader />}>
                        <UploadInventoryDrawerForm />
                    </Suspense>
                </StyledDrawer>
            </div>
        );
    }
}

const mapStateToProps = ({ auth }) => ({});
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(UploadInventoryDrawer);
