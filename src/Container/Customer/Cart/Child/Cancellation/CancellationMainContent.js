import React, { Component } from 'react'
import { FlexContainer, MainWrapper } from '../../../../../Components/UI/Layout'
import CancellationMainContentForm from './CancellationMainContentForm'

class CancellationMainContent extends Component {
    render() {
        return (
            <>
                <FlexContainer justifyContent="center">
                    <MainWrapper style={{
                        background: "#FFFFFF",
                        boxShadow: "4px 4px 4px rgba(163, 171, 185, 0.5)",
                        borderRadius: "20px",
                        width: "35%",
                        border: "none"
                    }}>
                        <CancellationMainContentForm/>
                    </MainWrapper>
                    
                </FlexContainer>
            </>
        )
    }
}
export default CancellationMainContent