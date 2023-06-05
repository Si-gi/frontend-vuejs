<template>
    <div>
        <CategoryMenu/>
        <h1> Ajout d'une categorie</h1>
        <SuccessOrNot :errors="errors" :savingSuccessfull="savingSuccessfull" :statusText="statusText"/>


        <form @submit.prevent="add">
            <div class="form-group">
                <label for="name">Nom</label>
                <input id="name" type="text" v-model="category.name">
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <input id="description" type="text" v-model="category.description">
            </div>
            <button type="submit">Sauvegarder</button>
        </form>
    </div>
</template>
<script>
import {CategoryMenu, SuccessOrNot} from '@/components/admin/'
import { categoryService } from '@/_services';


export default{
    name: 'CategoryAdd',
    components: {CategoryMenu, SuccessOrNot},
    data(){
        return{
            category:{name: '', description : '', date_created: '', date_updated: ''},
            errors: [],
            savingSuccessfull: false,
            statusText: '',
        }
    },
    methods:{
        add(){
            this.category.date_created = this.category.date_updated = new Date().toJSON();
            categoryService.createCategory(this.category)
            .then(res =>{
                if (res.status == 201) {
                    this.statusText = res.statusText
                    this.savingSuccessfull = true
                }
            })
            .catch(err => {
                console.log(err)
                this.errors = err   
            })
        }
    }
}
</script>

<style>
.success{
    color: greenyellow;
}

</style>