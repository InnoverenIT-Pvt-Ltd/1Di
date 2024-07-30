import React from 'react'
import { ActionIcon } from "../../../../Components/Utils";
import { FlexContainer } from '../../../../Components/UI/Layout'

import { CalendarOutlined ,TableOutlined} from '@ant-design/icons';

// import { FormattedMessage } from "react-intl";
// import PlannerShareForm from "./PlannerShareForm"
const PlannerActionLeft = (props) => {
    return (
        <>
        <FlexContainer alignItems='center'>
            <CalendarOutlined 
             onClick={() => props.setPlannerViewType("dashboard")}
             style={{
                marginRight: "0.5rem",
                color: props.viewType === "dashboard" && "#1890ff",
                fontSize: "1.0625em",
                cursor: "pointer",
              }}
            />
           
        
        
        
            <TableOutlined 
               onClick={() => props.setPlannerViewType("table")}
               style={{
                  marginRight: "0.5rem",
                  color: props.viewType === "table" && "#1890ff",
                  fontSize: "1.0625em",
                  cursor: "pointer",
                }}
            />
           
        </FlexContainer>
       
   
    </>
    )
}

export default PlannerActionLeft 