import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FlexContainer, MainWrapper } from '../../../../Components/UI/Layout'
import CartMainContentForm from './CartMainContentForm';

class CartMainContent extends Component {
    render() {
    
        return (
            <>
                <FlexContainer style={{justifyContent: "center"}}>
                <div class="text-lg text-black font-bold"> Shipping Information</div>               
             </FlexContainer>
                <FlexContainer 
                style={{justifyContent: "center"}}
                // marginTop="-44px"
                >
                    <MainWrapper 
                        background= "#FFFFFF"
                        boxShadow= "4px 4px 4px rgba(163, 171, 185, 0.5)"
                        borderRadius= "20px"
                        width= "65%"
                        border="none"
                    >            
                        <CartMainContentForm />
                    </MainWrapper>
                    
                </FlexContainer>
            </>
        )
    }
}
const mapStateToProps = ({ customer, auth }) => ({
  });
  
  const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
       {
        //   getCartProductList,
            
       },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps) (CartMainContent);
