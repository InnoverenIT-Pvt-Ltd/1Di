import React, { useEffect,useState, useRef,lazy } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from "styled-components";
import { base_url } from '../Config/Auth';
import { RollbackOutlined } from "@ant-design/icons";
import {handleCatagoryDetails} from "../Container/Customer/CustomerAction";
import { Tooltip } from 'antd';
import MainDetailsDrawer from '../Container/Customer/MainDetailsDrawer';

const MainSearchedData = (props) => {

  const [rowDatas, setrowDatas] = useState("");
  function handleRowData(item) {
    setrowDatas(item)
}
console.log(props.investorSerachedData)
const investorSerachedDataCount = props.investorSerachedData.length;
console.log(investorSerachedDataCount)
    return (

        <div class="w-wk   self-center ">
           <div className="relative bg-[#1124AA] h-10 text-white w-wk flex flex-col justify-center">
      <div class="flex">
      <a href='/'>
    <RollbackOutlined
          className="BackButton flex justify-start text-[1rem]"
          style={{color:"white", }}
          
        />
          </a>
    <div class="text-lg w-[100%] flex justify-center text-white font-semibold">Your Searched Items ({investorSerachedDataCount})</div>
</div>
          </div>      
      <div class="  items-center  h-[38rem]  rounded overflow-auto">
      

        <CardWrapper>
          

                      {props.investorSerachedData.map((item) => {
                        
                         console.log(item.suppliesPrice)
                        return (
                          <CardElement >

                          <div class=" flex flex-col items-center max-sm:mr-0 md:flex w-[12.6vw]   h-hwk border">
                                              {item.imageId ? (
                                                    <div class=" flex items-center">
                                                     <img
                                                              src={`${base_url}/image/${item.imageId}`} 
                                                              style={{ height: "6.5rem", width: "7rem" }}
                                                          />
                                                         </div>  
                                                        ) : (
                           
                                                        <div className="flex items-center text-xs h-[6.5rem]  w-[7rem] ">Image Not Available</div>
                                                      
                                                    )}
                                                      <div className=" flex justify-end flex-row w-full "> 
                                                                        {/* <div class=" mt-1 text-xs text-[#1124AA] ">
                                                                            WSL -  {item.discounts?.[0]?.allowedDiscount}
                                                                            </div> */}
                                                                            <div class="  flex  p-1 text-xs text-[#1124AA]">
                                                                            SRP - 
                                                                            {/* <CurrencySymbol  currencyType={item.suppliesPrices?.[0].currencyName}/> */}
                                                                             {item.suppliesPrice} 
                                                                            </div> 
                                                                  </div>
                                                            <div class=" flex w-wk p-1 flex-col  text-xs text-[#1124AA] justify-evenly cursor-pointer "> 
                                                             
                                                                  <div> {item.newSuppliesNo}  </div>
                                                                  <div > 
                                                                  <Tooltip title={item.suppliesName} placement="top" arrow>
                                                                                              
                                                                                              <div 
                                                                                               onClick={() => {
              props.handleCatagoryDetails(true);
              handleRowData(item);
            }} >{item.suppliesName || ""}</div>
                                                                                            </Tooltip>
                                                                     </div>
                                                                     
                                                                  </div>
                                                                  <div className=" flex flex-row justify-around "> 
                                                                        <div class="  text-xs text-[#1124AA] truncate max-w-[100px]">
                                                                              {item.categoryName}
                                                                            </div>
                                                                            <div class=" text-xs text-[#1124AA]">
                                                                              {item.subCategoryName}
                                                                            </div> 
                                                                  </div>
                                                              
                                                                
                                                                                                                         
                                                                            <div class="w-40 mt-1 flex  justify-between max-sm:flex items-center">
                                                                            {/* <div class=" flex justify-evenly place-items-baseline flex-col max-sm:w-48  flex-auto ">
                                                                            <div className="add-minus-quantity">
                                                                          <span

                                                                          >
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
                                                                           <div className="  cursor-pointer ml-2"
                                                                                 onClick={() =>
                                                                                    handleAddToCart(
                                                                                      item.suppliesId
                                                                    
                                                                                    )
                                                                                  }
                                                                                >
                                                                                    <Button type="primary" >
                                                                                     Add
                                                                                </Button>
                                                                                </div> */}
                                                                          </div>
                  
                                                                          </div>
                                           </CardElement>
                        );
                      })}
                    
                    
                </CardWrapper>    
         </div>
         <MainDetailsDrawer
       rowDatas={rowDatas}
       handleCatagoryDetails={props.handleCatagoryDetails}
       catagoryDetailsDrawr={props.catagoryDetailsDrawr}
      />
      </div>
        );
}
const mapStateToProps = ({ customer, }) => ({
  catagoryDetailsDrawr: customer.catagoryDetailsDrawr
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      
      handleCatagoryDetails
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MainSearchedData);

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


