import axios from 'axios'
import { BACKEND_SERVICE_URL } from './gateway.config'
import { Incident } from '../models/Incident'

async function createIncident(incident: Incident) {
    let result = await axios.request({
        url: `${BACKEND_SERVICE_URL}/incidents/create`,
        data: incident,
        method: 'POST',
    })
    return result
}

async function searchIncident(inputSearch: string) {
    let result = await axios.request({
        url: `${BACKEND_SERVICE_URL}/incidents/search`,
        data: inputSearch,
        method: 'POST',
    })
    return result
}

export const incidentService = {
    createIncident,
}
