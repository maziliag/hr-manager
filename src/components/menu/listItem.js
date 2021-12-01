import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { locationDeleted } from '../../features/locationsSlice'
import { departmentDeleted } from "../../features/departmentsSlice";

import { selectAllEmployees } from "../../features/employeeSlice";

export const ListItem = (props) => {
    const dispatch = useDispatch();
    
    const workers = useSelector(selectAllEmployees);

    let locations = [];
    let departments = [];

    const handleClick = () => {
        workers.map(worker => locations.push(worker.location))
        workers.map(worker => departments.push(worker.department))

        if(locations.includes(props.name) || departments.includes(props.name)){
            alert(`${props.name} is included in the list and cannot be deleted`)
            return
        }

        if(window.confirm("Do you want to delete the element?")){
            dispatch(departmentDeleted(props.itemId));
            dispatch(locationDeleted(props.itemId)); 
            
        } else {
            return
        }
    }

    return(
        <div>
            <li className="editBtn" onClick={handleClick}>{props.name}</li>
        </div>
    )
}