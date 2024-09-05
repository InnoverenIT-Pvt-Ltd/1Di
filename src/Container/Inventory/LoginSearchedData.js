import React, { useEffect,useState,useRef,useCallback } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import { Tooltip,Button } from 'antd';
import { base_url } from '../../Config/Auth';
import { RollbackOutlined } from "@ant-design/icons";
import {  MinusOutlined, PlusOutlined } from "@ant-design/icons";
import {handleSuppliesDetails,LinkInventoryItem} from "./InventoryAction";
import { Link } from "react-router-dom";
import InventoryHeader from './InventoryHeader';
import InveSuppliesDetailsDrawer from './Child/InveSuppliesDetailsDrawer';

const LoginSearchedData = (props) => {
  const [rowDatas, setrowDatas] = useState("");
  const [units, setUnits] = useState({});
  function handleRowData(item) {
    setrowDatas(item)
}
const handleQuantityChange = (event, suppliesId) => {
  const newUnit = parseInt(event.target.value, 10);
  if (!isNaN(newUnit) && newUnit >= 1) {
    setUnits((prevUnits) => ({
      ...prevUnits,
      [suppliesId]: newUnit,
    }));
  }
};
const handleIncrement = (suppliesId) => {
  setUnits(prevUnits => ({
    ...prevUnits,
    [suppliesId]: (prevUnits[suppliesId] || 1) + 1,
}));
};

const handleDecrement = (suppliesId) => {
  setUnits(prevUnits => {
    const currentUnits = prevUnits[suppliesId] || 1;
    return {
        ...prevUnits,
        [suppliesId]: currentUnits > 1 ? currentUnits - 1 : 1,
    };
});
};
const handleAddToCart = (suppliesId) => { 
  let data={
     
    iteamsDTO: {
        productType:"material",
        productId:suppliesId,
        unit: units[suppliesId] || 1,
      },
    
      orderPhoneId:props.invencartItem.orderPhoneId ? props.invencartItem.orderPhoneId :null,
      userId:props.userId,
      orgId:props.organizationId
      
    }

  props.LinkInventoryItem(data);
}
// const darto = props.investorSerachedData[0].suppliesId
// console.log(darto) when map data array
  const investorSerachedDataCount = props.investorSerachedData.length;
    return (
        <>
        <div className="relative bg-[#1124AA] text-white w-wk">
        <InventoryHeader/>
        </div>
        <div class="w-wk   self-center">
          <div className="flex">
        <div>
            <a href='/inventory'>
      <RollbackOutlined
          className="BackButton flex justify-start "
          style={{color:"black"}}
         
        />
        </a>
        </div>
        <div class="text-lg w-[100%] flex justify-center  font-semibold">Your Searched Items ({investorSerachedDataCount})</div>
        </div>
      <div class="  items-center   h-[34rem]  rounded overflow-auto">
     
      <CardWrapper>
    
                        {props.investorSerachedData.map((item) => {
                          return (
                            <CardElement >
                            <div 
                            // ref={isLastElement ? lastProductElementRef : null} 
                            key={item.suppliesId} className="card-element">
                          <div class=" h-[19rem] flex  items-center scale-90 hover:scale-95 ease-in  duration-500 hover:shadow-lg  w-[12.6rem] flex-shrink-0 overflow-hidden rounded-md border border-gray-200 max-sm:w-48 flex-grow-3 md:flex-grow-0">
                         
                          <div class=" flex flex-col max-sm:mr-0 md:flex   h-hwk">
                                                  {item.imageId ? (
                                                        <div class="object-cover object-center  flex items-center">
                                                         <img
                                                                  src={`${base_url}/image/${item.imageId}`} 
                                                                  style={{ height: "12.5rem", width: "13rem" }}
                                                              />
                                                             </div>  
                                                            ) : (
                               
                                                            <div className=" text-base h-[9.5rem] text-center w-[13rem] flex justify-center items-center">Image Not Available</div>
                                                          
                                                        )}
                                                         <div className=" flex justify-between flex-row w-full "> 
                                                                                <div class=" mr-3 text-xs text-[#1124AA]">
                                                                                WSL -  {item.suppliesPrice} 
                                                                                </div> 
                                                                     
                                                        
                                                                                <div class=" mr-3 text-xs text-[#1124AA]">
                                                                                  SRP -  {item.suppliesPrice} 
                                                                                </div> 
                                                                                </div>
                                                                      <div class=" flex w-wk p-1 flex-col  text-xs text-[#1124AA] justify-evenly cursor-pointer "> 
                                                                 
                                                                      <div> {item.newSuppliesNo}  </div>
                                                                      <div > 
                                                                      <Tooltip title={item.suppliesName} placement="top" arrow>
                                                                                                  
                                                                                                  <div class="cursor-pointer"
                                                                                                    onClick={() => {
                                                                                                      props.handleSuppliesDetails(true);
                                                                                                      handleRowData(item);
                                                                                                    }} 
                                                                                                  >{item.suppliesName || ""}</div>
                                                                                                </Tooltip>
                                                                         </div>
                                                                         
                                                                      </div>
                                                                      <div className=" flex flex-row justify-around"> 
                                                                            <div class=" mt-1 text-xs text-[#1124AA] truncate max-w-[100px] "title={item.categoryName}>
                                                                                  {item.categoryName}
                                                                                </div>
                                                                                
                                                                                <div class=" mt-1 text-xs text-[#1124AA]">
                                                                                  {item.subCategoryName}
                                                                                </div> 
                                                                      </div>
                                                                     
                                                          
                                                                                                                             
                                                                                <div class="mt-1 flex  justify-between max-sm:flex items-center p-4">
                                                                                <div class=" flex  max-sm:w-48  ">
                                                                                <div className="add-minus-quantity">
                                                                              <span >
                                                                                    <MinusOutlined onClick={() => handleDecrement(item.suppliesId)}/>
                                                                              </span>
                                                                            
                                                                              <input  type="number"  
                                                                              value={units[item.suppliesId] || 1}
                                                                              onChange={(event) => handleQuantityChange(event, item.suppliesId)}
                                                                              min="1" 
                                                                              step="1"  />
                                                                            
                                                                              <span
    
                                                                              >
                                                                                <PlusOutlined onClick={() => handleIncrement(item.suppliesId)}/>
                                                                                </span>
    
                                                                              </div>
               
                              
                                                 
                                                                               </div>
                                                                               <div className="  cursor-pointer "
                                                                                     onClick={() =>
                                                                                        handleAddToCart(
                                                                                          item.suppliesId
                                                                        
                                                                                        )
                                                                                      }
                                                                                    >
                                                                                        <Button type="primary" >
                                                                                         Add
                                                                                    </Button>
                                                                                    </div>
                                                                              </div>
                      
                                                                              </div>
                                                                              
                                                                              
                                                                                
                                                                                 
                      
                                             </div>
                                             </div>
                                           </CardElement>
                          );
                        })}
                       
                      </CardWrapper>
        
         </div>
      </div>
      <InveSuppliesDetailsDrawer
      suppliesDetailsDrawr={props.suppliesDetailsDrawr}
      handleSuppliesDetails={props.handleSuppliesDetails}
      rowDatas={rowDatas}
      />
      </>
        );
}
const mapStateToProps = ({ inventory,auth }) => ({
  purchaseList: inventory.purchaseList,
  fetchingPurchaseList:inventory.fetchingPurchaseList,
  userId: auth.userDetails.userId,
  organizationId: auth.userDetails.organizationId,
  suppliesDetailsDrawr:inventory.suppliesDetailsDrawr,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      handleSuppliesDetails,
      LinkInventoryItem

    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(LoginSearchedData);

const MainWrapper = styled.div`
  /* */
  margin: 0px 20px;
  @media only screen and (max-width: 600px) {
  }
`;
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  @media only screen and (max-width: 600px) {
    justify-content: center;
    flex-direction: column;
  }
`;
const CardElement = styled.div`

   padding: 0 10px;
   margin-top: 1.5rem;
  display: flex;
    justify-content: center;
  @media only screen and (max-width: 600px) {
    display: flex;
    padding:0;
    margin-top: 1rem;
    justify-content: center;
    width: 100%;
  }
`;
const CardDescription1 = styled.div`
  @media only screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

  }
`;
const CardDescription = styled.div`
  @media only screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const WithOutImage = styled.div`
  margin: auto;
  width: 10em;
  height: 10em;
  display: flex;
  align-items: center;
  flex-direction:column @media only screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const Header = styled.div`
  text-overflow: ellipsis;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  height: 2em;
  font-size: 1.3em;
  font-family: Poppins;
  font-weight: 700;
  @media only screen and (max-width: 600px) {
    text-overflow: ellipsis;

white-space: nowrap;
overflow: hidden;
height: 2em;
font-size: 1.3em;
font-family: Poppins;
font-weight: 700;
width:100%
text-align:center
  }
`;
const Desc = styled.p`
  height: 1.5em;
  overflow: hidden;
  padding: 1%;
  text-align: center;
`;
const Desc2 = styled.p`
  height: 60px;
  overflow: auto;
  color: white;
  padding: 3%;
  text-align: center;
`;

const Price = styled.div`
  height: 1.5em;
  font-weight: 700;
  font-family: Poppins;
  font-size: 1em;
`;
const Price1 = styled.div`
  height: 3.5em;
  font-weight: 700;
  font-family: Poppins;
  font-size: 1em;
  display: grid;
  width: -webkit-fill-available;
  place-items: baseline;
  white-space: pre;
`;
const Price2 = styled.div`
  height: 1.5em;
  font-weight: 700;
  font-family: Poppins;
  font-size: 1em;
  text-decoration-line: line-through;
`;
const Size = styled.div`
  height: 2.5em;
  font-weight: 700;
  font-family: Poppins;
  font-size: 1em;
  display: grid;
  width: -webkit-fill-available;
  place-items: baseline;
  white-space: pre;
`;


