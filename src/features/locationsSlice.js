import { createSlice } from "@reduxjs/toolkit"
 
const initialState = [
    {
        id: "Kaunas",
        city: "Kaunas"
    },
    {
        id: "Vilnius",
        city: "Vilnius"
    },
    {
        id: "Ukmerge",
        city: "Ukmerge"
    },
    {
        id: "Alytus",
        city: "Alytus"
    },
    {
        id: "Ariogala",
        city: "Ariogala"
    }
]

const locationsSlice = createSlice({
    name: "locations",
    initialState,
    reducers: {
        locationAdded:{
            reducer(state, action) {
                state.push(action.payload) 
            },
            prepare(city) {
                return {
                    payload: {
                        id: city,
                        city
                    }
                }
            }
        },
        locationDeleted:{
            reducer(state, action) {
                return state.filter(item => item.city !== action.payload)
            }
        }
    }
})

export const { locationAdded, locationDeleted } = locationsSlice.actions

export default locationsSlice.reducer 

export const selectAllLocations = state => state.locations