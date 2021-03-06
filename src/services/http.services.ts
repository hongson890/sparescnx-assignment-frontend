import axios, { AxiosRequestConfig } from 'axios'
import { BACKEND_SERVICE_URL } from './gateway.config'

const token = localStorage.getItem('token') || ''

export class HttpServices {
    constructor() {}

    public static async doGet(url: string) {
        try {
            const headers = {
                Authorization: `Bearer ${token}`,
            }
            let result = await axios.request({
                headers,
                url,
                method: 'GET',
            })
            return result.data
        } catch (e) {
            console.log(e)
            return Promise.reject(e)
        }
    }

    public static async doPost(url: string, data?: any) {
        const headers = {
            Authorization: `Bearer ${token}`,
        }
        let result = await axios.request({
            headers,
            url,
            data,
            method: 'POST',
        })
        return result.data
    }

    public static async doPut(url: string, data?: any) {
        const headers = {
            Authorization: `Bearer ${token}`,
        }
        let result = await axios.request({
            headers,
            url,
            data,
            method: 'PUT',
        })
        return result.data
    }

    public static async doDelete(url: string, data?: any) {
        const headers = {
            Authorization: `Bearer ${token}`,
        }
        let result = await axios.request({
            headers,
            url,
            data,
            method: 'DELETE',
        })
        return result.data
    }
}
