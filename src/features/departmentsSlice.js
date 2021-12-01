import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {
        id: "IT",
        department: "IT"
    },
    {
        id: "Marketing",
        department: "Marketing"
    },
    {
        id: "HR",
        department: "HR"
    },
    {
        id: "Logistics",
        department: "Logistics"
    },
    {
        id: "Careers",
        department: "Careers"
    },
    {
        id: "Design",
        department: "Design"
    }
]

const departmentsSlice = createSlice({
    name: "departments",
    initialState,
    reducers: {
        departmentAdded:{
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(department) {
                return {
                    payload: {
                        id: department,
                        department
                    }
                }
            }
        },
        departmentDeleted:{
            reducer(state, action) {
                return state.filter(item => item.department !== action.payload)
            }
        }
    }
})

export const { departmentAdded, departmentDeleted } = departmentsSlice.actions

export default departmentsSlice.reducer 

export const selectAllDepartments = state => state.departments