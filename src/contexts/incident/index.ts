import CreateDataContext from '../CreateDataContext'
import { incidentReducer, initialState } from './incident.reducers'
import {
    getAllUser,
    createIncident,
    searchIncident,
    deleteIncidents,
} from './incident.action'

export const { Provider, Context } = CreateDataContext(
    incidentReducer,
    { getAllUser, createIncident, searchIncident, deleteIncidents },
    initialState,
)
