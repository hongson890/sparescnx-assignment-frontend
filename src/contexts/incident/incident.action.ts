import 'react-toastify/dist/ReactToastify.css'
import {
    CREATE_INCIDENT,
    CREATE_INCIDENT_FAIL,
    CREATE_INCIDENT_SUCCESS,
    SEARCH_INCIDENT,
    SEARCH_INCIDENT_FAIL,
    SEARCH_INCIDENT_SUCCESS,
} from './incident.constants'
import { incidentService } from '../../services/incident.services'
import { Alert } from '../../components/Alert'
import history from '../../components/History'
import { IncidentCreatedDTO } from '../../models/IncidentCreatedDTO'

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
    incidentType: string,
    page: number,
    limit: number,
    sortedBy: string,
) => {
    dispatch({ type: SEARCH_INCIDENT })
    incidentService
        .searchIncident(incidentType, page, limit, sortedBy)
        .then(result => {
            const data = result.rows.map((row: any) => row.value)
            dispatch({
                type: SEARCH_INCIDENT_SUCCESS,
                incidentList: data,
                totalRow: result.total_rows,
            })
        })
        .catch(error => {
            dispatch({ type: SEARCH_INCIDENT_FAIL, message: error })
            Alert.error('Search incident fail')
        })
}
