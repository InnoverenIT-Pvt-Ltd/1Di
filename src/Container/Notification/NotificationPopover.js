import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Badge, Icon, Tooltip, Popover } from "antd";
// import { StyledPopover } from "../../Components/UI/Antd";
import NotificationTab from "../Notification/NotificationTab";
import {
  BellOutlined
} from '@ant-design/icons';
import { getNotificationsCount } from "../Notification/NotificationAction";

const NotificationPopover = ({ userId,NotificationsCount, getNotificationsCount }) => {
  const [visible, setVisible] = useState(false);

  const handleVisibleChange = (visible) => {
    setVisible(visible);
  };

  useEffect(() => {
    getNotificationsCount(userId);
  }, [getNotificationsCount, userId]);

    return (
      <Tooltip title="Notifications">
         <Popover
        content={
          <div>
            <NotificationTab />
          </div>
        }
        trigger="click"
        placement="bottomRight"
        visible={visible}
        onVisibleChange={handleVisibleChange}
      >
          <Badge
            count={NotificationsCount.notification}
            style={{ fontSize: 8, boxSizing: 8 }}
          >
            <BellOutlined  type="bell" style={{ fontSize: "1.375em" }} />
       </Badge> 
        </Popover>
      </Tooltip>
    );
  
}
const mapStateToProps = ({ auth, notification }) => ({
  userId:auth.userDetails.userId,
  NotificationsCount: notification.NotificationsCount
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getNotificationsCount,
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationPopover);

