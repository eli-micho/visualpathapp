import { ADD_TASK } from './../actionTypes';

const INITIAL_STATE = {
    state: ''
}

const rootReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TASK: {
            const { content } = action.payload;
            return {
                ...state,
                content
            }
        }
        default: {
            return state;
        }
    }
};

export default rootReducer;
