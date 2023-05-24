<template>
    <nav class="sub-nav">
        <router-link :to="{ name: 'ProductAdd', params: { id_category: categorie_id}}" :id="categorie_id">Creer</router-link>
    </nav>
</template>
<script>
export default{
    name: "ProductMenu",
    props: ['categorie_id'],
    mounted(){
        console.log(this.categorie_id)
    },
}
</script>