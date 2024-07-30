import React, { Component } from "react";
import PoDetailsActionHeaderLeft from "./PoDetailsActionHeaderLeft";
import { ActionHeader } from "../../../Components/Utils";

function PoDetailsHeader(props) {
    return (
        <div>
            <ActionHeader
                leftComponent={<PoDetailsActionHeaderLeft poDetailsList={props.poDetailsList} />}
                rightComponent={<></>}
            />
        </div>
    );
}


export default PoDetailsHeader;
