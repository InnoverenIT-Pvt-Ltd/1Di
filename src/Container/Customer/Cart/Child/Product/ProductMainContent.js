import React, { Component } from 'react'
import { FlexContainer, MainWrapper } from '../../../../../Components/UI/Layout'
import ProductContentLeft from './ProductContentLeft';
// import ProductContentRight from './ProductContentRight';

class ProductMainContent extends Component {
    render() {
        return (
            <>
                <FlexContainer justifyContent="center">
                    <MainWrapper style={{
                        background: "#FFFFFF",
                        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
                        borderRadius: "10px",
                        height: "3vw",
                        width: "67vw",
                        border: "none"
                    }}>
                        <b style={{ marginLeft: "10px" }}> Mangoes</b>
                        &nbsp; &nbsp; &nbsp;
                        <b> Fruits</b>
                    </MainWrapper>
                </FlexContainer>
                <br />
                <br />
                <FlexContainer justifyContent="center">
                    <MainWrapper style={{
                        background: "#FFFFFF",
                        boxShadow: "4px 4px 4px rgba(163, 171, 185, 0.5)",
                        borderRadius: "20px",
                        width: "45vw",
                        border: "none"
                    }}>
                        <ProductContentLeft />
                    </MainWrapper>
                    <MainWrapper style={{
                        background: "#FFFFFF",
                        boxShadow: "4px 4px 4px rgba(163, 171, 185, 0.5)",
                        borderRadius: "20px",
                        width: "20%",
                        marginLeft: "30px",
                        border: "none"
                    }}>
                        {/* <ProductContentRight /> */}
                        Cart
                    </MainWrapper>
                </FlexContainer>
            </>
        )
    }
}
export default ProductMainContent;
