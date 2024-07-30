import React from 'react'
import { ActionIcon } from "../../../Components/Utils";
import { FlexContainer } from '../../../Components/UI/Layout'

import { CalendarOutlined ,TableOutlined,CreditCardOutlined} from '@ant-design/icons';

// import { FormattedMessage } from "react-intl";
// import PlannerShareForm from "./PlannerShareForm"
const CoursesActionLeft = (props) => {
    return (
        <>
        <FlexContainer alignItems='center'>
            {/* <CalendarOutlined 
            // onClick={() => props.setPlannerViewType("dashboard")}
             style={{
                marginRight: "0.5rem",
              
                fontSize: "1.0625em",
                cursor: "pointer",
              }}
            /> */}
           
        
        
        
             <TableOutlined 
               onClick={() => props.setCoursesViewType("card")}
               style={{
                  marginRight: "0.5rem",
                  
                  fontSize: "1.0625em",
                  cursor: "pointer",
                }}
            /> 


            
<CreditCardOutlined
               onClick={() => props.setCoursesViewType("select")}
               style={{
                  marginRight: "0.5rem",
                  
                  fontSize: "1.0625em",
                  cursor: "pointer",
                }}
            /> 
           
        </FlexContainer>
       
   
    </>
    )
}

export default CoursesActionLeft 