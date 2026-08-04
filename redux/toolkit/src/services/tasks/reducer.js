import {createSlice} from "@reduxjs/toolkit";
import {addTask, loadTasks, removeTask} from "./actions";
import {createSelector} from "reselect";

const initialState = {
    tasks: [],
    loading: false,
    error: null,
};

export const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {},
    selectors: {
        getAllTasks: state => state.tasks,
        getTasksWithOne: createSelector(
            state => state.tasks,
            tasks => tasks.filter(task => task.content.includes("1"))
        ),
    },
    extraReducers: builder => {
        builder
            .addCase(addTask.fulfilled, (state, action) => {
                state.tasks.push(action.payload);
            })
            .addCase(removeTask.fulfilled, (state, action) => {
                state.tasks = state.tasks.filter(task => task.id !== action.payload);
            })
            .addCase(loadTasks.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loadTasks.fulfilled, (state, action) => {
                state.tasks = action.payload;
                state.loading = false;
            })
            .addCase(loadTasks.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            })
    }
})

export const { getAllTasks, getTasksWithOne } = tasksSlice.selectors;