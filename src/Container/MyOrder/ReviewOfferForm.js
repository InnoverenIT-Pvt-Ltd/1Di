import React, { useState, useEffect } from 'react'
import { MainForBroker } from '../../Components/UI/Layout'
import { Button, Input, Modal } from 'antd'
import { Spacer } from '../../Components/UI/Elements'
import { bindActionCreators } from 'redux'
import ReactCountryFlag from 'react-country-flag';
import { connect } from 'react-redux'


const ReviewOfferForm = (props) => {
    const buttonStyle = {
        padding: "0.25rem 0.75rem",
        textAlign: "center",
        fontSize: "15px",
        borderRadius: "14px",
        color: "#01beee",
        boxShadow: "0px 0px 2px 1px #d1dada",

    }


    return (
        <div>
            <MainForBroker>
                <div class="flex justify-between">
                    <div class="w-2/4">

                        <h4 class="font-semibold font-sansSerif text-lg">Load Information</h4>
                        <div class="flex justify-between mt-4">
                            <div>
                                <h4 class="font-semibold font-sansSerif text-lg">Pick Up</h4>

                                <div class="flex justify-between w-2/3 mt-2">
                                    <ReactCountryFlag
                                        countryCode="IN"
                                        svg
                                        style={{
                                            width: '1em',
                                            height: '1em',
                                        }}
                                        title="IN"
                                    />
                                    <h5 class='font-sansSerif text-sm font-medium'>IND,Mumbai</h5>
                                </div>

                                <h5 class='font-sansSerif text-sm font-medium mt-2'>Requested Price :  Є 1200</h5>
                            </div>
                            <div class="w-2/4">
                                <h4 class="font-semibold font-sansSerif text-lg">Delivery</h4>

                                <div class="flex justify-between w-1/3 mt-2">
                                    <ReactCountryFlag
                                        countryCode="US"
                                        svg
                                        style={{
                                            width: '1em',
                                            height: '1em',
                                        }}
                                        title="US"
                                    />
                                    <h5 class='font-sansSerif text-sm font-medium '>US,California</h5>
                                </div>

                                <h5 class='font-sansSerif text-sm font-medium mt-2'>Recommended Price :  Є 1230</h5>
                            </div>
                        </div>

                        <div class="mt-4">
                            <h5 class='font-sansSerif text-sm font-medium '>Payment Terms Standard (7 days)</h5>

                            <h5 class='font-sansSerif text-sm font-medium mt-2'>Documents</h5>

                            <h5 class='font-sansSerif text-sm font-medium mt-2'>Comments: Please check the review</h5>
                            <Spacer />

                        </div>
                    </div>
                    <div className=' w-5/12'>
                        <h4 class="font-semibold font-sansSerif text-lg">Offers</h4>
                        <div>
                            <div
                                class="mt-3 w-full flex justify-between p-1 text-sm font-medium rounded-xl items-center"
                                style={{
                                    border: "1px solid lightgrey",
                                    borderLeft: "17px solid #5986FB"
                                }}
                            >
                                Offer : Є 234
                                <Button style={buttonStyle}>
                                    <label class="font-sansSerif text-sm">See details</label>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div >
            </MainForBroker >
        </div >
    )
}

const mapStateToProps = ({ auth, requirement }) => ({

});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {

        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(ReviewOfferForm);


