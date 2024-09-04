import React from "react";
import {FlexContainer, MainWrapper} from "../../Components/UI/Layout";
import InvCard from "./InvCard";

function InventoryCart(props) {
  return (
    <>

      <FlexContainer justifyContent={"space-around"}  >
           {/* <MainWrapper width={"80%"} height={"32em"} */}
           <div
           className="bg-[#F7F8FC] shadow-2xl rounded  h-[92vh] w-wk"
           >
          <InvCard/>
           </div>
      </FlexContainer> 

    </>
  );
}

export default InventoryCart;
