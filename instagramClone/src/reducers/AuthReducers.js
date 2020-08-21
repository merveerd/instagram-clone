import {
    LOGIN_START, //For loading if needed
    LOGIN_SUCCESS,

} from '../actions/types.js';

const INITIAL_STATE = {
    user: null
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {


        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload
            };


        default:
            return state;
    }
};