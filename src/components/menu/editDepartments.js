import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit"

import { selectAllDepartments } from "../../features/departmentsSlice";
import { departmentAdded } from "../../features/departmentsSlice";
import { ListItem } from "./listItem";

export const EditDepartments = () => {
    const [text, setText] = useState("");

    const dispatch = useDispatch();
    const allDepartments = useSelector(selectAllDepartments);

    const handleClick = () => {
        //Convert object to an array with only id values
        let depIds = [];
        allDepartments.map(dep => depIds.push(dep.id))
 
        //Check if new entry doesn't match existing id
        if(depIds.indexOf(text) === -1){
            dispatch(departmentAdded(text))
            setText("")
        } else {
            alert(`${text} already exists`)
        }}

    const handleChange = (e) => {setText(e.target.value)}

    return(
        <div className="editLocations">
            <div className="locationOptions">
                <input 
                    type="text" 
                    id="newLocation" 
                    name="newLocation" 
                    placeholder="Department name" 
                    className="searchField"
                    value={text}
                    onChange={handleChange}/>

                <button 
                    type="button" 
                    className="addBtn"
                    onClick={handleClick}>
                        New Deprtment
                </button>
            </div>

            <p>Or click on a department to delete</p>

            <div className="locationList">
                <ul>
                {allDepartments.map(item => 
                    <ListItem
                        key={nanoid()}
                        name={item.department} 
                        itemId={item.id}/>
                    )}
                </ul>
            </div>
        </div>
    )
}