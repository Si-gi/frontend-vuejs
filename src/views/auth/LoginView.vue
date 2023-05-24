<template>
    <h1> Login </h1>
    <form @submit.prevent="login">
        <div class="formGroup">
        <label for="user_login"> Identifiant</label>
        <input type="text" id="user_login" v-model="user.username">
        </div>
        <div class="formGroup">
            <label for="user_pwd"> mot de passe</label>
            <input type="text" id="user_pwd" v-model="user.password">
        </div>
        <div class="formGroup">
            <Button type="submit" class="button"> Connexion </Button>
        </div>
    </form>
</template>
<script>

import { accountService } from '@/_services'
export default {
    name: 'LoginView',
    data() {
        return{
            user: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        login(){
            accountService.login(this.user)
                .then(res => {
                    console.log(res)
                    accountService.saveToken(res.data.access, res.data.refresh)
                    this.$router.push('/dashboard')
                }).catch(err => {
                    console.log(err)
                })
                 
            this.access = ''
            this.refresh = ''
            // fetch('http://127.0.0.1:8000/api/token/', {
            //     headers: {
            //         'Accept': '*/*',
            //         'Content-Type': 'application/json',
            //     },
            //     method: 'POST',
            //     body: JSON.stringify(this.user)
            // }).then(blob => blob.json())
            // .then(data => {
            //     if (Object.hasOwn(data, 'access') == false && localStorage.getItem('refresh_token'))
            //     {
            //         fetch('http://127.0.0.1:8000/api/token/refresh/', {
            //             method: 'POST',
            //             headers:{
            //                 'Accept': '*/*',
            //                 'Content-Type': 'application/json',                            
            //             },
            //             body: {'refresh': localStorage.getItem('refresh_token')}
            //         }).then(d => {this.access = d.access })
            //     } else {
            //         this.access = data.access
            //     }
            //     localStorage.setItem('access_token' , this.access)
            //     localStorage.setItem('refresh_token' , data.refresh)
            //     console.log("end fetch")
            //     
            // })
        }
    }
}
</script>

<style>
    .formGroup {

    }
    .class {

    }
</style>