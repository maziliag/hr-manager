import React, {useState} from "react"; 
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";

import { employeeAdded } from "../../features/employeeSlice";

import { DropdownItem } from "../header/dropdownItem";

import { selectAllLocations } from "../../features/locationsSlice";
import { selectAllDepartments } from "../../features/departmentsSlice";

export const AddNewEmployee = () => {
    
    const locationsDropdown = useSelector(selectAllLocations);
    const departmentsDropdown = useSelector(selectAllDepartments);

    const dispatch = useDispatch()
 
    /* Checking for valid email */
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    /* Managing state */
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [department, setDepartment] = useState("Marketing");
    const [email, setEmail] = useState("")
    const [position, setPosition] = useState("")
    const [location, setLocation] = useState("Vilnius")

    const onFnameChange = (e) => {setFname(e.target.value)}
    const onLnameChange = (e) => {setLname(e.target.value)}
    const onDepartmentChange = (e) => {setDepartment(e.target.value)}
    const onEmailChange = (e) => {setEmail(e.target.value)}
    const onPositionChange = (e) => {setPosition(e.target.value)}
    const onLocationChange = (e) => {setLocation(e.target.value)}

    /* */
 
    const valid = fname.length !== 0 && lname.length !== 0 && position.length !==0

    const onSubmit = (e) => {
        e.preventDefault();
        if(regex.test(email) && valid){
            dispatch(employeeAdded(fname, lname, department, email, position, location))
            setFname("")
            setLname("")
            setEmail("")
            setPosition("")
        } else if(!regex.test(email)){
            alert("Please enter valid email")
        } else {
            alert("Please fill in all fields")
        }
    }

    return(
        <form className="employeeForm">
           <table>
               <tbody>
                <tr>
                    <th>
                        <input 
                        type="text" 
                        id="fname" 
                        name="fname" 
                        placeholder="First Name" 
                        className="searchField"
                        value={fname}
                        onChange={onFnameChange}
                        />
                    </th>
                    <th>
                    <input
                        type="text" 
                        id="lname" 
                        name="lname" 
                        placeholder="Last Name" 
                        className="searchField"
                        value={lname}
                        onChange={onLnameChange}/>
                    </th>
                </tr>
                <tr>
                <th>
                    <input
                        type="text" 
                        id="position" 
                        name="position" 
                        placeholder="Position" 
                        className="searchField"
                        value={position}
                        onChange={onPositionChange}/>
                    </th>
                    <th>
                    <input required
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Email"  
                        className="searchField"
                        value={email}
                        onChange={onEmailChange}/>
                    </th>
                </tr>
                <tr>
                <th>
                    <select 
                        name="department" 
                        id="department" 
                        className="inputField"
                        value={department}
                        onChange={onDepartmentChange}>
                        {departmentsDropdown.map(item => 
                            <DropdownItem 
                            name={item.department}
                            value={item.id}
                            key={nanoid()}/>
                            )}
                    </select>
                    </th>
                    <th>
                    <select 
                        name="location" 
                        id="location" 
                        className="inputField"
                        value={location}
                        onChange={onLocationChange}>
                            {locationsDropdown.map(item => 
                            <DropdownItem 
                            name={item.city}
                            value={item.id}
                            key={nanoid()}/>
                            )}
                    </select>
                    </th>
                    
                </tr>
                <tr>   
                </tr>
                
                <tr>
                    <th><input type="button" value="Submit" className="addEmployeeBtn" onClick={onSubmit}/></th>
                </tr>
               </tbody>
           </table> 
        </form>
        )
}