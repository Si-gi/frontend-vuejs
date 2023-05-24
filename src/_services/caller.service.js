/** Import des  modules necessaires */

import axios from 'axios'
import { accountService } from './account.service'
import router from '@/router'

const Axios = axios.create({
    baseURL : "http://127.0.0.1:8000/api"
})

Axios.interceptors.request.use(request => {


    if (request.url.includes('admin') && accountService.getToken()) {
        request.headers.Authorization = "Bearer " + accountService.getToken()
    }
    return request
})

Axios.interceptors.response.use(response => {
    return response
}, error => {
    console.log(error)

        if (error.response.status == 401) {
            accountService.logout()
            router.push('/login')
        }
    
    
})
export default Axios