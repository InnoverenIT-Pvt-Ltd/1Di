
import React, { useRef } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Carousel from "react-elastic-carousel";
import { RollbackOutlined } from "@ant-design/icons";
import styled from "styled-components";
import Tooltip from '@mui/material/Tooltip';
import { InfoCircleTwoTone } from '@ant-design/icons';
import { base_url } from '../../Config/Auth';

function ProductCardListbyCategory (props) {


  
    const carouselRef = useRef(null);

    const next = () => {
      carouselRef.current.next();
    };
  
    const previous = () => {
      carouselRef.current.prev();
    };
    const breakPoints = [
      { width: 1, itemsToShow: 1 },
          { width: 500, itemsToShow: 2 },
          { width: 768, itemsToShow: 3, itemToScroll: 3 },
          { width: 1100, itemsToShow: 4, itemToScroll: 4 },
      ];
    console.log(props.productsbyCategoryId)
      return (
        <>
    <div className='flex w-wk'><a href='/'>
    <Tooltip title="Back">
        <RollbackOutlined
          className="BackButton"       
        />
      </Tooltip>
      </a></div>
        <div class="  items-center h-[22rem]  rounded overflow-auto">
      
      <CardWrapper>
    
                        {props.productsbyCategoryId.map((item) => {
                          return (
                            <CardElement >
      
                              <div 
                              //onClick={() => props.handleActiveClick(item.categoryId)} 
              style={{
                color:props.activeClick === item.brand && "Blue",
                cursor:"pointer"
              }} class=" flex flex-col items-center max-sm:mr-0 md:flex w-[12.6vw]   h-hwk border">
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
                                                                            SRP {item.suppliesPrices?.[0].suppliesPriceB2C.toFixed(2)}
                                                                            {/* <CurrencySymbol  currencyType={item.suppliesPrices?.[0].currencyName}/> {item.suppliesPrices?.[0].suppliesPriceB2C.toFixed(2)} */}
                                                                             {/* {item.suppliesPrice}  */}
                                                                            </div> 
                                                                  </div>
                                                            <div class=" flex w-wk p-1 flex-col  text-xs text-[#1124AA] justify-evenly cursor-pointer "> 
                                                             
                                                                  {/* <div> {item.newSuppliesNo}  </div> */}
                                                                  <div > 
                                                                  <Tooltip title={item.suppliesName} placement="top" arrow>
                                                                                              
                                                                                              <div 
            //                                                                                    onClick={() => {
            //   props.handleCatagoryDetails(true);
            //   handleRowData(item);
            // }} 
            >
              {item.suppliesName || ""}</div>
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
                              </div>
                            </CardElement>
                          );
                        })}
                       
                      </CardWrapper>
        
         </div>
       </>
  );
}
const mapStateToProps = ({ auth }) => ({

});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {


    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ProductCardListbyCategory);
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
  justify-content: center;
  @media only screen and (max-width: 600px) {
    justify-content: center;
    flex-direction: column;
  }
`;
const CardElement = styled.div`

  /* border:2px solid orange */
   padding: 0 10px;
   margin-top: 2.5em;
  display: flex;
    justify-content: center;
  /* margin:0px 20px; */
  @media only screen and (max-width: 600px) {
    display: flex;
    padding:0;
    margin-top: 1rem;
    justify-content: center;
    width: 100%;
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
const CardImage = styled.div`
  margin: auto;
  width: 7rem;
  height: 7rem;
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