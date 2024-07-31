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
import {updateCartItemDate,handleProductDetails} from "./InventoryAction";
import InveProductsDetailsDrawer from './InveProductsDetailsDrawer';

 function InvSingleCard (props){

  const [date, setDate] = useState('');

  useEffect(() => {
    
    // const today = new Date().toISOString().split('T')[0];
    // setDate(today); 
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setDate(tomorrow.toISOString().split('T')[0]);
  }, []);

  const handleDateChange = (e,item) => {
    const selectedDate = e.target.value;

    // const today = new Date().toISOString().split('T')[0];
    // if (selectedDate < today) {
    //   return;
    // }
    // if (selectedDate < tomorrow.toISOString().split('T')[0]) {
    //   // If selected date is before tomorrow, do not update state
    //   return;
    // }
    // Update date state with the selected date
    setDate(selectedDate);
    const isoDate = new Date(selectedDate).toISOString(); 
    let data={
      productId:item.productInfo.productId,
      orderId:props.invencartItem.orderPhoneId,
      deliveryDate:isoDate
    }
    props.updateCartItemDate(data);
  };

    return(
      <>
        <div className="w-wk h-[7rem] bg-white mt-5 flex rounded-lg p-2 ">
        <div className=" sm:h-28 w-28 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <div   className=" h-32 w-32 -mt-5 -ml-2 object-cover object-center">
        <img 
        src={`${base_url}/image/${props.item.productInfo.imageId}`} 
       alt="images" 
style={{ height: "10rem", width: "10rem", borderRadius: "20px" }}
       
        /> 
                   
</div>
      </div>
       
        <div className=" flex items-center  justify-center flex-col w-wk">
          <div class="text-blue-600 text-base font-bold"
             onClick={() => {
              props.handleProductDetails(true);
            }} 
            >
            {props.item.productInfo.productFullName}

          </div>
          <div className="">
        <div class="text-sm text-black">
        Category -  {props.item.productInfo.category}
        </div>
      </div>
      <div className="">
        <div class="text-sm text-black">
        Attribute -  {props.item.productInfo.attribute}
        </div>
      </div>
     
     
        </div>
        <div className="md:h-[6rem] md:bg-[#ACB6FC] md:mt-2 w-[0.1rem]"></div>
        <div className="flex items-center justify-center w-[w-wk]">
        <div class="text-sm text-black w-[13.4rem] flex justify-center">
        {props.item.productInfo.newProductId}
        </div>
      </div>    
      <div className="md:h-[6rem] md:bg-[#ACB6FC] md:mt-2 w-[0.1rem]"></div> 
      <div className=' flex items-center  justify-center w-[w-wk]'>
        <div className='w-[10rem] flex items-center  justify-center'>
        Avilable date
        </div>
        </div>
      <div className="md:h-[6rem] md:bg-[#ACB6FC] md:mt-2 w-[0.1rem]"></div> 
      <div className='flex items-center justify-center w-[w-wk]'>
        <div className="flex items-center justify-center">
        <div class="text-sm text-black w-16">
         USD {props.item.itemSummary.discount}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div class="text-sm text-black">
        USD 
        {props.item.itemSummary.unitPrice}
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
          <div class="text-sm text-black">
          USD  
          {props.item.itemSummary.totalPrice} 
          </div>

        </div>
        </div>
        <div className="md:h-[6rem] md:bg-[#ACB6FC] md:mt-2 w-[0.1rem]"></div> 
        <div className=' flex items-center  justify-center w-[w-wk]'>
          
        <div className="flex items-center justify-center">
        <input
          type="date"
          value={date}
          onChange={(e) => handleDateChange(e, props.item)}
          class="border border-black rounded"
          min={new Date().toISOString().split('T')[0]}
        />
      </div>
     
        <div className="flex items-center justify-center">
        <DeleteOutlined
          onClick={() => {
            props.setqn(props.item)
            props.handlebackdelete(props.item)
          }} />

   
        </div>
        </div>
      </div>

      <InveProductsDetailsDrawer
       setqn={props.setqn}
       qn={props.qn}
      item={props.item}
      handleDec={props.handleDec}
      handleInc={props.handleInc}
      productDetailsDrawr={props.productDetailsDrawr}
      handleProductDetails={props.handleProductDetails}
      />
</>
    )
}
const mapStateToProps = ({ inventory }) => ({
  productDetailsDrawr:inventory.productDetailsDrawr
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      updateCartItemDate,
      handleProductDetails
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(InvSingleCard);