import CreateDataContext from '../CreateDataContext'
import { incidentReducer, initialState } from './incident.reducers'
import { createIncident, searchIncident } from './incident.action'

export const { Provider, Context } = CreateDataContext(
    incidentReducer,
    { createIncident, searchIncident },
    initialState,
)
