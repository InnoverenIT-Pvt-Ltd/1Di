import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Icon, Tooltip } from "antd";
import { FormattedMessage } from "react-intl";
import { PlusOutlined } from "@ant-design/icons";
import { StyledTabs } from "../../../../Components/UI/Antd";
import { TabsWrapper } from "../../../../Components/UI/Layout";
import { ActionIcon } from "../../../../Components/Utils";
import { File } from "../../../../Components/Utils";
import TopicTable from "./TopicTable";
import CourseTestTable from "./CourseTestTable";

const TabPane = StyledTabs.TabPane;
function handleRefreshPage() {
  window.location.reload();
}
class CoursesDetailTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: "1",
      contactPopover: false,
      partnerPopover: false,
      quotProPopover: false,
      deliveryProPopover: false,
      breadCumb: false,
      visibleModal: false,
      recriutmentdashboard: false,
      currentTabName: "",
      currentTabId: "",
      customField: [],
      ganttChart: false,
      costId: "",
      file: false,
    };
  }
  handleRecriutmentdashboard = () => {
    this.setState({ recriutmentdashboard: true });

    console.log(this.state.breadCumb);
  };

  handleRecruitClick = () => {
    this.setState({ file: true });
  };

 

  componentWillUnmount() {
    this.setState({ breadCumb: false });
  }
 
  render() {
    console.log(this.props.course)
    const { activeKey } = this.state;
    // const {
    //   customer: { customerId, name },
    //   handleDocumentUploadModal,
    //   documentUploadModal,
    //   handleCustomerReactSpeechModal,
    //   addCustomerSpeechModal,
    //   handleCustomerContactModal,
    //   // ComhandleCustomermercialsModal,
    //   addCustomerContactModal,
    //   handleCustomerOpportunityModal,
    //   addCustomerOpportunityModal,
    //   getContactListByCustomerId,
    //   getOpportunityListByCustomerId,
    //   handleTagProfileModal,
    //   addInvoiceModal,
    //   handleInvoiceModal,
    // } = this.props;

    return (
      <>
        <TabsWrapper>
          <StyledTabs defaultActiveKey="1" onChange={this.handleTabChange}>
            
           
           
           

            <TabPane
              tab={
                <>
                
                  <span style={{ marginLeft: "0.25em" }}>
               
                  Topic
                  </span>
                 
                </>
              }
              key="1"
            >
              <Suspense fallback={"Loading ..."}>
                {" "}
                {/* <LinkedDocuments /> */}
                <TopicTable
                course={this.props.course}
                />
              </Suspense>
            </TabPane>

            <TabPane
              tab={
                <>
                
                  <span style={{ marginLeft: "0.25em" }}>
               
                  Test
                  </span>
                 
                </>
              }
              key="2"
            >
              <Suspense fallback={"Loading ..."}>
                {" "}
                {/* <LinkedDocuments /> */}
                <CourseTestTable/>
              </Suspense>
            </TabPane>
           
           
           
          </StyledTabs>
        </TabsWrapper>
      
      </>
    );
  }
}
const mapStateToProps = ({ auth, customer, contact, opportunity }) => ({

});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
    
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CoursesDetailTab);
