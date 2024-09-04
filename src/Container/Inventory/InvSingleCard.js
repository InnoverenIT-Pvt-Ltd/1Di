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
import FeaturedMaterialCard from './FeaturedMaterialCard';

 function InvSingleCard (props){

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
console.log(props.item.productInfo)
    return(
      <>
        <div className="w-wk h-11 bg-white mt-1 flex rounded p-1 ">
        <div className=" h-11 w-11 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        {/* <div   className=" h-14 w-14 "> */}
        {/* {item.imageId ? ( */}
        <img 
        src={`${base_url}/image/${props.item.productInfo.imageId}`} 
       alt="images" 
     style={{ height: "2.75rem", width: "2.85rem"}}
       
        /> 
      {/* ) : ( 
        <div className=" text-[0.45rem] text-center  flex justify-center items-center">Image Not Available</div>
                                                      
        )}           */}
</div>
      {/* </div> */}
       
        <div className=" flex items-center  justify-center flex-col text-ellipsis overflow-hidden">
          <div class="text-blue-600 text-xs font-bold cursor-pointer font-poppins text-ellipsis overflow-hidden w-[22.5rem] ml-3"
             onClick={() => {
              props.handleProductDetails(true);
              handleRowData(props.item);
            }} 
            >
            {props.item.productInfo.productFullName}

          </div>
        
        </div>
        <div className="md:h-[1.75rem] md:bg-[#ACB6FC]  w-[0.1rem]"></div>
        <div className="flex items-center justify-center ">
        <div class="text-xs text-black w-[9.6rem] flex justify-center">
        {/* {props.item.productInfo.newProductId} */} article no
        </div>
      </div>    
      <div className="md:h-[1.75rem] md:bg-[#ACB6FC]  w-[0.1rem]"></div> 
      <div className=' flex items-center  justify-center '>
        <div className='w-[9.1rem] flex items-center  justify-center'>
        Avilable date
        </div>
        </div>
      <div className="md:h-[1.75rem] md:bg-[#ACB6FC]  w-[0.1rem]"></div> 
      <div className='flex items-center justify-center w-[18rem] '>
        <div className="flex items-center justify-center">
        <div class="text-xs text-black w-16">
         USD {props.item.itemSummary.discount}
        </div>
      </div>
      <div className="flex items-center justify-center w-16">
        <div class="text-xs text-black">
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
          <div class="text-xs text-black">
          USD  
          {props.item.itemSummary.totalPrice} 
          </div>

        </div>
        </div>
        <div className="md:h-[1.75rem] md:bg-[#ACB6FC]  w-[0.1rem]"></div> 
        <div className=' flex items-center  justify-end w-[11rem]'>
          
        <div className="flex items-center justify-center text-xs">
        <input
          type="date"
          value={date}
          onChange={(e) => handleDateChange(e, props.item)}
          class="border border-black rounded"
          min={new Date().toISOString().split('T')[0]}
        />
      </div>
     
        <div className="flex items-center justify-end">
        <DeleteOutlined 
        className='text-[red] ml-2 !text-[1.1rem]'
          onClick={() => {
            props.setqn(props.item)
            props.handlebackdelete(props.item)
          }} />

   
        </div>
        </div>
        {/* <FeaturedMaterialCard/> */}
      </div>
      
      <InveProductsDetailsDrawer
      //  setqn={props.setqn}
      //  qn={props.qn}
      // item={props.item}
      // handleDec={props.handleDec}
      // handleInc={props.handleInc}
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
      updateCartItemDate,
      handleProductDetails
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(InvSingleCard);