import { configureStore } from "@reduxjs/toolkit";

import employeeReducer from "../features/employeeSlice";
import locationsReducer from "../features/locationsSlice";
import departmentsReducer from "../features/departmentsSlice";
import filterReducer from "../features/filterSlice";

export default configureStore({
    reducer: {
        employees: employeeReducer,
        locations: locationsReducer,
        departments: departmentsReducer,
        filter: filterReducer
    }
});