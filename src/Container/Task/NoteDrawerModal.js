import React, { lazy, Suspense } from "react";
import { FormattedMessage } from "react-intl";
import { BundleLoader } from "../../Components/Placeholder";
import { StyledDrawer } from "../../Components/UI/Antd";
import TaskHourForm from "./TaskHourForm";
import NoteForm from "./NoteForm";

function NoteDrawerModal(props){
  
console.log(props.rowDataPass)
    return (
        <>
        <StyledDrawer
          title={`${props.rowDataPass.taskName}`}
          width="64%"
          style={{marginTop:"5rem"}}
          visible={props.clickNoteDrawerModal}
          maskClosable={false}
          destroyOnClose
          maskStyle={{ backgroundColor: "rgba(1, 30, 71,0.7)" }}
          onClose={() => props.handleNoteDrawerModal(false)}
          footer={null}
        >
<Suspense fallback={<BundleLoader />}> 
<NoteForm
 rowDataPass={props.rowDataPass}
/>
</Suspense>
        </StyledDrawer>
        </>
    )
}

export default NoteDrawerModal