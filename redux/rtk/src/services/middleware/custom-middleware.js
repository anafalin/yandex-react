import {ADD_TASK_SUCCESS} from "../tasks/actions";

export const customMiddleware = () => {
    return store => {
        return next => {
            return action => {

                //dispatch => {
                    //     console.log(`add ${content}`);
                    //     dispatch(addTask(content));
                    // }

                if (typeof action === "function") {
                    action(store.dispatch, store.getState);
                    return;
                }

                next(action);
            }
        }
    }
}