import 'react-toastify/dist/ReactToastify.css'
import {
    CREATE_INCIDENT,
    CREATE_INCIDENT_FAIL,
    CREATE_INCIDENT_SUCCESS,
    DELETE_INCIDENT_FAIL,
    DELETE_INCIDENT_SUCCESS,
    GET_ALL_USER_SUCCESS,
    SEARCH_INCIDENT,
    SEARCH_INCIDENT_FAIL,
    SEARCH_INCIDENT_SUCCESS,
} from './incident.constants'
import { userService } from '../../services/users.services'
import { incidentService } from '../../services/incident.services'
import { Incident } from '../../models/Incident'
import { Alert } from '../../components/Alert'
import history from '../../components/History'
import { IncidentCreatedDTO } from '../../models/IncidentCreatedDTO'

export const getAllUser = (dispatch: any) => () => {
    userService
        .getAll()
        .then(result => {
            dispatch({ type: GET_ALL_USER_SUCCESS, userList: result })
        })
        .catch(error => {
            console.log(error)
        })
}

export const createIncident = (dispatch: any) => (
    incident: IncidentCreatedDTO,
) => {
    dispatch({ type: CREATE_INCIDENT })
    incidentService
        .createIncident(incident)
        .then(result => {
            dispatch({ type: CREATE_INCIDENT_SUCCESS, message: result })
            Alert.success('Create incident successfully')
            history.push(`/incident/list`)
        })
        .catch(error => {
            dispatch({ type: CREATE_INCIDENT_FAIL, message: error })
            Alert.error('Create incident fail')
        })
}

export const searchIncident = (dispatch: any) => (
    input: string,
    page: number,
    limit: number,
    orderBy: string[],
) => {
    dispatch({ type: SEARCH_INCIDENT })
    search(dispatch, input, page, limit, orderBy)
}

function search(
    dispatch: any,
    input: string,
    page: number,
    limit: number,
    orderBy: string[],
) {
    incidentService
        .searchIncident(input, page, limit, orderBy)
        .then(result => {
            dispatch({
                type: SEARCH_INCIDENT_SUCCESS,
                incidentList: result.data,
            })
        })
        .catch(error => {
            dispatch({ type: SEARCH_INCIDENT_FAIL, message: error })
            Alert.error('Search incident fail')
        })
}

export const deleteIncidents = (dispatch: any) => (
    deletedIds: string[],
    input: string,
    page: number,
    limit: number,
    orderBy: string[],
) => {
    incidentService
        .deleteIncidents(deletedIds)
        .then(result => {
            dispatch({
                type: DELETE_INCIDENT_SUCCESS,
            })
            Alert.success('Delete incident successfully')
            search(dispatch, input, page, limit, orderBy)
        })
        .catch(error => {
            dispatch({
                type: DELETE_INCIDENT_FAIL,
            })
            Alert.error('Delete incident fail')
        })
}
