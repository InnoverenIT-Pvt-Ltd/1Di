import React from "react";
import Button from "antd/lib/button";
import styled from "styled-components";
import { FlexContainer } from "../../../Components/UI/Layout";
import { Link } from "react-router-dom";
import cart1 from "../../../Assests/Images/cart1.png";

class CustomerContentActionRight extends React.Component {

  render() {
    return (
      <>
        <ButtonContainerWrapper>
          
            {/* <Button
            type="primary"
            ghost
            // onClick={() => handleSuppliersModal(true)}
            style={{backgroundColor:"white", color: "black", borderColor:"black", borderRadius:"10px"}}
            icon={<i class="fas fa-th-large"></i>}
          >
          &nbsp;
            Categories
          </Button>
          &nbsp; &nbsp; */}
            <Link to="/shopName/customercart">
              <div className="cart-icon">
                <img src={cart1} alt="cart" class="w-8 h-8"/>
                <p>{"1"}</p> 
                &nbsp;
              </div>
            </Link>
            {/* <div className="">
                           <div>My Cart</div>
                           <div>   
                           $47854
                           </div>
                       </div>  */}
    
                {/* 
            {/* <Link to={`/${str}/customercart`}>
          <div className="cart-icon">
          

<img
                                             src={cart1} alt="cart"
                                           
                                           
                                        />
                                  <p>{cartItemCount}</p>
            &nbsp;
            </div>
          </Link> */}
            

             {/* <Link to="/shopName/track">
               <Button className="btnTrack" type="primary">
                 Track Order
             </Button>
             </Link> */}

            {/* <Link to="/login">
              <Button className="btnTrack" type="primary">
                Log In
              </Button>
            </Link>
            &nbsp; &nbsp;
            <Link to="/signup">
              <Button className="btnTrack" type="primary">
                Sign up
              </Button>
            </Link> */}
        </ButtonContainerWrapper>
      </>
    );
  }
}

export default CustomerContentActionRight;
const ButtonContainerWrapper = styled.div`

  display: flex;
  @media only screen and (max-width: 600px) {

  }
`;
