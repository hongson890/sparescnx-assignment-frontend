// eslint-disable-next-line import/no-extraneous-dependencies
export function handleToken(token: any, user: any) {
  localStorage.setItem('token', token)
  localStorage.setItem('user', JSON.stringify(user))
}
