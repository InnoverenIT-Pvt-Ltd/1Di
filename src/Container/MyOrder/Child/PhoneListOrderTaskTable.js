import React, { useState, useEffect, useMemo } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getTaskByPhoneId } from "../MyOrderAction";

function PhoneListOrderTaskTable(props) {
     useEffect(() => {
        props.getTaskByPhoneId(props.RowData.phoneId)
    }, []);
    

    return (
        <>
        <div>
            {props.taskByPhone.map((item) => {
                    return (
                        <div class="cursor-pointer w-[25%] flex justify-center ">
                            <div class="basis-[85%]">
                                {item.taskName}
                            </div>
                            <div>
                                {/* <Popconfirm
                                    title="Do you want to delete?"
                                    onConfirm={() => props.deleteTaskList({}, item.phoneTaskId)}
                                >
                                    <DeleteIcon
                                        className=" !text-base cursor-pointer text-[red]"
                                    />
                                </Popconfirm> */}

                            </div>
                        </div>
                    )
                })}
           </div>
        </>
    );
}

const mapStateToProps = ({  myorder}) => ({
    taskByPhone:myorder.taskByPhone,
    fetchingTaskByPhoneId:myorder.fetchingTaskByPhoneId,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            getTaskByPhoneId
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(PhoneListOrderTaskTable);
