import React from 'react'
import styled from "styled-components";
import { base_url } from '../Config/Auth';
import { Tooltip } from 'antd';

const MainSearchedData = (props) => {
    return (

        <div class="w-wk   self-center">
      <div class="text-black font-semibold">Catalog</div> 
      <div class="  items-center  h-34  rounded overflow-auto">
      
      <CardWrapper>
    
                        {props.investorSerachedData.map((item) => {
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
      </div>
        );
}

export default MainSearchedData
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


