import React, {Suspense, lazy, useState,useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { BundleLoader } from "../../Components/Placeholder";
import { Button, Rate, Steps } from 'antd';
import { FormattedMessage } from 'react-intl';
import StatusItemCard from "./StatusItemCard";
import {getProcureStatusItem} from "../MyOrder/MyOrderAction";
import moment from 'moment';

function ProcureStatusShower (props) {

  useEffect(()=>{
    props.getProcureStatusItem(props.rowDatas.orderId);
      },[]);



  return (
    <React.Fragment>
    
    <div class="bg-white">
        <Steps
            direction="vertical"
            current={1}
            items={[
                {
                    title: <FormattedMessage
                        id="app.ordercreated"
                        defaultMessage="Order Created"
                    />,
                    status: <FormattedMessage
                        id="app.progress"
                        defaultMessage="progress"
                    />,
                    description: <>
                 <b> {moment(props.statusItems.creationDate).format("DD-MM-YYYY")} </b>
                    </>
                },
                {
                    title: 'Payment',
                    status: <>
                   
                        </>,
                    description:
                        <>

    {`${props.statusItems.paymentType==="Cod" ? "Cash on Delivery" :props.statusItems.paymentType ? `${props.statusItems.paymentType} |`:""}  ${moment(props.statusItems.paymentDate).format("DD-MM-YYYY")? `${moment(props.statusItems.paymentDate).format("DD-MM-YYYY")}`:""} `}

                        </>
                },
                {
                    title: 'Order Summary',
                    status:  '',
                   // subTitle: <StatusItemCard statusItems={props.statusItems}/>,
                    description: <>
         
                      <StatusItemCard statusItems={props.statusItems} rowDatas={props.rowDatas} />
                    </>
                },

        
            ]}
        />
      
    </div>
       
    </React.Fragment>
  );
}

const mapStateToProps = ({ myorder, auth }) => ({
    statusItems:myorder.statusItems

});
const mapDispatchToProps = (dispatch) => bindActionCreators({
    getProcureStatusItem

}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ProcureStatusShower);
