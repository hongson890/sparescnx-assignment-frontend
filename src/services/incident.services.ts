import axios from 'axios'
import { BACKEND_SERVICE_URL } from './gateway.config'
import { Incident } from '../models/Incident'
import { IncidentCreatedDTO } from '../models/IncidentCreatedDTO'

async function createIncident(incident: IncidentCreatedDTO) {
    let result = await axios.request({
        url: `${BACKEND_SERVICE_URL}/incidents/create`,
        data: incident,
        method: 'POST',
    })
    return result
}

async function searchIncident(
    input: string,
    page: number,
    limit: number,
    orderBy: string[],
) {
    let result = await axios.request({
        url: `${BACKEND_SERVICE_URL}/incidents/search`,
        data: {
            input,
            page,
            limit,
            orderBy,
        },
        method: 'POST',
    })
    return result
}

async function deleteIncidents(deletedIds: string[]) {
    let result = await axios.request({
        url: `${BACKEND_SERVICE_URL}/incidents/delete`,
        data: {
            deletedIds,
        },
        method: 'DELETE',
    })
    return result
}

async function getIncidentDetail(id: string) {
    let res = await axios.get(`${BACKEND_SERVICE_URL}/incidents/${id}`)
    return res.data
}

export const incidentService = {
    createIncident,
    searchIncident,
    deleteIncidents,
    getIncidentDetail,
}
