import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  DeleteOutlined,
  MinusOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import "../Customer/Customer.scss";
import { base_url } from "../../Config/Auth";
import {updateCartItemDate,handleProductDetails} from "../Inventory/InventoryAction";
import InveProductsDetailsDrawer from '../Inventory/InveProductsDetailsDrawer';

 function RepeatSingleCard (props){

  const [date, setDate] = useState('');
  const [rowDatas, setrowDatas] = useState("");
 
  useEffect(() => {
    
    // const today = new Date().toISOString().split('T')[0];
    // setDate(today); 
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setDate(tomorrow.toISOString().split('T')[0]);
  }, []);
  function handleRowData(item) {
    setrowDatas(item)
}
  const handleDateChange = (e,item) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    const isoDate = new Date(selectedDate).toISOString(); 
    let data={
      productId:item.productInfo.productId,
      orderId:props.invencartItem.orderPhoneId,
      deliveryDate:isoDate
    }
    props.updateCartItemDate(data);
  };
console.log(props.item.productInfo)
    return(
      <>
      
        <div className="w-wk h-20 bg-white mt-2 flex rounded p-2 ">
        <div className="w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <div   className="">
        {props.item.productInfo.imageId ? (
        <img 
        className="h-24"
        src={`${base_url}/image/${props.item.productInfo.imageId}`} 
       alt="images" 
        /> 
    ) : (
        <div className=" text-xs h-[4.5rem] text-center w-[5rem] flex justify-center items-center">Image Not Available</div>
                                                      
    )}            
</div>
      </div>
       
        <div className=" flex items-center  justify-center flex-col w-wk">
          <div class="text-blue-600 text-xs text-center font-bold cursor-pointer font-poppins"
             onClick={() => {
              props.handleProductDetails(true);
              handleRowData(props.item);
            }} 
            >
            {props.item.productInfo.productFullName}

          </div>

      <div className='flex items-center justify-center w-wk'>
        <div className="flex items-center justify-center">
        <div class="text-xs text-black w-16">
         {Number(props.item.itemSummary.discount).toFixed(2)} 
        </div>
      </div>
      <div className="flex items-center justify-center w-16">
        <div class="text-xs text-black">
         
         {Number(props.item.itemSummary.unitPrice).toFixed(2)}
        </div>
      </div>
        <div className="add-minus-quantity">
          <span
           onClick={()=>{
               props.setqn(props.item)
               props.handleDec(props.item)
           }}
          >
                 <MinusOutlined />
          </span>
        {props.updatingPlusCart ? "Loading" :
          <input type="text" placeholder={props.qn.quantity && props.item.cartItemId === props.qn.cartItemId
              ? props.qn.quantity
              : props.item.quantity
          }
          />
        } 
          <span
           onClick={()=>{
            props.setqn(props.item)
         props.handleInc(props.item)}}
          >
          <PlusOutlined />
          </span>

        </div>
        <div className="flex items-center justify-center">
          <div class="text-sm text-black ml-3">
          {Number(props.item.itemSummary.totalPrice).toFixed(2)}  
          </div>

        </div>
        </div>
     
        </div>
    
        <div className=' flex items-center  justify-center w-auto'>
        <div className="flex items-center justify-center">
        <DeleteOutlined
        className='text-[red]'
          onClick={() => {
            props.setqn(props.item)
            props.handlebackdelete(props.item)
          }} />

   
        </div>
        </div>
      </div>
      
      <InveProductsDetailsDrawer
      productDetailsDrawr={props.productDetailsDrawr}
      handleProductDetails={props.handleProductDetails}
      rowDatas={rowDatas}
      />
</>
    )
}
const mapStateToProps = ({ inventory }) => ({
  productDetailsDrawr:inventory.productDetailsDrawr,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {

    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(RepeatSingleCard);