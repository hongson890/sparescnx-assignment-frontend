import { CreatedAudit } from './CreatedAudit'

export class User extends CreatedAudit {
  id: number = 0

  firstName: string = ''

  lastName: string = ''

  dateOfBirth?: Date = undefined
}
