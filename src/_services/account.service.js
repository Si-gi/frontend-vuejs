import Axios from "./caller.service";




let login = (credentials) => {
    return Axios.post('/token/', credentials)
}

let logout = () => {
    localStorage.removeItem('access_token')
}
let getToken = () => {
    return localStorage.getItem('access_token')
}
let saveToken = (acces_token, refresh_token) => {
    localStorage.setItem("access_token", acces_token)
    localStorage.setItem("refresh_token", refresh_token)
}

let isLogged = () => {
    return !!localStorage.getItem("access_token")
}

export const accountService = {
    login,
    logout,
    saveToken,
    isLogged,
    getToken,
}