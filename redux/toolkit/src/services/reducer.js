import {authSlice} from "./auth/reducer";
import {tasksSlice} from "./tasks/reducer";
import {combineSlices} from "@reduxjs/toolkit";

export const rootReducer = combineSlices(authSlice, tasksSlice);

// {
//     tasks: {
//         tasks: []
//     },
//     auth: {
//         user: null
//     }
// }