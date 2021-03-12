// eslint-disable-next-line import/no-extraneous-dependencies
export function handleToken(token: any, refreshToken: any) {
  document.cookie = `token=${token}`
  document.cookie = `refreshToken=${refreshToken}`
}
