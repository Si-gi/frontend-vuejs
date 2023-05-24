<template>
    <div>
        <CategoryMenu/>
        <h1> Index Category</h1>
        <table>
            <thead>
                <tr> 
                    <th>Identifiant</th>
                    <th>Categorie</th>
                    <th>Date de création</th>
                    <th>date de mofication</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(categorie, index) in categories" :key="categorie.id">
                    <td>{{ categorie.id }}</td>
                    <td>{{ categorie.name }} {{ categorie.id }}</td>
                    <td>{{ dateCreatedformat[index] }}</td>
                    <td>{{ dateUpdatedformat[index] }}</td>
                    <td>
                        <router-link :to="{ name: 'CategoryEdit', params: { id: categorie.id}}" :id="categorie.id">Modifier</router-link>
                        <router-link :to="{ name: 'ProductsCategory', params: { id: categorie.id}}" :id="categorie.id">Voir</router-link>
                        <span @click="deleteCat(index)" class="pointer">Supprimer</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { categoryService } from '@/_services';
import { CategoryMenu } from '@/components/admin/'

export default{
    name: 'CategoryIndex',
    components: { CategoryMenu },
    data(){
        return{
            categories: []
        }
    },
    mounted() {
        categoryService.getAllCategory()
            .then(res => {
                this.categories = res.data.results
           })
            .catch(err =>  console.log(err))
    },
    computed:{
        dateCreatedformat(){
           return this.categories.map(m => 
                m.date_created.split('T')[0].split('-').reverse().join('/')
            )
        },
        dateUpdatedformat(){
           return this.categories.map(m => 
            m.date_updated.split('T')[0].split('-').reverse().join('/')
            )
        },
    },
    methods:{
        deleteCat(index){
            categoryService.deleteCategory(this.categories[index].id)
            .then(this.categories.splice(index, 1))
            .catch(err => console.log(err))
        },
    }
}
</script>
<style>
    .pointer{
        cursor: pointer;
    }
</style>