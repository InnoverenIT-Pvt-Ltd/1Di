import React, { lazy, Suspense } from "react";
import { FormattedMessage } from "react-intl";
import { BundleLoader } from "../../Components/Placeholder";
import { StyledDrawer } from "../../Components/UI/Antd";
import TaskHourForm from "./TaskHourForm";

function TaskNameDrawerModal(props){
  

    return (
        <>
        <StyledDrawer
          title={`${props.rowDataPass.taskName}`}
          width="64%"
          style={{marginTop:"5rem"}}
          visible={props.clickTaskDrawerModal}
          maskClosable={false}
          destroyOnClose
          maskStyle={{ backgroundColor: "rgba(1, 30, 71,0.7)" }}
          onClose={() => props.handleTaskDrawerModal(false)}
          footer={null}
        >
<Suspense fallback={<BundleLoader />}> 
<TaskHourForm rowDataPass={props.rowDataPass}/>
</Suspense>
        </StyledDrawer>
        </>
    )
}

export default TaskNameDrawerModal