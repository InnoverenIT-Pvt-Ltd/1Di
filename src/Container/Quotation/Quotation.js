import React, { useEffect, useState, useMemo, lazy } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Tooltip, Icon, Button, Input, Popconfirm, Modal,Badge } from "antd";
import styled from 'styled-components';

const ProcureQuotationCard = lazy(()=>import("./ProcureQuotationCard"))

function Quotation (props) {

   
      return (
        <>
         

         
<ProcureQuotationCard/>
        </>
    );
};

const mapStateToProps = ({ myorder, auth, setting, requirement }) => ({
    
});
const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
          
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Quotation);

