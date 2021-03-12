import axios from 'axios'

async function submitLogin(username: string, password: string) {
  const successData = {
    data: { token: 'testtoken', refreshToken: 'testRefreshToken' },
  }
  return successData
}

export const loginService = {
  submitLogin,
}
