import { BACKEND_SERVICE_URL } from './gateway.config'
import { HttpServices } from "./http.services";

async function getAll() {
    return HttpServices.doGet(`${BACKEND_SERVICE_URL}/users/getAll`)
}

export const userService = {
    getAll,
}
