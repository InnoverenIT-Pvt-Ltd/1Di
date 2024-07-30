import React, { Component } from 'react'
import { FlexContainer, MainWrapper } from '../../../../../Components/UI/Layout'
import PaymentLeftContent from './PaymentLeftContent'
import PaymentRightContent from './PaymentRightContent'

class PaymentMainContent extends Component {
    render() {
        return (
            <>
                 <FlexContainer style={{justifyContent: "center"}}>
                <h1><b>Checkout</b></h1>
                </FlexContainer>
                <FlexContainer
                style={{justifyContent: "center"}}
                >
                    <MainWrapper 
                        background= "#FFFFFF"
                        boxShadow= "0.25em 0.25em 0.25em rgba(163 171, 185, 0.5)"
                        borderRadius= "1.25em"
                        width= "65%"
                        border= "none"
                    >
                        <PaymentLeftContent />
                    </MainWrapper>
                    <MainWrapper 
                    
                        background= "#FFFFFF"
                        boxShadow= "0.25em 0.25em 0.25em rgba(163, 171, 185, 0.5)"
                        borderRadius= "1.25em"
                        width= "20%"
                        marginLeft= "1.875em"
                        border= "none"
                    >
                        <PaymentRightContent />
                    </MainWrapper>
                </FlexContainer>
            </>
        )
    }
}
export default PaymentMainContent