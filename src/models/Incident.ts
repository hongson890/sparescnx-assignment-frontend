import { CreatedAudit } from './CreatedAudit'
import { User } from './User'
import { IncidentStatus } from '../constants/IncidentStatus'
import { IncidentType } from '../constants/IncidentType'

export class Incident extends CreatedAudit {
  id: string = ''

  name: string = ''

  type: string = IncidentType.NORMAL.value

  incidentDate?: Date = new Date()

  description: string = ''

  note: string = ''

  status: string = IncidentStatus.NEW.value

  userId?: number
}
