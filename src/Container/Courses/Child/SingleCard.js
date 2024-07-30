import React ,{useState,useEffect}from 'react'
import { connect } from 'react-redux'
import "../courses.scss"
import { bindActionCreators } from 'redux'
import { CalendarOutlined ,TableOutlined} from '@ant-design/icons';
import { MultiAvatar } from '../../../Components/UI/Elements'
import { CurrencySymbol } from '../../../Components/Common';
// import {deleteCartData} from "../CustomerAction"


import {
  
  DeleteOutlined,
  MinusOutlined,
  PlusOutlined
  
} from '@ant-design/icons';

function SingleCard(props) {

  const [qn, setqn] = useState({});
  const [open, setOpen] = useState(true)

 
  useEffect(() => {
    if (qn.quantity) {
      // handleBackInc();
    }
  }, [qn.quantity]);

  function handleInc(data) {
    setqn({ ...data, quantity: data.quantity + 1 });
    // handleBackInc();
  }
  function handleDec(data) {
    setqn({ ...data, quantity: data.quantity - 1 });

    // handleBackDec();
  }


  const result=(props.item.itemSummary.subTotal).toFixed(2)
  return (
  
    <div className="items-info">
       <div className=" sm:h-28 w-28 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
      <div   className=" h-32 w-32 -mt-5 -ml-2 object-cover object-center">
        <MultiAvatar
          // imageId={
          //   props.item.productInfo.imageUrl
          //     ? props.item.productInfo.imageUrl
          //     : ''
          // }
          
        />
      </div>
      </div>
      <div className="title">
      <h3>{props.item.productInfo.name}</h3>

     
      {/* <div className="">
     
      <h3 class=" text-xs">
       Size-{props.item.productInfo.productSize} 
        </h3>
       
      </div> */}
      </div>
      <div className="price">
        <h3>
         {props.item.productInfo.price} 
        </h3>
      </div>
      <div className="price2">
     
        <h3>
    {props.item.productInfo.discountedPrice} 
        </h3>
     
      </div>
      {/* <div className="price2">
    
      </div> */}
     
      <div className="add-minus-quantity">
        <span
          onClick={() => {
            props.setqn(props.item)
         props.handleDec(props.item)
          }}
        >
          {/* <i class="fas fa-minus minus"></i> */}

          <MinusOutlined />
        </span>
        <input
          type="text"
          placeholder={
            props.qn.quantity && props.item.cartItemId === props.qn.cartItemId
              ? props.qn.quantity
              : props.item.quantity
          }
        />
      

        <span
          onClick={() => {
            props.setqn(props.item)
            props.handleInc(props.item)
            console.log("clicking")
          }}
        >
          {/* <i class="fas fa-plus add"></i> */}
          <PlusOutlined />
        </span>
      </div>
      <div className="subPrice">
        <h3>
     {result}
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
const mapStateToProps = ({ customer, courses }) => ({
//   cart:courses.cart
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
    //   getCartProductList
    },
    dispatch,
  )

export default connect(mapStateToProps, mapDispatchToProps)(SingleCard)