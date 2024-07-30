import React, { Component,lazy} from "react";
const CustomerCategoryCard =lazy(()=> import("../Container/Customer/Cart/Child/Cards/CustomerCategoryCard"));
// const CustomerDetailCard =lazy(()=> import("./CustomerCards/CustomerDetailCard"));
// const CustomerExtraDetailCard =lazy(()=> import("./CustomerCards/CustomerExtraDetailCard"));
// const CustomerTopicOfIntrest =lazy(()=> import("../CustomerDetail/CustomerCards/CustomerTopicOfInterest"));
class CustomerMainAppLeft extends Component {
  render() {
    const { categoriesPrds,handleActiveClick,activeClick } = this.props;
    return (
      <>
        <div class=" flex flex-col">
          <CustomerCategoryCard categoriesPrds={categoriesPrds} handleActiveClick={handleActiveClick} activeClick={activeClick}/>
          {/* <CustomerExtraDetailCard customer={customer} />         
          <CustomerDetailCard customer={customer} /> */}
        </div>
      </>
    );
  }
}
export default CustomerMainAppLeft;
