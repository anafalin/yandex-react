import {addTask as addTaskApi, deleteTaskById, getProjectTasks} from "../../utils/todoist-api";

export const ADD_TASK_SUCCESS = "ADD_TASK_SUCCESS";
export const REMOVE_TASK_SUCCESS = "REMOVE_TASK_SUCCESS";
export const TASKS_LOAD_SUCCESS = "TASKS_LOAD_SUCCESS";
export const TASKS_LOAD_ERROR = "TASKS_LOAD_ERROR";
export const TASKS_LOADING = "TASKS_LOADING";

export const addTask = (content) => dispatch => {
    return addTaskApi(content).then(response => {
        dispatch({
            type: ADD_TASK_SUCCESS,
            payload: response,
        })
    })
}

export const removeTask = (id) => dispatch => {
    return deleteTaskById(id).then(response => {
        dispatch({
            type: REMOVE_TASK_SUCCESS,
            payload: id,
        })
    });
}

export const loadTasks = () => dispatch => {
    dispatch({
        type: TASKS_LOADING,
    });
    return getProjectTasks().then(response => {
        dispatch({
            type: TASKS_LOAD_SUCCESS,
            payload: response,
        })
    }).catch(error => {
        dispatch({
            type: TASKS_LOAD_ERROR,
            payload: error.message,
        })
    })
}

export const logAddTask = (content) => dispatch => {
    console.log(`add ${content}`);
    dispatch(addTask(content));
}