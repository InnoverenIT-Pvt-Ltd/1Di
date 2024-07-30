import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { MultiAvatar } from "../../../Components/UI/Elements";
import image from "../../../Assests/Images/mango.jpg";
import {
  DeleteOutlined,
  MinusOutlined,
  PlusOutlined
} from '@ant-design/icons';

import "../Customer.scss";


 function SingleCard(props){
    return(
        <div className="items-info">
        <div className=" sm:h-28 w-28 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <div   className=" h-32 w-32 -mt-5 -ml-2 object-cover object-center">
        <img 
 src={image} 
       alt="images" 
style={{ height: "10em", width: "10em", borderRadius: "20px" }}
       
        /> 
                           {/* <MultiAvatar
                     imageId={props.item.productInfo.imageUrl ? props.item.productInfo.imageUrl : ""}
                     imgHeight={100}
                      imgWidth={100}
                       /> */}

</div>
      </div>
       
        <div className="title">
          <h2>Mango</h2>
          <div className="">
        <h3>
        Color-Yellow
        </h3>
      </div>
      <div className="">
        <h3>
        Size-S
        </h3>
      </div>
        </div>
        <div className="price">
        <h3>
         EUR 220
        </h3>
      </div>
      <div className="price2">
        <h3>
        EUR 200
        </h3>
      </div>
        <div className="add-minus-quantity">
          <span
          //  onClick={()=>{
          //      props.setqn(props.item)
          //      props.handleDec(props.item)
          //  }}
          >
        <MinusOutlined />
          </span>
        
          <input type="text" placeholder="1" />
         
          <span
        //    onClick={()=>{
        //     props.setqn(props.item)
        //  props.handleInc(props.item)}}
          >
          <PlusOutlined />
          </span>

        </div>
        <div className="subPrice">
          <h3>
          EUR 8500  {/* {props.item.productInfo.price} {props.shopName.currencyName} */}
          </h3>

        </div>
       
        <div className="remove-item">
        <span
          onClick={() => {
            // props.setqn(props.item)
            // props.handlebackdelete(props.item)
          }}
        >
  <DeleteOutlined />
        </span>
        <hr />
        </div>
      </div>
    )
}
const mapStateToProps = ({ customer, auth }) => ({
  cart: customer.cart,
  shopName: customer.shopName,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SingleCard);