import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
 import HourForm from "../Child/HourForm"
 import LeavesForm from "../Child/LeavesForm"
import { Icon } from "antd";
import { StyledTabs } from "../../../../Components/UI/Antd";
import { TabsWrapper } from "../../../../Components/UI/Layout";
// import CallForm from "../../Call/Child/CallForm";
// import EventForm from "../../Event/Child/EventForm";
// import TaskForm from "../../Task/Child/TaskForm";
// import LeaveForm from "../../Leave/Child/Tab/LeaveForm";
// import ProjectForm from "../../Project/ProjectForm";
import { CalendarOutlined, PhoneOutlined, ProjectOutlined } from "@ant-design/icons";

const TabPane = StyledTabs.TabPane;

export class PlannerTab extends Component {
  render() {
    const {
      plannerStartDate,
      plannerEndDate,
      plannerStartTime,
      plannerEndTime,
    } = this.props;
    return (
      <>
        <TabsWrapper>
          <StyledTabs
            defaultActiveKey="1"
            style={{ overflow: "visible", width: "53vw", padding: "0.9375em" }}
            animated={false}
          >
            {/* <TabPane
              tab={
                <span>
                  <PhoneOutlined type="phone" />
                  Calls
                </span>
              }
              key="1"
            >
              <Suspense fallback={"Loading ..."}>
                <CallForm
                  startDate={plannerStartDate}
                  endDate={plannerEndDate}
                  startTime={plannerStartTime}
                  endTime={plannerEndTime}
                />
              </Suspense>
            </TabPane> */}

            {/* <TabPane
              tab={
                <span>
                  <CalendarOutlined type="calendar" />
                  Events
                </span>
              }
              key="2"
            >
              <Suspense fallback={"Loading ..."}>
                <EventForm
                  // startDate={plannerStartDate}
                  // endDate={plannerEndDate}
                  startTime={plannerStartTime}
                  endTime={plannerEndTime}
                />
              </Suspense>
            </TabPane> */}
            {/* <TabPane
              tab={
                <span>
                  
                  <i class="fas fa-tasks"></i> &nbsp;
                  Tasks
                </span>
              }
              key="3"
            >
              <Suspense fallback={"Loading ..."}>
                <TaskForm
                startDate={plannerStartDate}
                endDate={plannerEndDate}
                />
              </Suspense>
            </TabPane> */}
            <TabPane
              tab={
                <span>
                  <i class="fas fa-luggage-cart"></i>&nbsp;
                  Hours
                </span>
              }
              key="1"
            >
              <Suspense fallback={"Loading ..."}>
                <HourForm
                startDate={plannerStartDate}
                endDate={plannerEndDate}
                />
              </Suspense>
            </TabPane>

            <TabPane
              tab={
                <span>
                  <i class="fas fa-luggage-cart"></i>&nbsp;
                  Leaves
                </span>
              }
              key="2"
            >
              <Suspense fallback={"Loading ..."}>
                <LeavesForm
                
                />
              </Suspense>
            </TabPane>
          
          </StyledTabs>
        </TabsWrapper>
      </>
    );
  }
}

const mapStateToProps = ({ planner }) => ({
  plannerStartDate: planner.plannerStartDate,
  plannerEndDate: planner.plannerEndDate,
  plannerStartTime: planner.plannerStartTime,
  plannerEndTime: planner.plannerEndTime,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PlannerTab);
