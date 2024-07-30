import React, { Component,lazy} from "react";
import { ActionHeader } from "../../../Components/Utils";
const TestActionLeft=lazy(()=> import("./TestActionLeft"));
const TestActionRight=lazy(()=> import("./TestActionRight"));

class TestHeader extends Component {
  render() {
    
    return (
      <div>
        <ActionHeader
          leftComponent={
            <TestActionLeft
          
            />
          }
          rightComponent={
            <TestActionRight
            />
          }
        />
      </div>
    );
  }
}

export default TestHeader;
