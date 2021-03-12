import {
  SEARCH_USER_ERROR,
  SEARCH_USER_SUCCESS,
  UPDATE_LOADING,
} from './users.constants'
import { userService } from '../../services/users.services'

export const searchUser = (dispatch: any) => (
  page: number,
  pageSize: number,
  seed: string,
) => {
  dispatch({ type: UPDATE_LOADING, isLoading: true })
  userService
    .fetchUsersFromAPI(page, pageSize, seed)
    .then(results => {
      updateLoading(false)
      dispatch({ type: SEARCH_USER_SUCCESS, userList: results })
    })
    .catch(error => {
      updateLoading(false)
      dispatch({ type: SEARCH_USER_ERROR, error })
    })
}

export const updateLoading = (dispatch: any) => (isLoading: boolean) => {
  dispatch({ type: UPDATE_LOADING, isLoading })
}
