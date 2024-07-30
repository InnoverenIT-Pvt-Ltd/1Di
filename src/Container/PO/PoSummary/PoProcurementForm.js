import { Input, Space } from 'antd'
import React from 'react'

const PoProcurementForm = () => {
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
                <div style={{ fontSize: "1.3em", fontWeight: "600" }}>A. NATURE OF THE MATERIAL</div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "5px" }}>
                    <div style={{ width: "75%" }}>1. TOTAL NUMBER OF PURCHASE REQUISITION PNE ITEMS  ISSUED FOR THIS PROJECT TILL DATE </div>
                    <div style={{ width: "12%" }}><Input placeholder='direct' /></div>
                    <div style={{ width: "12%" }}><Input placeholder='indirect' /></div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ width: "75%" }}>2. NUMBER OF PURCHASE ORDERS ISSUED TILL DATE </div>
                    <div style={{ width: "12%" }}><Input placeholder='direct' /></div>
                    <div style={{ width: "12%" }}><Input placeholder='indirect' /></div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ width: "75%" }}>3. BALANCE PLANNED NUMBER OF PURCHASE ORDERS FOR THIS PROJECT </div>
                    <div style={{ width: "12%" }}><Input placeholder='direct' /></div>
                    <div style={{ width: "12%" }}><Input placeholder='indirect' /></div>
                </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", marginTop: "10px" }}>
                <div style={{ fontSize: "1.3em", fontWeight: "600" }}>B. PURCHASE ORDERS PROGRESS</div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "5px" }}>
                    <div style={{ width: "75%" }}>1. NO OF ORDERS UNDER VENDOR PRINTS SUBMISSION</div>
                    <div style={{ width: "12%" }}><Input placeholder='direct' /></div>
                    <div style={{ width: "12%" }}><Input placeholder='indirect' /></div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ width: "75%" }}>2. NO OF ORDERS UNDER PLACEMENT OF SUB ORDERS </div>
                    <div style={{ width: "12%" }}><Input placeholder='direct' /></div>
                    <div style={{ width: "12%" }}><Input placeholder='indirect' /></div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ width: "75%" }}>3. NO OF ORDERS UNDER RECEIPT OF RAW MATERIAL </div>
                    <div style={{ width: "12%" }}><Input placeholder='direct' /></div>
                    <div style={{ width: "12%" }}><Input placeholder='indirect' /></div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "5px" }}>
                    <div style={{ width: "75%" }}>4. NO OF ORDERS UNDER FABRICATION & MANUFACTURING</div>
                    <div style={{ width: "12%" }}><Input placeholder='direct' /></div>
                    <div style={{ width: "12%" }}><Input placeholder='indirect' /></div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ width: "75%" }}>5. NO OF ORDERS UNDER FAT </div>
                    <div style={{ width: "12%" }}><Input placeholder='direct' /></div>
                    <div style={{ width: "12%" }}><Input placeholder='indirect' /></div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ width: "75%" }}>6. NO OF ORDERS UNDER SHIPPING </div>
                    <div style={{ width: "12%" }}><Input placeholder='direct' /></div>
                    <div style={{ width: "12%" }}><Input placeholder='indirect' /></div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "5px" }}>
                    <div style={{ width: "75%" }}>7. PARTIALLY DELIVERED</div>
                    <div style={{ width: "12%" }}><Input placeholder='direct' /></div>
                    <div style={{ width: "12%" }}><Input placeholder='indirect' /></div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ width: "75%" }}>8. NO OF ORDERS RECEIVED AT  STORES </div>
                    <div style={{ width: "12%" }}><Input placeholder='direct' /></div>
                    <div style={{ width: "12%" }}><Input placeholder='indirect' /></div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ width: "75%" }}>9. NO OF ORDERS RECEIVED AT SITE </div>
                    <div style={{ width: "12%" }}><Input placeholder='direct' /></div>
                    <div style={{ width: "12%" }}><Input placeholder='indirect' /></div>
                </div>
            </div>

        </div>
    )
}

export default PoProcurementForm
