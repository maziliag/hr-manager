import React from "react";
import { useDispatch } from "react-redux";

import { employeeDeleted } from "../../features/employeeSlice";

export const Worker = (props) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        if(window.confirm(`Do you want to delete ${props.fname}?`)){
            dispatch(employeeDeleted(props.itemId))
        } else {
            return
        }
    }
    return (
    <tr>
        <th>{props.fname}</th>
        <th>{props.lname}</th>
        <th>{props.department}</th>
        <th>{props.position}</th>
        <th>{props.location}</th>
        <th>{props.email}</th>
        <th>{props.dateAdded}</th>
        <th className="delRow">
            <button type="button" onClick={handleClick}>
                Delete
            </button>
        </th>
   </tr>
    )
}