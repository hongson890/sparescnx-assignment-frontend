import {
    SUBMIT_LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
} from './login.constants'

export const initialState = {
    isLoading: false,
    successData: null,
    failedData: null,
}

export const loginReducers = (state = initialState, action: any) => {
    switch (action.type) {
        case SUBMIT_LOGIN_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                successData: action.payload,
                isLoading: false,
            }
        case LOGIN_FAILED:
            return {
                ...state,
                failedData: action.payload,
                isLoading: false,
            }
        default:
            return state
    }
}
