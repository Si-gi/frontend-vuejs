import router from '@/router'

export function authGuard(){

    if(localStorage.getItem('access_token')){
        return true
    }

    router.push('/login')
}