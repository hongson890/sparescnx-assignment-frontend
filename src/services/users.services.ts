import axios from 'axios'

export const API_URL = 'https://randomuser.me/api/'

async function fetchUsersFromAPI(page: number, results: number, seed: string) {
  let res = await axios.get(
    `${API_URL}?page=${page}&results=${results}&seed=${seed}`,
  )
  return res.data.results
}

export const userService = {
  fetchUsersFromAPI,
}
