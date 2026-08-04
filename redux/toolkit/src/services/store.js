import {rootReducer} from "./reducer";
import { configureStore as createStore } from "@reduxjs/toolkit";

export const configureStore = (initialState) => {
    const store = createStore({
        reducer: rootReducer,
        preloadedState: initialState,
    })

    return store;
}