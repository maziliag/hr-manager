import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit"

import { selectAllLocations } from "../../features/locationsSlice";
import { locationAdded } from "../../features/locationsSlice";
import { ListItem } from "./listItem";

export const EditLocations = () => {
    const [city, setCityName] = useState("");
    const [del, setDel] = useState(false)

    const dispatch = useDispatch();
    const cityItems = useSelector(selectAllLocations);


    const delMessage = <p className="errMsg">{`Location already exists`}</p>
    //const sccMessage = <p className="sccMsg">{`Location added`}</p>
    

    const handleClick = () => {
        //Convert object to an array with only id values
        let locIds = [];
        cityItems.map(loc => locIds.push(loc.id))
        //Check if new entry doesn't match existing id
        if(locIds.indexOf(city) === -1){
            dispatch(locationAdded(city))
            setCityName("")
            setDel(false)
        } else {
            //alert(`${city} already exists`)
            setDel(true)
        }}
    
    const handleChange = (e) => {setCityName(e.target.value)}

    return(
        <div className="editLocations">
            <div className="locationOptions">
                <input 
                    type="text" 
                    id="newLocation" 
                    name="newLocation" 
                    placeholder="Location name" 
                    className="searchField"
                    value={city}
                    onChange={handleChange}
                    />
                <button 
                    type="button" 
                    className="addBtn"
                    onClick={handleClick}>
                        New Location
                </button>
            </div>

            {del === false ? "" : delMessage}

            <p>Or click on a location to delete</p>

            <div className="locationList">
                <ul>
                {cityItems.map(item => 
                    <ListItem  
                        key={nanoid()}
                        name={item.city}
                        itemId={item.id}/>
                    )} 
                </ul>
            </div>
        </div>
    )
}