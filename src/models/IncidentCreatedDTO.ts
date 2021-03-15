import { IncidentType } from '../constants/IncidentType'
import { IncidentStatus } from '../constants/IncidentStatus'

export class IncidentCreatedDTO {
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
