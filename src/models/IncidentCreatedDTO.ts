import { IncidentType } from '../constants/IncidentType'
import { IncidentStatus } from '../constants/IncidentStatus'
import { Incident } from "./Incident";

export class IncidentCreatedDTO {
    constructor(incident?: Incident) {
        if (incident) {
            this.name = incident.name
            this.type = incident.type
            this.status = incident.status
            this.createdAt = incident.createdAt
            this.createdBy = incident.createdBy
            this.note = incident.note
            this.userId = incident.userId
        }
    }

    name?: string

    type: string = IncidentType.NORMAL.value

    incidentDate?: Date = new Date()

    description? = ''

    note? = ''

    status: string = IncidentStatus.NEW.value

    userId?: string

    createdBy = ''

    createdAt: Date = new Date()
}
