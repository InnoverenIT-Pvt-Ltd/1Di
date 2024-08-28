import React, {Suspense, lazy,useEffect,useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { BundleLoader } from "../../Components/Placeholder";
import InventoryHeader from "./InventoryHeader";
import {getInventoryCartItems} from "./InventoryAction";
import {getProductByCategoryId,getCategories,getCustomerProductList} from "../Customer/CustomerAction";
import LoginSearchedData from "./LoginSearchedData";
import ProductCardListbyCategory from "../Customer/ProductCardListbyCategory";
import { Footer } from "../Customer/Footer";
const InventoryItemsCard=lazy(()=>import("./Child/InventoryItemsCard"));
const AllInventorySupplierCard=lazy(()=>import("./Child/AllInventorySupplierCard"));
const MaterialsItemCard =lazy(()=>import("./Child/MaterialsItemCard"));
const CategoriesListCard = lazy(()=>import("./Child/CategoriesListCard"));

function Inventory (props) {
  const [page, setPage] = useState(1);
  const [categoriesPrds, setCategoriesPrds] = useState([]);
  const [activeClick, setActiveClick] = useState('');
  useEffect(()=>{
    props.getInventoryCartItems(props.userId);
      },[]);


  const handleActiveClick = (categoryId) => {
    setActiveClick(categoryId);
    props.getProductByCategoryId(categoryId);
  };


  
      
    
  if (props.fetchingInventoryCartItems)
    {
      return <BundleLoader/>
    }

  return (
    <React.Fragment>
        {props.investorSerachedData.length > 0 ? (
    <LoginSearchedData
    invencartItem={props.invencartItem}
    investorSerachedData={props.investorSerachedData}
    />
  ) : (  
    <div className="overflow-x-auto h-[75vh] md:h-[92vh] scroller overflow-y-hidden">
    <div className="relative bg-[#1124AA] text-white w-wk">
     <InventoryHeader/>
     </div>
        <Suspense fallback={<BundleLoader />}>
        <div className="mt-1">
        <CategoriesListCard categoriesPrds={props.categoriesPrds}
      handleActiveClick={handleActiveClick}
      activeClick={activeClick}
      fetchingCategories={props.fetchingCategories}/>
      </div>
      <div class=" flex flex-row  w-wk">
        <div className=' flex  mt-5 '>
                   
                    <div className='flex  justify-center'>
                        <ProductCardListbyCategory productsbyCategoryId={props.productsbyCategoryId} activeClick={activeClick}/>
                  </div>
                        </div> 

           <div class="">
         
<MaterialsItemCard invencartItem={props.invencartItem}/>
       </div>
       </div>
        </Suspense>
       </div>
         )} 
      <Footer/>
    </React.Fragment>
  );
}

const mapStateToProps = ({ inventory, auth,customer }) => ({
  invencartItem: inventory.invencartItem,
  userId: auth.userDetails.userId,
 fetchingInventoryCartItems:inventory.fetchingInventoryCartItems,
 userDetails:auth.userDetails,
 investorSerachedData: customer.investorSerachedData,
 categoriesPrds:customer.categoriesPrds,
 productsbyCategoryId:customer.productsbyCategoryId,
 fetchingCategories:customer.fetchingCategories,

});
const mapDispatchToProps = (dispatch) => bindActionCreators({
  getInventoryCartItems,
  getProductByCategoryId,
  getCategories,
  getCustomerProductList

}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
