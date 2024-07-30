import React, {useEffect} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StyledTable } from "../../../../../Components/UI/Antd";
// import APIFailed from "../../../../../Helpers/ErrorBoundary/APIFailed";

// import {
//   getOrderStatus,
// } from "../../../CustomerAction";

function TrackTable(props) {
  // useEffect(() => {
  //   props. getOrderStatus(props.orderId);
  // }, []);

  //   const [particularRowData, setParticularRowData] = useState({});
  //   const [type, setType] = useState("");
  //   const [showHis, setshowHis] = useState(false);

  const columns = [
    // {
    //   title: "",
    //   width: "2%",
    // },
    {
      title: "OrderId",
      // width: "8%",
      dataIndex: "orderId",
    },
    {
      title: "Status",
      // width: "10%",
      dataIndex:"status",
    },
    {
        title: "Date",
        // width: "12%",
        dataIndex: "date",
      },
    
  ];
    // if (props.fetchingOrderListByOrderIdError) {
    //   return <APIFailed />
    // }

  return (
    <>
      <StyledTable
          rowKey=""
        columns={columns}
          dataSource={
            // props.orderList||
            props.trackedOrder
          }
          // loading={
          //   props.fetchingTrackedOrderList||
          //   props.fetchingTrackedOrderListError
          // }
        scroll={{ y: 320 }}
        pagination={false}
          rowSelection={props.rowSelection}
      />
    </>
  );
}

const mapStateToProps = ({ customer }) => ({
    trackedOrder:customer.trackedOrder,
  fetchingTrackedOrderList:customer.fetchingTrackedOrderList,
  fetchingTrackedOrderListError:customer.fetchingTrackedOrderListError,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
        // getOrderStatus
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(TrackTable);
