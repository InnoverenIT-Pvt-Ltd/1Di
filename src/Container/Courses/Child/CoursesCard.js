import React, { Suspense, Component } from "react";
import { MultiAvatar } from "../../../Components/UI/Elements";
import { BundleLoader } from "../../../Components/Placeholder";
import { Link } from "../../../Components/Common";

import Item from "antd/lib/list/Item";
import { FlexContainer } from "../../../Components/UI/Layout";
import { Button, Menu, Dropdown, Radio, Space, Tooltip } from "antd";


import { connect } from "react-redux";

import { bindActionCreators } from "redux";

import styled from "styled-components";

import { Select } from "../../../Components/UI/Elements";

const { Option } = Select;
class CoursesCard extends Component {
  state = {
    value: 1,
    currentData: "",
    visbleNewUI: false,
    colour:"",
    size:"",
  };



  handleAddPlusClick = (courseId) => {
    const value = localStorage.getItem("cartId");
    const final = JSON.parse(value);
    const finalcartId = final !== null ? final.cartId : null;
    const finalshopName = final !== null ? final.shopName : null;

    let data = {
      
      itemId: courseId,
      cartId: finalcartId? finalcartId : null,
     
      quantity: 1,
      candidateId:this.props.candidateId
     
     
    };

    this.props.LinkProductInfo(data);
    // this.props.getCartProductList(finalcartId);
  };
  

  render() {
    const { value } = this.state;
    console.log("courses",this.props.courseCard)
    //console.log(this.props.merchantDetailsId);
  

    return (
      <div class="flex justify-center ">
       
    
          <div class=" bg-slate-50">
        <MainWrapper>
      

          {/* {this.props.shopName.openInd ? ( */}
            <>
              {/* {!this.state.visbleNewUI ? ( */}
                <CardWrapper>
                  {this.props.courseCard.map((item) => {
                    return (
                      <CardElement >

                        <div className="  h-max w-64 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 object-cover object-center  ">
                          <div class="md:w-60 mx-2 my-2">
                        <CardImage >
                        
                            {/* <div className=" sm:h-28 w-28 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 md:h-32 max-w-screen-md "> */}
                            {/* <div   className=" h-32 w-32 -mt-5 -ml-2 object-cover object-center"> */}
                            <MultiAvatar
                             primaryTitle={item.courseName}
                             // imageId={item.imageId ? item.imageId : ""}
                              // imgHeight={200}
                              // imgWidth={200}
                              // imgRadius={20}
                            />
                            {/* </div> */}
                            {/* </div> */}
                        
                        </CardImage>

                        <CardDescription>
                         
                         
                          
                          <h3 class=" mt-3 h-4 font-bold text-xs ">
                          <Link
          toUrl={`course/${item.courseId}`}
          title={`${item.courseName}`}
        />
                           {/* {item.courseName} */}
                          </h3>

                          <div
                            style={{
                              // display: "flex",
                              placeContent: "space-evenly",
                              width: "100%",
                            }}
                          >
                           
                              <Price>
                                {/* <CurrencySymbol
                                  currencyType={item.currencyName}
                                /> */}
                                {item.price}{" "}
                              </Price>
                         
                         
                          </div>

                       

                          <div class="mt-px flex justify-end">
                            <Button
                            style={{backgroundColor:"tomato"}}
                           
                              className="adHBtn"
                              onClick={() =>
                                this.handleAddPlusClick(
                                  item.courseId,
                                 
                                )
                              }
                            >
                               <label class="text-white font-bold ">
                            Add +
                            </label>
                            </Button>
                          </div>
                        </CardDescription>
                        </div>
                        </div>
                      </CardElement>
                   );
                  })}




                
                
                </CardWrapper>
           
            </>
        
        </MainWrapper>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ customer, auth,courses }) => ({
  courseCard:courses.courseCard,
  candidateId:auth.userDetails.candidateId,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
     
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CoursesCard);

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
  /* border:2px solid red */
  padding: 0 20px;
  margin-top: 2.5em;
  /* margin:0px 20px; */
  @media only screen and (max-width: 600px) {
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
  width: 8em;
  height: 10em;
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
  //border: 0.1em solid #ffca0066;
  padding: 3%;
  text-align: center;
`;
// const Category = styled.div`
//   font-weight: 700;
//   font-family: Poppins;
//   font-size: 1em;
//   text-overflow: ellipsis;
//   white-space: nowrap;
//   overflow: hidden;
// `;
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