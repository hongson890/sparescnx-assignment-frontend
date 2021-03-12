import {
  SUBMIT_LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from './login.constants'
import { handleToken } from './login.helper'
import { loginService } from '../../services/login.services'

export const submitLogin = (dispatch: any) => (
  username: string,
  password: string,
) => {
  dispatch({ type: SUBMIT_LOGIN_LOADING, payload: true })
  loginService
    .submitLogin(username, password)
    .then(results => {
      dispatch({ type: LOGIN_SUCCESS, payload: results })
      dispatch({ type: SUBMIT_LOGIN_LOADING, payload: false })
      handleToken(results.data.token, results.data.refreshToken)
      window.location.replace('/')
    })
    .catch((error: any) => {
      dispatch({ type: LOGIN_FAILED, error })
      dispatch({ type: SUBMIT_LOGIN_LOADING, payload: false })
    })
}
