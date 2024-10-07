import { Button } from 'antd'
import React, { useEffect,useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FlexContainer, MainWrapper } from '../../Components/UI/Layout'
import { createBrowserHistory } from "history";
import { RollbackOutlined } from "@ant-design/icons";
// import {getInventoryCartItems,deleteCartItem} from "./InventoryAction";
import { Footer } from '../Customer/Footer';
import RepeatDeliveryInfoForm from './RepeatDeliveryInfoForm';
// import InvSingleCard from './InvSingleCard';
// import InvSingleCard1 from './InvSingleCard1';

const history = createBrowserHistory();

function RepeatDeliveryInfo (props) {
  const [qn, setqn] = useState({});

    useEffect(() => {
        // props.getInventoryCartItems(props.userId);
      }, []);
    //   function handleInc(data) {
    //     setqn({ ...data, quantity: data.quantity + 1 });
    //   }
    //   function handleDec(data) {
    //     setqn({ ...data, quantity: data.quantity - 1 });
    //   }
    //   function handlebackdelete(item) {
    //     const cartItemId = item.cartItemId;
    //     props.deleteCartItem(cartItemId);
    //   }
    //   function handleRemoveCart(data) {
    //     setqn({ ...data });
    //   }
        return (
            <>
            <div class="bg-[#F7F8FC]">
            <div className="relative bg-[#1124AA] h-8 text-white w-wk flex flex-col justify-center">
            <div class="flex w-wk items-center">
            <RollbackOutlined
          className="!text-[24px] BackButton  flex justify-start "
          style={{color:"white"}}
          onClick={() => history.back()}
        /> 
          <div class=" flex text-sm text-white w-[100%] justify-center font-semibold"> Shipping Information</div> 
          <div className=" flex justify-end w-[100%] text-white text-sm text-[16px] font-normal pr-3"> Quotation ID &nbsp;<span class="text-bold text-sm text-[#eacc0c]"></span></div>
          </div>
      
              </div>
                     
               <div class="flex justify-center items-center mt-1">
                    <div class="w-wk bg-white shadow-2xl rounded-lg border p-1 h-[87vh] flex justify-between"   >
                  <div className='w-[40%]'>
                        <RepeatDeliveryInfoForm 
                        //  invencartItem={props.invencartItem}
                        //  fetchingInventoryCartItems={props.fetchingInventoryCartItems}
                        />
                        </div>
                        <div className=" w-[55%] h-[83vh] border box-border overflow-x-auto">
      
     
  
          <div className="w-[100%]">
         {/* {props.invencartItem.cartItems && props.invencartItem.cartItems.length === 0 ? <div class="flex justify-center  text-2xl text-[red]">Your Shopping cart is empty !</div>:
props.invencartItem.cartItems && props.invencartItem.cartItems.map((item) => {
                return ( 
               <InvSingleCard1 
               key={item.cartItemId}
               invencartItem={props.invencartItem}
               item={item}
               handleDec={handleDec}
               handleInc={handleInc}
               handleRemoveCart={handleRemoveCart}
               handlebackdelete={handlebackdelete}
               setqn={setqn}
               qn={qn}
               updatingPlusCart={props.updatingPlusCart}
                />

             )})}  */}
          </div>
          
          
         

      </div>
                    </div>
                    </div>   
                    <Footer/>
                    </div> 
            </>
        )
}

const mapStateToProps = ({ inventory, auth }) => ({
    // invencartItem: inventory.invencartItem,
    // userId: auth.userDetails.userId,
    // fetchingInventoryCartItems:inventory.fetchingInventoryCartItems,
  });
  
  const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
       {
        // getInventoryCartItems,
        // deleteCartItem
            
       },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps) (RepeatDeliveryInfo);
