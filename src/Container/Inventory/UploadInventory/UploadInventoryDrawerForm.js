import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button } from "antd";
import { Formik, Form, Field, } from "formik";
import { uploadInventoryDoc } from "../InventoryAction"
import DraggableUpload1 from "../../../Components/Forms/Formik/DraggableUpload1";


function UploadInventoryDrawerForm(props) {

    return (
        <>
            <Formik
                initialValues={{
                    excelId: "",
                    userId: props.userId,
                    orgId:props.orgId,
                    locationDetailsId:props.locationId
                }}
                onSubmit={(values, { resetForm }) => {
                    console.log(values)
                    props.uploadInventoryDoc(

                        {
                            ...values,
                        },
                    );

                }}
            >
                {({
                    errors,
                    touched,
                    isSubmitting,
                    setFieldValue,
                    setFieldTouched,
                    values,
                    ...rest
                }) => (
                    <div class="overflow-y-auto h-[32rem] overflow-x-hidden max-sm:h-[30rem]">
                        <Form class="form-background">
                        <div class="flex justify-between">
                                <div class="h-full w-full mt-4">
                                    <Field
                                        name="excelId"
                                        isRequired
                                        component={DraggableUpload1}
                                    />
                                </div>

                            </div>
                            <div class="flex justify-between mt-4">
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    loading={props.uploadingInventoryDocs}
                                >
                                    Upload
                                </Button>
                            </div>
                        </Form>
                    </div>
                )}
            </Formik>
        </>
    );
}
const mapStateToProps = ({ auth,inventory  }) => ({
    userId: auth.userDetails.userId,
    locationId: auth.userDetails.locationId,
    orgId: auth.userDetails.organizationId,
    uploadingInventoryDocs:inventory.uploadingInventoryDocs
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            uploadInventoryDoc
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UploadInventoryDrawerForm);

