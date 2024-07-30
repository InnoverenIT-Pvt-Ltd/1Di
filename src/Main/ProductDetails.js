import React, { Suspense, Component } from 'react'
import { Link } from "react-router-dom";
import ImgSrc from "../../Assets/Images/apple.jpg";
import ImgSrc2 from "../../Assets/Images/banana.jpg";
import ImgSrc3 from "../../Assets/Images/orange.jpg";
import ImgSrc4 from "../../Assets/Images/mango.jpg";
import CustomerContentHeader from '../../Containers/Customer/Header/CustomerContentHeader'
import MainHeader from '../../Containers/Customer/Header/MainHeader'
import { FlexContainer } from "../../Components/UI/Layout";
 import { Button, Menu, Dropdown, Radio, Space,Tooltip } from 'antd';
import {
getProductById,
     LinkProductInfo
} from "../Customer/CustomerAction";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MultiAvatar2 } from '../../Components/UI/Elements';
import styled from 'styled-components';
import ImageThumb from './ImageThumb';
import Colors from './Colors';
import "./MainApp.scss";
import ReactImageGallery from 'react-image-gallery';

class ProductDetails extends Component {
  

  myRef = React.createRef();

  // handleTab = index =>{
  //   this.setState({index: index})
  //   const images = this.myRef.current.children;
  //   for(let i=0; i<images.length; i++){
  //     images[i].className = images[i].className.replace("active", "");
  //   }
  //   images[index].className = "active";
  // };

  // componentDidMount(){
  //   const {index} = this.state;
  //   this.myRef.current.children[index].className = "active";
  // }

  componentDidMount(){
  this.props.getProductById(this.props.match.params.id);
}

  render(){
    const products={
        productId: "PDSG35288444543312023",
        imageId: `${ImgSrc2}`,
        name: "Spicy Bitter",
        price: 150.0,
        discountedPric: 130.0,
        description: "Bananas are long, curved fruits with smooth, yellow, and sometimes slightly green skin. The average length of a banana is about 7 to 9 inches, and it is about 2 to 3 inches in diameter. The skin of the banana is usually yellow when it is ripe, but it can also be green, red, or purple depending on the variety.",
        merchantName: "Divine Store",
        categoryName: "Bitter Spices",
        productWeight:"2",
        productUnit:"1.2",
        colourDTO: [
            {
                colourId: "CG64077995012312023",
                colour: "Yellow",
                productId: "PDSG35288444543312023"
            }
        ],
        sizeDTO: [
            {
                productSize: "50gm",
                productId: "PDSG35288444543312023",
                sizeId: "SDEG50069377527312023"
            }
        ]
    }
  
    const images = [
          {
              original: 'https://picsum.photos/id/1018/1000/600/',
              thumbnail: 'https://picsum.photos/id/1018/250/150/',
          },
          {
              original: 'https://picsum.photos/id/1015/1000/600/',
              thumbnail: 'https://picsum.photos/id/1015/250/150/',
          },
          {
              original: 'https://picsum.photos/id/1019/1000/600/',
              thumbnail: 'https://picsum.photos/id/1019/250/150/',
          },
      ];
    return(
      <div>
  <div className="wrapper">
    
    <div class="flex justify-between w-wk">

      
    <div className="card__img">
    {/* {products.imageId ?(
     <MultiAvatar2
           
              imageId={products.imageId ? products.imageId :"No Image available"}
            />
            ) :(
              <div style={{width:"22rem",height:"22rem"}}>
                <div className="ImgNot">
                Image Not Available
                </div>
                </div>
            )} */}
 <img src={ImgSrc2} style={{width:"30em",height:"34em"}}/>
          </div>
   <div className=" w-wk m-2 flex bg-white h-hwk">
    
     <div className="card__body" >
       <div className="card__title">
       {/* <h3>{this.props.products.merchantName}</h3>  */}
       <Tooltip title={this.props.productsByID.name}  placement="top"
 arrow>
    
       {this.props.productsByID.name}
    
        </Tooltip>
    
         </div>
         <div className="card__title "> </div>
         <Desc>{this.props.productsByID.categoryName}</Desc>
         <Price>₹ {this.props.productsByID.price}</Price>
       <div className="" dangerouslySetInnerHTML={{ __html:products.description }}></div>
       
      <Button type="primary" >
        Add +
      </Button>

     </div>
    
   </div>
 
   </div>
      
  
   </div> 
   <div style={{width:"40%", margin:"0em 45em"}}>
   <ReactImageGallery items={images} />
   </div>
      </div>   
    
        
    );
  };
}
    

const mapStateToProps = ({ customer }) => ({
    customer: customer.customer,
    linkingProductInfo: customer.linkingProductInfo,
    productsByID:customer.productsByID
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
         {
            
            getProductById,
            LinkProductInfo
        },
        dispatch
    );



export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);

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
 width:20%;
 padding:0 20px;
 margin-top: 1.5em;
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
const DescName= styled.div`
  text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    // color:white;
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