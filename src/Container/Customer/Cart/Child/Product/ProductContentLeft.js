import { Button } from 'antd';
import React, { Component } from 'react';
import Apple from "../../../../../Assets/Images/apple.jpg";
import Guava from "../../../../../Assets/Images/guava.jpg";
import Orange from "../../../../../Assets/Images/orange.jpg";
import Banana from "../../../../../Assets/Images/banana.jpg";

import { FlexContainer } from '../../../../../Components/UI/Elements';

class ProductContentLeft extends Component {
    render() {
        return (
            <>
                <div style={{ color: "#3066BE" }}>Mangoes</div>
                <FlexContainer>
                    <img
                        src={Apple}
                        alt="aa"
                        style={{ height: "70px", width: "50px", borderRadius: "20px" }}
                    />
                    &nbsp;
                    <span>Alphonso Mango <br />
                        Per dozen<br /> $350
                    </span>
                    <FlexContainer justifyContent="flex-end">
                        <Button style={{ background: "#F18F01", borderRadius: " 10px", color: "white" }}> Add +</Button>
                    </FlexContainer>
                </FlexContainer>

                <br />
                <br />
                <div style={{ color: "#3066BE" }}>Fruits</div>
                <FlexContainer>
                    <img
                        src={Guava}
                        alt="guava"
                        style={{ height: "70px", width: "50px", borderRadius: "20px" }}
                    />
                    &nbsp;
                    <span>Regular Peas <br />
                        Per kg<br /> $350
                    </span>
                    <FlexContainer justifyContent="flex-end">
                        <Button style={{ background: "#F18F01", borderRadius: " 10px", color: "white" }}> Add +</Button>
                    </FlexContainer>
                </FlexContainer>
                <br />
                <FlexContainer>
                    <img
                        src={Orange}
                        alt="orange"
                        style={{ height: "70px", width: "50px", borderRadius: "20px", color: "white" }}
                    />
                    &nbsp;
                    <span>Cherries <br />
                        Per kg<br /> $700
                    </span>
                    <FlexContainer justifyContent="flex-end">
                        <Button style={{ background: "#F18F01", borderRadius: " 10px", color: "white" }}> Add +
                        </Button>
                    </FlexContainer>
                </FlexContainer>
                <br />
                <FlexContainer>
                    <img
                        src={Banana}
                        alt="banana"
                        style={{ height: "70px", width: "50px", borderRadius: "20px", color: "white" }}
                    />
                    &nbsp;
                    <span>Watermelon <br />
                        Per kg<br /> $70
                    </span>
                    <FlexContainer justifyContent="flex-end">
                        <Button style={{ background: "#F18F01", borderRadius: " 10px", color: "white" }}> Add +</Button>
                    </FlexContainer>
                </FlexContainer>
            </>
        )
    }
}
export default ProductContentLeft;