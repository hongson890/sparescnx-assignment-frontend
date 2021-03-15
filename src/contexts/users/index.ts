import CreateDataContext from '../CreateDataContext'
import { initialState, usersReducers } from './users.reducers'
import { getAllUser, searchUser, updateLoading } from './users.actions'

export const { Provider, Context } = CreateDataContext(
  usersReducers,
  { searchUser, getAllUser, updateLoading },
  initialState,
)
