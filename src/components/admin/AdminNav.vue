<template>
        <nav class="nav">
            <router-link to="/admin/">Accueil</router-link> 
            <router-link to="/user">User</router-link>
            <router-link to="/admin/category">categories</router-link>
            <router-link to="/dashboard">Dashboard</router-link>
            <div class="f-right"><button @click="logout()">Deconnexion</button></div>
        </nav>
</template>

<script>
import { accountService } from '@/_services';

export default{
    name: 'AdminNav',
    methods: {
        logout(){
            accountService.logout()
            this.$router.push('/login')
        }
    }
}
</script>
<style>
    .nav {
        background-color: orange;
    }
    .nav > a {
        border: solid 1px;
        margin-left: 2px;
    }
    .f-right{
        float:right
    }
</style>