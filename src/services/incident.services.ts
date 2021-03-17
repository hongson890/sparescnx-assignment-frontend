import axios from 'axios'
import { BACKEND_SERVICE_URL } from './gateway.config'
import { Incident } from '../models/Incident'
import { IncidentCreatedDTO } from '../models/IncidentCreatedDTO'
import { HttpServices } from './http.services'

async function createIncident(incident: IncidentCreatedDTO) {
    return HttpServices.doPost(`${BACKEND_SERVICE_URL}/incidents/create`, incident)
}

async function searchIncident(
    incidentType: string,
    page: number,
    limit: number,
    sortedBy: string,
) {
    const data = {
        incidentType,
        page,
        limit,
        sortedBy,
    }

    return HttpServices.doPost(`${BACKEND_SERVICE_URL}/incidents/search`, data)
}

async function deleteIncidents(deletedIds: string[]) {
    return HttpServices.deDelete(
        `${BACKEND_SERVICE_URL}/incidents/delete`,
        deletedIds,
    )
}

async function getIncidentDetail(id: string) {
    return HttpServices.doGet(`${BACKEND_SERVICE_URL}/incidents/${id}`)
}

async function updateIncident(incident: Incident) {
    return HttpServices.doPut(`${BACKEND_SERVICE_URL}/incidents/${incident._id}`, incident)
}

export const incidentService = {
    createIncident,
    searchIncident,
    deleteIncidents,
    getIncidentDetail,
    updateIncident,
}
