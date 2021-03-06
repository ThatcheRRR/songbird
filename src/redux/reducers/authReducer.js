import {
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    SIGNUP_SUCCESS,
    RESET_SIGN,
    RESET_ERROR,
    ERROR
} from '../types/authTypes';

const initialState = {
    isLogged: false,
    isSigned: false,
    authError: '',
    userEmail: ''
};

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                authError: '',
                isLogged: true,
                userEmail: action.userEmail
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                ...initialState
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                authError: '',
                isSigned: true
            };
        case ERROR:
            return {
                ...state,
                authError: action.err.message
            };
        case RESET_SIGN:
            return {
                ...state,
                isSigned: false,
                authError: ''
            };
        case RESET_ERROR:
            return {
                ...state,
                authError: ''
            }
        default:
            return state;
    }
};
