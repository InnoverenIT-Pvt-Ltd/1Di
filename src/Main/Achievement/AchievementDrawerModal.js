import React, { lazy, Suspense } from "react";
import { FormattedMessage } from "react-intl";
import { BundleLoader } from "../../Components/Placeholder";
import { StyledDrawer } from "../../Components/UI/Antd";
import AchivementTable from "./AchivementTable";
import Achievement from "./Achievement";


function AchievementDrawerModal(props) {

  console.log(props.rowDataPass)
  return (
    <>
      <StyledDrawer
        title="Task"
        width="64%"
        style={{ marginTop: "5rem" }}
        visible={props.AchievementModal}
        maskClosable={false}
        destroyOnClose
        maskStyle={{ backgroundColor: "rgba(1, 30, 71,0.7)" }}
        onClose={() => props.handlAchievementDrawerModal(false)}
        footer={null}
      >
        <Suspense fallback={<BundleLoader />}>
          <Achievement

          />
        </Suspense>
      </StyledDrawer>
    </>
  )
}

export default AchievementDrawerModal