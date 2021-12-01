import React from "react";
import { useSelector } from "react-redux";
import { selectAllEmployees } from "../../features/employeeSlice";
import { nanoid } from 'nanoid'

import { Worker } from "./worker";

export const Table = (props) => {
    const workers = useSelector(selectAllEmployees);

    //___Location filter logic
    let filteredListByLocation = workers.filter(single => 
        single.location === props.locationFilter
    )

    let list = [];

    props.locationFilter === "default" ?
        list = workers : list = filteredListByLocation

    //___Department filter logic
    const filteredListByDepartment = list.filter(single =>
        single.department === props.departmentFilter
    )
    
    let list0 = []

    props.departmentFilter === "default" ?
    list0 = list : list0 = filteredListByDepartment

    //___Search logic
    let filteredList = list0.filter(item => {
        return item.fname.toLowerCase().includes(props.searchFilter.toLowerCase()) 
        || item.lname.toLowerCase().includes(props.searchFilter.toLowerCase())
    })

    //___Checking if table is not empty
    if(Object.keys(filteredList).length === 0){
        console.log("No employee matches selected criteria")
    }

    let displayTable = Object.keys(filteredList).length !== 0
    
    return(
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Department</th>
                        <th>Position</th>
                        <th>Location</th>
                        <th>Email</th>
                        <th>Date added</th>
                        <th></th>
                    </tr>
                </thead>
            </table>
                {displayTable ? 
                    <table>
                    <tbody>
                        {
                        filteredList.map(worker => 
                        <Worker 
                        fname={worker.fname}
                        lname={worker.lname}
                        department={worker.department}
                        position={worker.position}
                        location={worker.location}
                        email={worker.email}
                        dateAdded={worker.dateAdded}
                        itemId={worker.id}
                        key={nanoid()}
                        />) }
                    </tbody>
                    </table>
                : 
                <div className="tableErr"><h2>No employee matches selected criteria</h2></div>}
           
        </div>
    )
}