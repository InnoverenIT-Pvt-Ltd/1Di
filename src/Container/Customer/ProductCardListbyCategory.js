
import React, { useRef } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Carousel from "react-elastic-carousel";
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
    
        {/* <div class="h-[22rem] overflow-auto">
    
        <CardWrapper>
       
                      {props.productsbyCategoryId.filter((dc) => props.activeClick === dc.category).map((item) => {
                        
                        return (
                          <CardElement >
        
        <div class=" h-h27 flex-col flex bg-stone-100 items-center scale-90 hover:scale-95 ease-in  duration-500 hover:shadow-lg  w-80 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 object-cover object-center max-sm:w-48 flex-grow-3 md:flex-grow-0">
        <div class="mt-1">
                                  <Tooltip title={item.productFullName} placement="top" arrow>
                                 
                                                              <Header>{item.productFullName || ""}</Header>
                                                            </Tooltip>
                                                            </div>
                                                            <div class="max-sm:mr-0 md:flex  my-2 h-hwk">
                                  <div class="object-cover object-center  flex items-center">
                                    <div>
                                <img
                                            src={`${base_url}/image/${item.imageId}`} alt=""
                                            style={{ height: "7rem", width: "7rem" }}
                                        />
                                         <h3>{item.newProductNo} </h3>  
                                         </div>
                                                          </div>  
                                                                                                       
                                                          <div class="w-40  flex justify-between max-sm:flex items-center  flex-col">
                                                          <div class=" flex justify-evenly place-items-baseline flex-col max-sm:w-48  flex-auto ">
                                                         
                                                                </div>
                                                          <h3 class=" mt-2 h-4 font-bold text-xs ">
                                                            {item.categoryName}
                                                          </h3>
                                                          <h3 class=" mt-2 h-4 font-bold text-xs ">
                                                            {item.subCategoryName}
                                                          </h3> 
                                                        </div>

                                                        </div>
                                                        
                                                        <div class="flex justify-between m-2 w-wk max-sm:w-40 items-baseline md: " >
                                                            <Desc
                                                              dangerouslySetInnerHTML={{
                                                                __html: item.description,
                                                              }}
                                                            ></Desc>
                                                            {item.description === "<h3></h3>\n" ? null : (
                                                              <Tooltip
                                                                style={{ backgroundColor: "red" }}
                                                                title={
                                                                  <Desc2
                                                                    dangerouslySetInnerHTML={{
                                                                      __html: item.description,
                                                                    }}
                                                                  ></Desc2>
                                                                }
                                                                placement="top"
                                                                arrow
                                                              >
                                                                <span
                                                                  style={{
                                                                    cursor: "pointer",
                                                                  }}
                                                                >
                                                   
                                                                  <InfoCircleTwoTone class=" flex items-center"/>
                                                                </span>
                                                              </Tooltip>
                                                            )}
                                                          </div>
                                                        <div class="mt-px flex  justify-end w-wk m-1">
                                                      
                                                            
                                                      
                                                          </div>
                                                        </div>
                         </CardElement>
                        );
                      })}
                   
                </CardWrapper>    
      
       </div> */}
        <div class="  items-center  h-34  rounded overflow-auto">
      
      <CardWrapper>
    
                        {props.productsbyCategoryId.map((item) => {
                          return (
                            <CardElement >
      
                              <div 
                              //onClick={() => props.handleActiveClick(item.categoryId)} 
              style={{
                color:props.activeClick === item.categoryId && "Blue",
                cursor:"pointer"
              }} className="flex  w-44 h-28  hover:scale-100 ease-in  duration-500 hover:shadow-lg overflow-hidden rounded-md border border-gray-200 object-cover object-center  ">
                                <div class="flex  flex-col items-center md:w-60 mx-2 my-2">
                              <div class=" w-20 h-20" >
                                {item.imageId ? (
                                  <div className=" sm:h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 md:h-20 max-w-screen-md ">
                                  <div   className=" h-20 w-20  object-cover object-center hover:shadow-lg">
                                  <img  src={`${base_url}/image/${item.imageId}`} alt=""
                                                  />
                                  </div>
                                  </div>
                                ) : (
                                 
                                    <div className=" text-[0.65rem] text-center">Image Not Available</div>
                                 
                                )}
                              </div>
      
                              <CardDescription>
                              
                                <Tooltip title={item.categoryName} placement="top" arrow>
                                  <div class="text-xs font-bold ">{item.categoryName || ""}</div>
                                </Tooltip>
      
                              </CardDescription>
      
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