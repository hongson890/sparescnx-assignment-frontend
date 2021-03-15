import axios from 'axios'
import { BACKEND_SERVICE_URL } from './gateway.config'

export const API_URL = 'https://randomuser.me/api/'

async function fetchUsersFromAPI(page: number, results: number, seed: string) {
    let res = await axios.get(
        `${API_URL}?page=${page}&results=${results}&seed=${seed}`,
    )
    return res.data.results
}

async function getAll() {
    let res = await axios.get(`${BACKEND_SERVICE_URL}/users/getAll`)
    return res.data
}

async function getUserDetail(userId?: string) {
    let res = await axios.get(`${BACKEND_SERVICE_URL}/users/${userId}`)
    return res.data
}

export const userService = {
    fetchUsersFromAPI,
    getAll,
    getUserDetail,
}
