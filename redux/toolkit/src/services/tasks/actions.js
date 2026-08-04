import {addTask as addTaskApi, deleteTaskById, getProjectTasks} from "../../utils/todoist-api";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const addTask = createAsyncThunk(
    "tasks/addTask",
    async (content, thunkAPI ) => {
        return await addTaskApi(content);
    }
)

export const removeTask = createAsyncThunk(
    "tasks/removeTask",
    async (id) => {
        return deleteTaskById(id);
    }
)

export const loadTasks = createAsyncThunk(
    "tasks/loadTasks",
    async () => {
        return getProjectTasks();
    }
)

export const logAddTask = (content) => dispatch => {
    console.log(`add ${content}`);
    dispatch(addTask(content));
}