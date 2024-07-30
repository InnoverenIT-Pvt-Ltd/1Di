import React, { Component,lazy} from "react";
import { ActionHeader } from "../../Components/Utils";
const OrderSupplierActionLeft=lazy(()=> import("./OrderSupplierActionLeft"));
// const TestActionRight=lazy(()=> import("./TestActionRight"));

function OrderSupplierHeader (props) {
 
    
    return (
      <div>
        <ActionHeader
          leftComponent={
            <OrderSupplierActionLeft
            clickedTab={props.clickedTab}
            setClickedTab={props.setClickedTab}
            />
          }
        //   rightComponent={
        //     <TestActionRight
        //     />
        //   }
        />
      </div>
    );
  
}

export default OrderSupplierHeader;
