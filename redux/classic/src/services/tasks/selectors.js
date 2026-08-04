import {createSelector} from "reselect";

export const getAllTasks = state => state.tasks.tasks;

export const getTasksWithOne = createSelector(
    getAllTasks,
    tasks => tasks.filter(task => task.content.includes("1"))
);