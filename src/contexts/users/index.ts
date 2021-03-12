import CreateDataContext from '../CreateDataContext'
import { initialState, usersReducers } from './users.reducers'
import { searchUser, updateLoading } from './users.actions'

export const { Provider, Context } = CreateDataContext(
  usersReducers,
  { searchUser, updateLoading },
  initialState,
)
