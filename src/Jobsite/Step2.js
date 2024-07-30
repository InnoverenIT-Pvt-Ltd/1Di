import React,{useState,useEffect} from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Button, Radio } from 'antd';
import PostJobForm from './PostJobForm';
import { TabsWrapper } from '../Components/UI/Layout';
import DragableUpload from "../Components/Forms/Formik/DragableUpload";
import { FormattedMessage } from 'react-intl';






function Step2(props) {
  
  
 
    return (
        <>
                <div class="flex justify-center mt-8">
              <div class="flex w-2/3 justify-center items-center max-sm:w-wk">        
                    
                    <PostJobForm style={{height:'20rem'}} >
                        <h3 class="max-sm: text-xl md:text-3xl">
                        <FormattedMessage
                      id="app.pht"
                      defaultMessage="pht"
                    /> 
                        </h3>
                        <p>
                            By adding photos, professionals can better assess the situation. Please note that you do not share any personal information here
                            {/* {translatedMenuItems[2]} */}
                        </p>
                        <Radio.Group onChange={props.handleUploadImage} value={props.reqImage} c>
                            <TabsWrapper>
                                <Radio value={"no"} style={{ transform: "rotate(0deg)" }}>
                                <div style={{ transform: "rotate(0deg)" }}>No</div>
                                </Radio>
                            </TabsWrapper>
                            <br/>
                            <TabsWrapper>
                                <Radio value={"yes"} style={{ transform: "rotate(0deg)" }}>
                                <div style={{ transform: "rotate(0deg)" }}>Yes</div>
                                </Radio>
                            </TabsWrapper>
                            <TabsWrapper>
                                <Radio value={"later"} style={{ transform: "rotate(0deg)" }}>
                                <div style={{ transform: "rotate(0deg)" }}>Add photo’s later</div>
                                </Radio>
                            </TabsWrapper>
                            {/* {props.reqImage === "yes" && */}
                            <div style={{ width: "100%" }}>
                            <DragableUpload
                            translatedMenuItems={props.translatedMenuItems}
                          // handleSetImage={props.handleSetImage}
                                style={{ display: "revert" }}
                                
                            />
                            <div class="mt-1">
                      <Button type="primary" 
                      //onClick={handlePostImage}
                      >
                        Upload
                        {/* {translatedMenuItems[3]} */}
                      </Button>
                      </div>
                    
                      <div className="imglry">
                       {/* <ImagesViewGallery images={images} />  */}
                       </div>
                        </div>
                            {/* }                             */}
                        </Radio.Group>
                        </PostJobForm>
                        </div>   
                        </div>
        </>
    )
}
const mapStateToProps = ({homeStepper  }) => ({
   
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
)(Step2);