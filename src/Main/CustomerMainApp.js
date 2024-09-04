import React, { Component,lazy } from 'react'
import { Link } from "react-router-dom";
import CustomerContentHeader from '../Container/Customer/Header/CustomerContentHeader';
import MainHeader from '../Container/Customer/Header/MainHeader';
import BottomContentHeader from "../Container/Customer/Header/BottomContentHeader";
 import { Select,Tooltip } from 'antd';
import {
    getCustomerProductList,
     LinkProductInfo,
     getShopImage,
     getCategories,
     getProductByCategoryId
} from "../Container/Customer/CustomerAction";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { InfoCircleTwoTone } from '@ant-design/icons';
import styled from 'styled-components';
import Carousel from "react-elastic-carousel";
import InfiniteScroll from 'react-infinite-scroll-component';
import ProductCardListbyCategory from '../Container/Customer/ProductCardListbyCategory';
import { base_url } from '../Config/Auth';
import CategoriesListCard from '../Container/Inventory/Child/CategoriesListCard';
import MainSearchedData from './MainSearchedData';
import { Footer } from '../Container/Customer/Footer';
import Q2SpecialtyPromotion from './Q2SpecialtyPromotion';

const CustomerMainAppLeft =lazy(()=>import("./CustomerMainAppLeft"));
const MaterialAllCard =lazy(()=>import("../Container/Customer/MaterialAllCard"));
const OuterAllInventoryCard =lazy(()=>import("../Container/Customer/OuterAllInventoryCard"));
const OuterAllSuppliesCard =lazy(()=>import("../Container/Customer/OuterAllSuppliesCard"));

const { Option } = Select;

class CustomerMainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value: 1,
        activeClick:'',
        page: 0,
      hasMore: true
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.carousel = React.createRef();
  }
  next() {
    this.carousel.next();
  }
  previous() {
    this.carousel.prev();
  }
  componentDidMount() {
    console.log('Component did mount');
   
};
    handleActiveClick=(categoryId)=>{
      this.setState({activeClick:categoryId},()=>{
        this.props.getProductByCategoryId(categoryId);
      });  
    };

    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };

    componentDidMount() {
      console.log('Component did mount111');
      this.fetchData();
        this.props.getCategories();
        if (this.props.categoriesPrds && this.props.categoriesPrds.length > 0) {
          this.setState({
              categoriesPrds: this.props.categoriesPrds,
              activeClick: this.props.categoriesPrds[0].categoryId // Set default selected category
          }, () => {
              // Fetch products for the default selected category
              this.props.getProductByCategoryId(this.state.activeClick);
          });
      }
    }

    fetchData = () => {
      const { page } = this.state;
      const {  getCustomerProductList } = this.props;
      getCustomerProductList(page);
      this.setState({ page: page + 1 });
    };

    handleInfiniteScroll = () => {
      this.fetchData();
    };

    handleAddPlusClick = (productId) => {
  const cartId=localStorage.getItem("cartId");
      
      let data={
         
        //   productName:this.props.customer.length && this.props.customer[0].name || "",
          cartId: cartId,
        //   identifierType:"",
          price:"",
          productId:productId,
          quantity: 1,
        //   storeTerminal: 
        //     {
        //       storeId:this.props.customer.length && this.props.customer[0].merchantDetailsId || "",
        //     }
          
        }

         this.props.LinkProductInfo(data);
    }



    render() {
      
        const {hasMore, value } = this.state;
        const shopImgId=this.props.shopImage && this.props.shopImage.length && this.props.shopImage[0].imageId
        const breakPoints = [
          { width: 1, itemsToShow: 1 },
          { width: 500, itemsToShow: 1 },
          { width: 768, itemsToShow: 1, itemToScroll: 1 },
          { width: 1100, itemsToShow: 4, itemToScroll: 4 },
        ];
        const breakPoints2 = [
          { width: 1, itemsToShow: 1 },
          { width: 500, itemsToShow: 2 },
          { width: 768, itemsToShow: 3, itemToScroll: 3 },
          { width: 1100, itemsToShow: 4, itemToScroll: 4 },
        ];
        
        return (
            <>
            
 {/* <div style={{ position: "sticky", top: 0, zIndex: 1, boxShadow: "0 0.0625em 0.25em 0.0625em " }}> */}
   
<div className='flex flex-col z-10 sticky top-0 overflow-y-hidden'>
 
                <MainHeader shopImgId={shopImgId}/>
                {/* <CustomerContentHeader/> */}
                {/* <BottomContentHeader categoriesPrds={this.props.categoriesPrds} handleActiveClick={this.handleActiveClick} activeClick={this.state.activeClick} fetchingCategories={this.props.fetchingCategories}/> */}
                {this.props.investorSerachedData.length > 0 ? (
    <MainSearchedData
    investorSerachedData={this.props.investorSerachedData}
    />
  ) : (  
  <div>
                <div class="flex justify-center w-wk">
                <div className="relative bg-[#1124AA] text-white w-[87.2rem] h-44">
                <div className="absolute inset-0 h-full w-full clip-path-curve bg-[#1124AA]"></div>
                <div className="relative z-10 max-w-7xl mx-auto p-2">                 
                    <div className="text-center flex  flex-col items-start">
                        <h1 className="text-4xl font-poppins font-bold text-white">Generate your wholesale order.</h1>
                        <p className="mt-4 text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                       <Link to="/login">
                        <button className="mt-8 bg-[#1124AA] text-white font-bold py-2 px-4 rounded ">Order Products</button>
                        </Link>
                    </div>
                   
                </div>
                </div>
                </div>
        <div className="relative   bg-white h-[7rem] w-[33.2rem] -mt-[5.1rem] rounded-[2rem] -ml-4"></div>
          <div className='flex justify-center'>
             <div className='w-[90%] flex flex-col justify-center items-center overflow-x-auto p-1 h-[-webkit-fill-available]'>
                <CategoriesListCard categoriesPrds={this.props.categoriesPrds} handleActiveClick={this.handleActiveClick} activeClick={this.state.activeClick} fetchingCategories={this.props.fetchingCategories}/>
                {/* <div className="relative  custom-shape  bg-white h-[7.1rem] w-[33.21rem] -mt-[5.11rem] rounded-[2.1rem] -ml-8"></div> */}
                <div className='w-wk flex  mt-4 flex-row '>                
                   
                    <div className='flex  justify-center mt-4'>
                        <ProductCardListbyCategory productsbyCategoryId={this.props.productsbyCategoryId} activeClick={this.state.activeClick}/>
                    </div>
                    <div class=" self-center  w-wk "> 
         {/* <div class=" w-1/4">
                      <CustomerMainAppLeft categoriesPrds={this.props.categoriesPrds} 
                      handleActiveClick={this.handleActiveClick} activeClick={this.state.activeClick}
                      
                      />
                    </div> */}
            <div class="w-wk  max-sm:h-[60vh] mt-2 ">
        
                                                
                                                <MaterialAllCard/> 
                                             {/* <Q2SpecialtyPromotion/> */}
               
                {/* <Carousel
                     breakPoints={breakPoints}
                    style={{ minHeight: "6em", justifyContent:"center" }}
                      class=" w-2/12  mt-8 ml-margin10"
                    >
                      <img src={Apple} />
                      <img src={mango} />
                     
                    </Carousel> */}

                       {/* <Carousel
                     breakPoints={breakPoints2}
                    style={{ minHeight: "6em", justifyContent:"center" }}
                      // class=" w-2/12  mt-8 ml-margin10"
                    >  */}
                    {/* */}
                     {/* <div>
                    <div class="overflow-auto">
                     Products
                    </div>
<InfiniteScroll
        dataLength={this.props.customer.length}
        next={this.handleInfiniteScroll}
        hasMore={hasMore}
        height={"57vh"}
        style={{ width: "-webkit-fill-available" }}
        loader={this.props.fetchingCustomerList ? <div className="flex justify-center">Loading...</div> : null}
        initialLoad={true}
      >
      <CardWrapper>
   <Carousel
                         breakPoints={breakPoints2}
                         pagination={false}
                        style={{ minHeight: "6em", justifyContent:"center" }}
                          class=" w-2/12  mt-8 ml-margin10"
                        > 
                        
                        
                             {this.props.customer.map((item) => { 

                                 return ( 
                                  <CardElement >

                                  <div class=" h-h27 flex-col flex bg-stone-100 items-center scale-90 hover:scale-95 ease-in  duration-500 hover:shadow-lg  w-80 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 object-cover object-center max-sm:w-48 flex-grow-3 md:flex-grow-0">
                                  <div class="mt-1">
                                  <Tooltip title={item.productFullName} placement="top" arrow>
                                  <Link to={`/homeproductsDetails/${item.productId}`}>
                                                              <Header>{item.productFullName || ""}</Header>
                                                           </Link>
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
                                                            <div class="flex-col w-wk flex max-sm:flex items-center mb-[0.7rem]">
                                                              Color{" "}
                                                              {item.colourDTO &&
                                                              item.colourDTO.length &&
                                                              item.colourDTO[0].colour ? (
                                                                <Select placeholder="Select"
                                                                onChange={this.handleColor}>
                                                                  {item.colourDTO &&
                                                                    item.colourDTO.length &&
                                                                    item.colourDTO.map((item) => {
                                                                      return (
                                                                        <Option value={item.colour}
                                                                        >
                                                                          {item.colour}{" "}
                                                                        </Option>
                                                                      );
                                                                    })}
                                                                </Select>
                                                              ) : (
                                                                <Select
                                                                  defaultValue="No Option"
                                                                  disabled
                                                                ></Select>
                                                               )} 
                                                            </div>
                                                            <div class="flex-col w-wk flex max-sm:flex items-center mb-[0.7rem]">
                          Size
                          <Select
                                defaultValue="No Option"
                                disabled
                              ></Select>
                            </div>           
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
                                                          <Desc> {item.description === "null" ? "No Description" : `${item.description}`}</Desc>
                                                              {item.description === "<h3></h3>\n" ? null : (
                                                                <Tooltip
                                                                  style={{ backgroundColor: "red" }}
                                                                  title={
                                                                    <Desc2>{item.description === "null" ? "No Description" : `${item.description}`}</Desc2>
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
                                                      
                                                              <div className=" py-1 px-4 bg-slate-100 border-2 border-blue-300 hover:bg-ShopBlue "
                                                                
                                          
                                                                onClick={() =>
                                                                  this.handleAddPlusClick(
                                                                    item.productId,
                                                                    item.merchantDetailsId
                                                                  )
                                                                }
                                                              >
                                                                  <label class=" text-gray-700 font-light text-base  flex  justify-center items-center hover:text-white">
                                                            Add +
                                                              </label>
                                                              </div>
                                                         
                                                            </div>
                                                          </div>
                                                        </CardElement>
                                                      );
                                                    })}
                                                        </Carousel>
                                                  </CardWrapper>
                                               
                                                  </InfiniteScroll>
                                                  </div> */}
                                                 
                                            
                                              {/* <div class="mt-3">
                                                <p>Products from our Suppliers </p>
                                                <OuterAllInventoryCard/>
                                                </div> */}
                                                {/* <div>
                                                <p>All Supplies </p>
                                                <OuterAllSuppliesCard/>
                                                </div> */}
                                          
                                          
</div>
                    </div>
                </div>
              </div> 
            </div>
           </div>
                                           )}  
                                          </div>
      <Footer/>
              
                                        </>
                                      );
    }


}

const mapStateToProps = ({ customer, auth }) => ({
    customer: customer.customer,
    linkingProductInfo: customer.linkingProductInfo,
    // userId: auth.userDetails.userId,
    shopImage:customer.shopImage,
    categoriesPrds:customer.categoriesPrds,
    fetchingCustomerList:customer.fetchingCustomerList,
    productsbyCategoryId:customer.productsbyCategoryId,
    fetchingCategories:customer.fetchingCategories,
    investorSerachedData: customer.investorSerachedData
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
         {
            getCustomerProductList,
            LinkProductInfo,
            getShopImage,
            getCategories,
            getProductByCategoryId
        },
        dispatch
    );
export default connect(mapStateToProps, mapDispatchToProps)(CustomerMainApp);

const MainWrapper = styled.div`

margin:0px 20px;
@media only screen and (max-width: 600px) {   
}

`
const CardWrapper = styled.div`
 display:flex;
 flex-wrap:wrap;
 width:100%
@media only screen and (max-width: 600px) {
    justify-content:center;
    flex-direction: column;
}
`
const CardElement = styled.div`

//  padding:0 20px;
//  margin-top: 1.5em;
 display: flex;
 justify-content: center;
@media only screen and (max-width: 600px) {
  width: 100%;   
}
`
const CardDescription = styled.div`
  
  @media only screen and (max-width: 600px) {
    width: 100%;
    display:flex;
    align-items: center;
    flex-direction:column
  }
`
const CardImage = styled.div`
  
  width:200;
  height:200
  @media only screen and (max-width: 600px) {
    width: 100%;
    display:flex;
    align-items: center;
    flex-direction:column
  }
`

const Header = styled.div`
 text-overflow: ellipsis;
 font-family: Poppins;
    white-space: nowrap;
    overflow: hidden;
    height:2em;
    font-size: 1.3em;
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
`

const Desc = styled.p`
  height: 2em;
`
const Price = styled.div`
height: 1.5em;
  font-weight: 700;
  font-family: Poppins;
  font-size: 1em;
  
`
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
const Desc2 = styled.p`
  height: 60px;
  overflow: auto;
  color: white;
  padding: 3%;
  text-align: center;
`;