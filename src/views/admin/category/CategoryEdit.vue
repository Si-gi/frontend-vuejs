<template>
    <div>
        <h1> Edition de la catégorie</h1>

        <p v-if="success" class="success">
            Mise à jour effectué
        </p>
        <form @submit.prevent="edit">
            <label for="name">Nom</label>
            <input id="name" type="text" v-model="categorie.name">
            <label for="description"> Description</label>
            <input id="description" type="text" v-model="categorie.description">
            <input type="submit">
        </form>
    </div>
</template>
<script>
import { categoryService } from '@/_services';
// import axios from 'axios';
export default{
    name: 'CategoryEdit',
    props:['id'],
    data(){
        return{
            categorie: {},
            success: false,
        }
    },
    mounted(){
        console.log(this.id)
        categoryService.getCategoryDetail(this.id).then(
            res => {
                console.log(res)
                this.categorie = res.data
            }
        )
    },
    methods:{
        edit(){
            console.log(this.categorie.id)
            categoryService.updateCategory(this.categorie).then(res => {
                console.log(res)
                if (res.status == 200){
                    this.success = true
                }
            }).catch(err => console.log(err))          
        },
    }

}
</script>