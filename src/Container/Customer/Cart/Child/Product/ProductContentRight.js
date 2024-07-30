import React, { Component } from 'react'
import { FlexContainer } from '../../../../../Components/UI/Elements'

class ProductContentRight extends Component {
    render() {
        return (
            <>
                <div style={{fontWeight: "500", fontSize: "25px"}}>Cart</div>
                <FlexContainer justifyContent="center">
                <span style={{fontSize:"180px"}}>
                <i class="fas fa-cart-plus"></i>
                </span>
               
                <span style={{fontWeight: "600", fontSize: "25px"}}>Your Cart is empty</span>
                <span>
                Looks like you haven’t made<br/> <span style={{marginLeft: "30px"}}>your choice yet.</span>
                </span>
                </FlexContainer>
                
            </>
        )
    }
}

export default ProductContentRight;
