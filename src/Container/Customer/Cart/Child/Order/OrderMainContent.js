import { Button } from 'antd'
import React, { Component } from 'react'
import { FlexContainer, MainWrapper } from '../../../../../Components/UI/Layout'
import OrderMainContentDetails from './OrderMainContentDetails';
import MainHeader from "../../../Header/MainHeader";

class OrderMainContent extends Component {
    render() {
        return (
            <>
               <MainHeader/>
                <FlexContainer justifyContent="center">
                    <MainWrapper style={{
                        background: "#FFFFFF",
                        boxShadow: "4px 4px 4px rgba(163, 171, 185, 0.5)",
                        borderRadius: "20px",
                        width: "65%",
                        border:"none"
                    }}>
                     <OrderMainContentDetails/>
                    </MainWrapper>
                </FlexContainer>
            </>
        )
    }
}
export default OrderMainContent;
