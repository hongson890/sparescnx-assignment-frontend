import { CreatedAudit } from './CreatedAudit'
import { User } from './User'
import { IncidentStatus } from '../constants/IncidentStatus'
import { IncidentType } from '../constants/IncidentType'

export class Incident extends CreatedAudit {
  name: string = ''

  type: string = IncidentType.NORMAL.value

  description: string = ''

  note: string = ''

  status: string = IncidentStatus.NEW.value

  userId?: number
}
