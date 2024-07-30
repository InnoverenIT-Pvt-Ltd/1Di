import React from 'react'
import { TableOutlined} from '@ant-design/icons';
import { FlexContainer } from '../../Components/UI/Layout';

const AchievementActionLeft = (props) => {
    return (
        <>
        <FlexContainer alignItems='center'>
            <TableOutlined 
               onClick={() => props.setAchievementViewType("table")}
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

export default AchievementActionLeft 