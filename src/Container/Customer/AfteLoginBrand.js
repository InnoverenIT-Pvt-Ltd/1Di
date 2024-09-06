
import React, { useRef } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Carousel from "react-elastic-carousel";
import { RollbackOutlined } from "@ant-design/icons";
import styled from "styled-components";
import Tooltip from '@mui/material/Tooltip';
import { InfoCircleTwoTone } from '@ant-design/icons';
import { base_url } from '../../Config/Auth';

function AfteLoginBrand (props) {


  
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
    <div className='flex w-wk'><a href='/inventory'>
    <Tooltip title="Back">
        <RollbackOutlined
          className="BackButton"       
        />
      </Tooltip>
      </a></div>
        <div class="  items-center h-[38rem]  rounded overflow-auto">
      
      <CardWrapper>
    
                        {props.productsbyCategoryId.map((item) => {
                          return (
                            <CardElement >
      
                              <div 
                           
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
                                                                          
                                                                            </div> 
                                                                  </div>
                                                            <div class=" flex w-wk p-1 flex-col  text-xs text-[#1124AA] justify-evenly cursor-pointer "> 
                                                             
                                                                 
                                                                  <div > 
                                                                  <Tooltip title={item.suppliesName} placement="top" arrow>
                                                                                              
                                                                                              <div 
          
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

export default connect(mapStateToProps, mapDispatchToProps)(AfteLoginBrand);
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
