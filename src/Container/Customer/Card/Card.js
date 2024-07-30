import React, { useEffect,useState } from "react";
import "../Customer.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { DownOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { FlexContainer } from "../../../Components/UI/Elements";
import {getCartItems} from "../CustomerAction";
import SingleCard from "./SingleCard";
import { Scrollbars } from "react-custom-scrollbars-2";

function Card(props) {

  const [qn, setqn] = useState({});

  useEffect(() => {
    if (qn.quantity) {
      // handleBackInc();
    }
  }, [qn.quantity]);

  function handleInc(data) {
    setqn({ ...data, quantity: data.quantity + 1 });
  }
  function handleDec(data) {
    setqn({ ...data, quantity: data.quantity - 1 });
  }

  useEffect(()=>{
    const cartId = sessionStorage.getItem("cartId");
    props.getCartItems(cartId);
  },[]);

  return (
    <section className="main-cart-section">
       <div class="text-lg text-black font-bold">Shopping Cart</div>
        <p className="total-items">
          You have <span className="total-items-count">3</span> items in shopping
          cart
        </p>
        <div className="cart-items">
        <Scrollbars style={{ width: 1060, height: 262 }}  renderThumbVertical={({style, ...props}) =>
        <div {...props} style={{...style, backgroundColor: 'orange'}}/>
    }
   >
            <div className="cart-items-container">
              
                 <SingleCard 
                  handleDec={handleDec}
                  handleInc={handleInc}
                  setqn={setqn}
                  qn={qn}
                  />
                
            </div>
            </Scrollbars>
        </div>
        <div style={{ textAlign: "right" }}>
          <Link to={`/shopName/cart`}>
            <Button type="primary"><label class="text-white cursor-pointer">Next</label></Button>
          </Link>
        </div>
      </section>
  );
}

const mapStateToProps = ({ customer, auth }) => ({
  cart: customer.cart,
  // contactId: customer.productInfo.contactId,

});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getCartItems,
      // updateCart,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Card);
