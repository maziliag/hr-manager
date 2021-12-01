import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    term: "",
    location: "",
    department: ""
    }

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        searchUpdated:{
            reducer(state, action) {
                state = [...state.term, state.term = action.payload]
            }
        },
        locationFiltered:{
            reducer(state, action) {
                state.location = action.payload
                //state = [...state.location, state.location = action.payload]
            }
        }
    }
})

export const { searchUpdated, locationFiltered } = filterSlice.actions

export default filterSlice.reducer 

export const selectFiltered = state => state.filter.term
export const selectLocation = state => state.filter.location