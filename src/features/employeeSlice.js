import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: nanoid(),
        fname: "Andzelika",
        lname: "Baceviciute",
        department: "IT",
        position: "Security Analyst",
        location: "Ukmerge",
        email: "bace@omen.com",
        dateAdded: "25/11/2021"
    },
    {   
        id: nanoid(),
        fname: "Alanas",
        lname: "Mickus",
        department: "IT",
        position: "Front-end developer",
        location: "Alytus",
        email: "mickusa0@omen.com",
        dateAdded: "26/11/2021"
    },
    {   
        id: nanoid(),
        fname: "Gintaras",
        lname: "Maziliauskas",
        department: "IT",
        position: "Front-end developer",
        location: "Kaunas",
        email: "gynce602@omen.com",
        dateAdded: "26/11/2021"
    },
    {
        id: nanoid(),
        fname: "Zostkas",
        lname: "Darbuotojas",
        department: "Marketing",
        position: "Social media assistant",
        location: "Vilnius",
        email: "ZostkasD@omen.com",
        dateAdded: "25/11/2021"
    },
    {
        id: nanoid(),
        fname: "Lukse",
        lname: "Museika",
        department: "Marketing",
        position: "Senior Marketing analyst",
        location: "Vilnius",
        email: "akyragerapuska@omen.com",
        dateAdded: "25/11/2021"
    },
    {
        id: nanoid(),
        fname: "Ezys",
        lname: "Velnes",
        department: "Logistics",
        position: "Sestas",
        location: "Kaunas",
        email: "prijomas@omen.com",
        dateAdded: "25/11/2021"
    },
    {
        id: nanoid(),
        fname: "Perpalik",
        lname: "Steam",
        department: "HR",
        position: "Rust server analyst",
        location: "Alytus",
        email: "x3only@omen.com",
        dateAdded: "25/11/2021"
    },
]


const employeeSlice = createSlice({
    name: "employees",
    initialState,
    reducers: {
        employeeAdded:{
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(fname, lname, department, email, position, location) {
                return {
                    payload: {
                        id: nanoid(),
                        dateAdded: new Date().toLocaleString().split(',')[0],
                        fname, lname, department, email, position, location
                    }
                }
            }
        },
        employeeDeleted:{
            reducer(state, action) { 
                return state.filter(item => item.id !== action.payload) 
            }
        },
    }
})

export const { employeeAdded, employeeDeleted, listFiltered } = employeeSlice.actions

export default employeeSlice.reducer

export const selectAllEmployees = state => state.employees
