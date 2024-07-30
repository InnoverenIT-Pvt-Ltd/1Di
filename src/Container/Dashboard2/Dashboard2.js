import React from 'react'
import { MainWrapper2 } from '../../Components/UI/Elements'
import Chart1 from "./Chart1"

const Dashboard2 = () => {

    const person1 = {
        fname: "silpa",
        lname: "nayak",
        fullName: function () {
            return this.fname + " " + this.lname
        }
    }
    const person2 = {
        fname: "Lipsa",
        lname: "Das"
    }
    const person3 = {
        fullName: function () {
            return this.fname + " " + this.lname
        }
    }

    console.log(person3.fullName.call(person2))

    console.log(person1.fullName.bind(person2))

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <MainWrapper2 style={{ display: "flex", justifyContent: "space-between" }}>

                    <h3 style={{
                        marginTop: "15%",
                        color: "#5170e5",
                        fontSize: "16px",
                        fontWeight: "600"
                    }}>Projects and their completion status</h3>
                    <Chart1 />
                </MainWrapper2>
                <MainWrapper2 style={{ display: "flex", justifyContent: "space-between" }}>

                    <h3 style={{
                        marginTop: "15%",
                        color: "#5170e5",
                        fontSize: "16px",
                        fontWeight: "600"
                    }}>Top 5 Vendors by Spend and their Performance by Project</h3>
                    <Chart1 /></MainWrapper2>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <MainWrapper2 style={{ display: "flex", justifyContent: "space-between" }}>

                    <h3 style={{
                        marginTop: "15%",
                        color: "#5170e5",
                        fontSize: "16px",
                        fontWeight: "600"
                    }}>Budgeted Spend by Project vs Incurred Spend MTD, YTD</h3>
                    <Chart1 />
                </MainWrapper2>
                <MainWrapper2 style={{ display: "flex", justifyContent: "space-between" }}>

                    <h3 style={{
                        marginTop: "15%",
                        color: "#5170e5",
                        fontSize: "16px",
                        fontWeight: "600"
                    }}>Key Decisions from Last Monthly Review Meeting</h3>
                    <Chart1 />
                </MainWrapper2>
            </div>
        </div>
    )
}

export default Dashboard2
