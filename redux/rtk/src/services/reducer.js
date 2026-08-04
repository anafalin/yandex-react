import {authSlice} from "./auth/reducer";
import {combineSlices} from "@reduxjs/toolkit";
import {tasksApi} from "./tasks/api";

export const rootReducer = combineSlices(
    authSlice, tasksApi
);

// {
//     tasks: {
//         tasks: []
//     },
//     auth: {
//         user: null
//     }
// }