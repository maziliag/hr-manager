import React, { useState } from "react";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

//___Selectors
import { selectAllLocations } from "../../features/locationsSlice";
import { selectAllDepartments } from "../../features/departmentsSlice";

//___Components
import { AddNewEmployee } from "./addNewEmployee";
import { EditLocations } from "./editLocations";
import { EditDepartments } from "./editDepartments";

import { DropdownItem } from "../header/dropdownItem";

import { Table } from "../table/table";


export const Menu = () => {

//____Display whole list
const defaultValue = "default"


//___header consts
const [searchField, setSearchField] = useState("")
const [locationField, setLocationField] = useState(defaultValue)
const [departmentField, setDepartmentField] = useState(defaultValue)

const locationsDropdown = useSelector(selectAllLocations);
const departmentsDropdown = useSelector(selectAllDepartments);

//___Local states
    const [employeeActive, setEmployeeActive] = useState(false);
    const [locationsActive, setLocationsActive] = useState(false)
    const [departmentsActive, setDepartmentsActive] = useState(false);

//___Options windows switching logic
    const handleClick = (e) => {
        if(e.target.value === "employee"){
            setEmployeeActive(!employeeActive);
            setLocationsActive(false);
            setDepartmentsActive(false);
        }
        if(e.target.value === "locations"){
            setEmployeeActive(false);
            setLocationsActive(!locationsActive);
            setDepartmentsActive(false);
        }
        if(e.target.value === "departments"){
            setEmployeeActive(false);
            setLocationsActive(false);
            setDepartmentsActive(!departmentsActive);
        }
    }

//____ Location filter logic

    const handleLocationChange = e => {
       setLocationField(e.target.value)
    }

    const handleDepartmentsChange = e => {
        setDepartmentField(e.target.value)
    }

    const handleSearchChange = e => {
        setSearchField(e.target.value)
    }



//____
    return (
        <div className="menu">
            <div className="menuWrapperFlex">
            <div className="editDiv">
            <button 
                type="button" 
                className="menuBttn"
                value="employee"
                onClick={handleClick}>
                Add new employee
            </button>               
            <button 
                type="button" 
                className="menuBttn"
                value="locations"
                onClick={handleClick}>
                Edit locations
            </button>       
            <button 
                type="button" 
                className="menuBttn"
                value="departments"
                onClick={handleClick}>
                Edit departments
            </button>
            </div>

            <div className="filterDiv">
                <select 
                    name="location" 
                    id="location" 
                    className="inputField"
                    value={locationField}
                    onChange={handleLocationChange}
                    >
                    <option value={defaultValue}>All locations</option>
                        {locationsDropdown.map(item =>  
                        <DropdownItem 
                            name={item.city}
                            value={item.id}
                            key={nanoid()}/>
                        )}
                </select>
                <select 
                    name="department" 
                    id="department" 
                    className="inputField"
                    value={departmentField}
                    onChange={handleDepartmentsChange}
                    >
                    <option value={defaultValue}>All departments</option>
                        {departmentsDropdown.map(item => 
                        <DropdownItem 
                            name={item.department}
                            value={item.id}
                            key={nanoid()}/>
                        )}
                </select>
                <input 
                    type="search" 
                    id="name-search" 
                    name="search"
                    aria-label="Search for people by name"
                    autoComplete="off"
                    className="searchField"
                    value={searchField}
                    onChange={handleSearchChange}
                    placeholder="Type a name"/>
                </div>
                </div>


            <div className={employeeActive ? null : "collapsable"}><AddNewEmployee/></div>
            <div className={locationsActive ? null : "collapsable"}><EditLocations/></div>
            <div className={departmentsActive ? null : "collapsable"}><EditDepartments/></div>
        
        <Table 
            locationField={locationField}
            locationFilter={locationField}
            departmentFilter={departmentField}
            searchFilter={searchField}
            />
            
        </div>
    )
}