import {
    CREATE_INCIDENT,
    CREATE_INCIDENT_FAIL,
    CREATE_INCIDENT_SUCCESS,
    SEARCH_INCIDENT,
    SEARCH_INCIDENT_FAIL,
    SEARCH_INCIDENT_SUCCESS,
} from './incident.constants'

const emptyList: any[] = []
export const initialState = {
    userList: emptyList,
    incidentList: emptyList,
    totalRow: 0,
    isLoading: false,
    message: null,
    isError: false,
    triggerSearching: false,
}

export const incidentReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CREATE_INCIDENT:
            return {
                ...state,
                isLoading: true,
            }
        case CREATE_INCIDENT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                message: action.message,
            }
        case CREATE_INCIDENT_FAIL:
            return {
                ...state,
                isLoading: false,
                isError: true,
                message: action.message,
            }
        case SEARCH_INCIDENT:
            return {
                ...state,
                isLoading: true,
            }
        case SEARCH_INCIDENT_SUCCESS:
            return {
                ...state,
                incidentList: action.incidentList,
                totalRow: action.totalRow,
                isLoading: false,
                isError: false,
                message: action.message,
            }
        case SEARCH_INCIDENT_FAIL:
            return {
                ...state,
                isLoading: false,
                isError: true,
                message: action.message,
            }
        default:
            return state
    }
}
