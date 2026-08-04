import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = {
    user: null
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: {
            reducer: (state, action) => {
                state.user = action.payload;
            },
            prepare: (user) => {
                return { payload: {...user, key: nanoid() } };
            }
        }
    }
})

export const { setUser } = authSlice.actions;

