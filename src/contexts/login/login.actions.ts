import {
  SUBMIT_LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from './login.constants'
import { handleToken } from './login.helper'
import { authenticationService } from '../../services/authentication.services'

export const submitLogin = (dispatch: any) => (
  email: string,
  password: string,
) => {
  dispatch({ type: SUBMIT_LOGIN_LOADING, payload: true })
  authenticationService
    .submitLogin(email, password)
    .then(results => {
      dispatch({ type: LOGIN_SUCCESS, payload: results })
      dispatch({ type: SUBMIT_LOGIN_LOADING, payload: false })
      handleToken(results.data.accessToken, results.data.user)
      window.location.replace('/')
    })
    .catch((error: any) => {
      dispatch({ type: LOGIN_FAILED, error })
      dispatch({ type: SUBMIT_LOGIN_LOADING, payload: false })
    })
}
