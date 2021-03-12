import {
  SEARCH_USER,
  SEARCH_USER_ERROR,
  SEARCH_USER_SUCCESS,
  UPDATE_LOADING,
} from './users.constants'

const emptyUserList: any[] = []
export const initialState = {
  isLoading: false,
  isError: false,
  message: '',
  userList: emptyUserList,
  seed: 'sontest',
}

export const usersReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case SEARCH_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: '',
        userList: action.userList,
      }
    case SEARCH_USER_ERROR:
      return {
        ...state,
        userList: [],
        isLoading: false,
        isError: true,
        message: action.message,
      }
    case UPDATE_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      }
    default:
      return state
  }
}
