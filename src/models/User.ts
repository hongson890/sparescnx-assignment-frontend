import { CouchDbEntity } from './CouchDbEntity'

export class User extends CouchDbEntity {
  email?: string

  password?: string

  role?: string

  firstName?: string

  lastName?: string

  id?: string

  createdBy?: string
}
