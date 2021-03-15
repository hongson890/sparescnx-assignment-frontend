import axios from 'axios'
import { BACKEND_SERVICE_URL } from './gateway.config'

async function submitLogin(email: string, password: string) {
    let result = await axios.request({
        url: `${BACKEND_SERVICE_URL}/auth/login`,
        data: {
            email,
            password,
        },
        method: 'POST',
    })
    return result
}

export const authenticationService = {
    submitLogin,
}
