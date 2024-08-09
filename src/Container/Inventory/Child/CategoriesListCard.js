import React, { useEffect,useState,useRef } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { MultiAvatar } from "../../../Components/UI/Elements";
import { CurrencySymbol } from "../../../Components/Common";
import styled from "styled-components";
import { Select } from "../../../Components/UI/Elements";
import Tooltip from '@mui/material/Tooltip';
import { BundleLoader } from "../../../Components/Placeholder";
import {Button} from "antd";
import Image from '../../../Components/UI/Elements/Image';
import "../Inventory.scss";
import {getAllSuppliesCatagory} from "../InventoryAction";
import { InfoCircleTwoTone,  DeleteOutlined,
  MinusOutlined,
  PlusOutlined } from "@ant-design/icons";
import moment from "moment";
import Carousel from "react-elastic-carousel";
import { base_url } from "../../../Config/Auth";
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const { Option } = Select;

function CategoriesListCard (props) {

  const [hasMore, setHasMore] = useState(true);
  const [sortOrder, setSortOrder] = useState('asc'); 
  const [sortedList, setSortedList] = useState([]);

  useEffect(() => {
   props.getAllSuppliesCatagory();
  }, []);

  useEffect(() => {
      const sorted = [...props.allSuppliesCategory].sort((a, b) => {
        const nameA = a.categoryName ? a.categoryName.toUpperCase() : "";
        const nameB = b.categoryName ? b.categoryName.toUpperCase() : "";
        return sortOrder === "asc" ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
      });
      setSortedList(sorted);
    }, [props.allSuppliesCategory, sortOrder]);

    const handleSortChange = (order) => {
      setSortOrder(order);
    };

  const carouselRef = useRef(null);

  const next = () => {
    carouselRef.current.next();
  };

  const previous = () => {
    carouselRef.current.prev();
  };

  if (props.fetchingAllSuppliesCategory) {
    return <BundleLoader />;
  }

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 5, itemToScroll: 5 },
    { width: 1100, itemsToShow: 8, itemToScroll: 8 },
  ];
  return (

  <div class="w-wk   self-center">
<div class="text-black font-semibold mt-2">Catalog</div> 
<div className="sorting-controls">
        <SortButton
            onClick={() => handleSortChange("asc")}
            active={sortOrder === "asc"}
          >
            <FilterAltIcon/> A-Z
          </SortButton>
          <SortButton
            onClick={() => handleSortChange("desc")}
            active={sortOrder === "desc"}
          >
            <FilterAltIcon/> Z-A
          </SortButton>
      </div>
<div class="  items-center  h-[14vh]  rounded overflow-auto">

<CardWrapper>
<Carousel
                     breakPoints={breakPoints}
                    style={{ minHeight: "4rem", justifyContent:"center" }}
                      class=" w-2/12  mt-3 ml-10"
                    >
                  {sortedList.map((item) => {
                    return (
                      <CardElement >

                        <div onClick={() => props.handleActiveClick(item.categoryId)} 
        style={{
          color:props.activeClick === item.categoryId && "Blue",
          cursor:"pointer"
        }} className="flex  w-44 h-28  hover:scale-100 ease-in  duration-500 hover:shadow-lg overflow-hidden rounded-md border border-gray-200 ">
                          <div class="flex  flex-col items-center md:w-60 mr-3 ml-3">
                        <div class=" w-16 h-16" >
                          {item.imageId ? (
                            <div className=" flex items-center sm:h-16 w-16 flex-shrink-0 overflow-hidden rounded-md  md:h-20 max-w-screen-md ">
                            <div   className=" flex items-center h-16 w-16   hover:shadow-lg">
                            <img  src={`${base_url}/image/${item.imageId}`} alt=""
                                            />
                            </div>
                            </div>
                          ) : (
                           
                              <div className=" flex text-[0.65rem] h-16 w-16 items-center">Image Not Available</div>
                           
                          )}
                        </div>

                        <div >
                        
                          <Tooltip title={item.categoryName} placement="top" arrow>
                            <div class="text-[0.65rem] font-bold ">{item.categoryName || ""}</div>
                          </Tooltip>

                        </div>

                        </div>
                        </div>
                      </CardElement>
                    );
                  })}
                  </Carousel>
                </CardWrapper>
  
   </div>
</div>
  );
}
const mapStateToProps = ({ inventory,auth }) => ({

  fetchingAllSuppliesCategory:inventory.fetchingAllSuppliesCategory,
  allSuppliesCategory: inventory.allSuppliesCategory,
  userId: auth.userDetails.userId,
  organizationId: auth.userDetails.organizationId,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {

      getAllSuppliesCatagory,


    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesListCard);

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
  //  margin-top: 1.5rem;
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


const SortButton = styled.button`
  background-color: ${(props) => (props.active ? '#007bff' : '#f8f9fa')};
  color: ${(props) => (props.active ? '#fff' : '#007bff')};
  border: 1px solid #007bff;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: ${(props) => (props.active ? '#0056b3' : '#e2e6ea')};
  }
`;
