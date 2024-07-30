import React, { lazy, Suspense } from "react";
import { FormattedMessage } from "react-intl";
import { BundleLoader } from "../../../Components/Placeholder";
import { StyledDrawer } from "../../../Components/UI/Antd";
import TaskTable from "./TaskTable";

const AddtaskModal = (props) => {
  const { ...formProps } = props;

  return (
    <>
      <StyledDrawer
         title="Task"
        width="64%"
        style={{marginTop:"5rem"}}
        visible={props.addjobDetailModal}
        maskClosable={false}
        destroyOnClose
        maskStyle={{ backgroundColor: "rgba(1, 30, 71,0.7)" }}
        onClose={() => props.handleAddJobDetailtModal(false)}
        footer={null}
      >
        
        <Suspense fallback={<BundleLoader />}>
       <TaskTable
        rowData={props.rowData}
       />
        </Suspense>
      </StyledDrawer>
    </>
  );
};

export default AddtaskModal;
