import 'react-toastify/dist/ReactToastify.css'
import {
    CREATE_INCIDENT,
    CREATE_INCIDENT_FAIL,
    CREATE_INCIDENT_SUCCESS,
    GET_ALL_USER_SUCCESS,
} from './incident.constants'
import { userService } from '../../services/users.services'
import { incidentService } from '../../services/incident.services'
import { Incident } from '../../models/Incident'
import { Alert } from '../../components/Alert'
import history from '../../components/History'

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

export const createIncident = (dispatch: any) => (incident: Incident) => {
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
