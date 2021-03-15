import { IncidentStatus } from '../constants/IncidentStatus'
import { IncidentType } from '../constants/IncidentType'
import { CouchDbEntity } from './CouchDbEntity'

export class Incident extends CouchDbEntity {
    id: string = ''

    name: string = ''

    type: string = IncidentType.NORMAL.value

    incidentDate?: Date = new Date()

    description: string = ''

    note: string = ''

    status: string = IncidentStatus.NEW.value

    userId?: string

    createdBy: string = ''

    createdAt: Date = new Date()
}
