import {ADD_TASK_SUCCESS, REMOVE_TASK_SUCCESS, TASKS_LOAD_ERROR, TASKS_LOAD_SUCCESS, TASKS_LOADING} from "./actions";

const initialState = {
    tasks: [],
    loading: false,
    error: null,
};

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK_SUCCESS:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            }
        case REMOVE_TASK_SUCCESS:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        case TASKS_LOADING:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case TASKS_LOAD_SUCCESS:
            return {
                ...state,
                tasks: action.payload,
                loading: false,
            }
        case TASKS_LOAD_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}