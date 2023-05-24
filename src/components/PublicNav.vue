<template>
    <img class="logo" alt="Vue logo" src="@/assets/logo.png">

        <nav class="nav">
            <router-link to="/">Accueil</router-link> 
            <router-link to="/category">categories</router-link>
            
        </nav>
</template>

<script>
export default{
    name: 'PublicNav',

}
</script>
<style>
    .logo{
        position: absolulte;
        height: 50px;
        float: right;
    }

    .nav {
        background-color: orange;
    }
    .nav > a {
        border: solid 1px;
        margin-left: 2px;
    }
</style>