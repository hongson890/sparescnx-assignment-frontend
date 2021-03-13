import { User } from '../../models/User'

const usersData: Array<User> = [
  {
    firstName: 'Son',
    lastName: 'Pham',
    createdAt: new Date(),
    createdBy: 'admin1',
    dateOfBirth: new Date(),
    id: 1,
  },
  {
    firstName: 'Erik',
    lastName: 'Nguyen',
    createdAt: new Date(),
    createdBy: 'admin1',
    dateOfBirth: new Date(),
    id: 2,
  },
  {
    firstName: 'Cris',
    lastName: 'Do',
    createdAt: new Date(),
    createdBy: 'admin1',
    dateOfBirth: new Date(),
    id: 3,
  },
  {
    firstName: 'Ferik',
    lastName: 'Ham',
    createdAt: new Date(),
    createdBy: 'admin2',
    dateOfBirth: new Date(),
    id: 4,
  },
]

export default usersData
