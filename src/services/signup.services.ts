import axios from 'axios'

async function submitSignup(
  username: string,
  password: string,
  confirmPassword: string,
) {
  return { data: { isSuccess: true } }
}

export const signupService = {
  submitSignup,
}
