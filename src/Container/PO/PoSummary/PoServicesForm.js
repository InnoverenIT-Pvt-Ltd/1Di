import { Input } from 'antd'
import React from 'react'

const PoServicesForm = () => {
    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "column", marginTop: "2px" }}>
            <div style={{ display: "flex", justifyContent: "end" }}>
                <div style={{
                    display: "flex",
                    width: "25%",
                    justifyContent: "space-evenly",
                    fontSize: "1.2em",
                    fontWeight: "600",
                    color: "red"
                }}>
                    <div>
                        DIRECT
                    </div>
                    <div>
                        INDIRECT
                    </div>
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: "1.3em", fontWeight: "600" }}>A. NATURE OF THE SERVICE/SUBCONTRACT</div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "5px" }}>
                    <div style={{ width: "75%" }}>1. TOTAL NUMBER OF PURCHASE REQUISITION LINE ITEMS  ISSUED FOR THIS PROJECT TILL DATE</div>
                    <div style={{ width: "12%" }}><Input placeholder='direct' /></div>
                    <div style={{ width: "12%" }}><Input placeholder='indirect' /></div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ width: "75%" }}>2. NUMBER OF WORK ORDERS ISSUED TILL DATE </div>
                    <div style={{ width: "12%" }}><Input placeholder='direct' /></div>
                    <div style={{ width: "12%" }}><Input placeholder='indirect' /></div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ width: "75%" }}>3. BALANCE PLANNED NUMBER OF WORK  ORDERS FOR THIS PROJECT </div>
                    <div style={{ width: "12%" }}><Input placeholder='direct' /></div>
                    <div style={{ width: "12%" }}><Input placeholder='indirect' /></div>
                </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", marginTop: "10px" }}>
                <div style={{ fontSize: "1.3em", fontWeight: "600" }}>B. WORK ORDERS PROGRESS</div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "5px" }}>
                    <div style={{ width: "75%" }}>1. NO OF ORDERS PENDING FOR KICK OFF MEETING</div>
                    <div style={{ width: "12%" }}><Input placeholder='direct' /></div>
                    <div style={{ width: "12%" }}><Input placeholder='indirect' /></div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ width: "75%" }}>2. NO OF ORDERS PENDING FOR SITE ACCESS CLEARANCE </div>
                    <div style={{ width: "12%" }}><Input placeholder='direct' /></div>
                    <div style={{ width: "12%" }}><Input placeholder='indirect' /></div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ width: "75%" }}>3. NO OF ORDERS PENDING MOBILISATION</div>
                    <div style={{ width: "12%" }}><Input placeholder='direct' /></div>
                    <div style={{ width: "12%" }}><Input placeholder='indirect' /></div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "5px" }}>
                    <div style={{ width: "75%" }}>4. NO OF ORDERS UNDER EXECUTION AT SITE</div>
                    <div style={{ width: "12%" }}><Input placeholder='direct' /></div>
                    <div style={{ width: "12%" }}><Input placeholder='indirect' /></div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ width: "75%" }}>5. NO OF ORDERS READY FOR WORK COMPLETION </div>
                    <div style={{ width: "12%" }}><Input placeholder='direct' /></div>
                    <div style={{ width: "12%" }}><Input placeholder='indirect' /></div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ width: "75%" }}>6. NO OF ORDERS UNDER FINAL HANDOVER SUBMISSION </div>
                    <div style={{ width: "12%" }}><Input placeholder='direct' /></div>
                    <div style={{ width: "12%" }}><Input placeholder='indirect' /></div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "5px" }}>
                    <div style={{ width: "75%" }}>7. NO OF ORDERS PENDING FOR WORK COMPLETION CERTIFICATE ISSUANCE</div>
                    <div style={{ width: "12%" }}><Input placeholder='direct' /></div>
                    <div style={{ width: "12%" }}><Input placeholder='indirect' /></div>
                </div>

            </div>

        </div>
    )
}

export default PoServicesForm
