import CreateDataContext from '../CreateDataContext'
import { initialState, loginReducers } from './login.reducers'
import { submitLogin } from './login.actions'

export const { Provider, Context } = CreateDataContext(
  loginReducers,
  { submitLogin },
  initialState,
)
