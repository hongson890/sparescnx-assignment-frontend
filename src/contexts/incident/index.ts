import CreateDataContext from '../CreateDataContext'
import { incidentReducer, initialState } from './incident.reducers'
import { getAllUser, createIncident } from './incident.action'

export const { Provider, Context } = CreateDataContext(
    incidentReducer,
    { getAllUser, createIncident },
    initialState,
)
