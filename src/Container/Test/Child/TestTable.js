import React, { useEffect, useState, useMemo, lazy } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { bindActionCreators } from "redux";

import styled from 'styled-components';


import moment from "moment";


import { StyledTable } from "../../../Components/UI/Antd";
import { Tooltip,  Button, Input, Select } from "antd";

import { MultiAvatar, MultiAvatar1, MultiAvatar2, SubTitle } from "../../../Components/UI/Elements";



function TestTable(props) {
 


  
  
  const columns = [
  
    {
      title:"TestName",
      width: "15%",
    },

    {
        title:"CourseName",
        width: "15%",
      },

      {
        title:"Score",
        width: "15%",
      },


      {
        title:"Date",
        width: "15%",
      },
  
  
  

   


  ];
 
  const tab = document.querySelector(".ant-layout-sider-children");
  const tableHeight = tab && tab.offsetHeight * 0.75;
  return (
    <>
  
         {/* <InfiniteScroll
                dataLength={props.customerByUserId.length}
                next={handleLoadMore}
                hasMore={true}
                // loader={<h4 style={{ textAlign: 'center' }}>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
                height={600}
            > */}
      <StyledTable
        // rowKey="accountId"
        // rowSelection={rowSelection}
        // rowKey={(record) => record.customerId}
        columns={columns}
        // dataSource={customerByUserId}
        // loading={fetchingCustomers || fetchingCustomersError || fetchingAllCustomers}
        // scroll={{ y: 500 }}
        // pagination={false
        //scroll={{ y: tableHeight }}

        pagination={false}
      // defaultPageSize: 15,
      // showSizeChanger: true,
      // pageSizeOptions: ["15", "25", "40", "50"],

      />
     
       

   
    </>
  );
}
// }
const mapStateToProps = ({ auth, customer, sector, opportunity,employee }) => ({

});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
    
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(TestTable);
