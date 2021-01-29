import { ADD_TASK } from './actionTypes';

export const addTask = content => ({
    type: ADD_TASK,
    payload: {
        content
    }
});