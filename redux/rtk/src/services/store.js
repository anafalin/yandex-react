import {rootReducer} from "./reducer";
import { configureStore as createStore } from "@reduxjs/toolkit";
import {tasksApi} from "./tasks/api";

export const configureStore = (initialState) => {
    const store = createStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware().concat(tasksApi.middleware);
        }
    })

    return store;
}