import React, { Component,lazy } from "react";
import { ActionHeader } from "../../Components/Utils";
// const InventoryActionLeft =lazy(()=>import("./InventoryActionLeft"));
const InventoryActionRight=lazy(()=>import("./InventoryActionRight"))
class InventoryHeader extends Component {
  render() {
    return (
      <div>
        <ActionHeader
          // leftComponent={
          //   <InventoryActionLeft
          //     viewType={this.props.viewType}
          //     setInventoryViewType={this.props.setInventoryViewType}
          //   />
          // }
          rightComponent={<InventoryActionRight addSuplrInventoryDrwr={this.props.addSuplrInventoryDrwr} handleAddSuplrInventory={this.props.handleAddSuplrInventory}/>}
        />
      </div>
    );
  }
}

export default InventoryHeader;
