<template>
    <div>
        <h1> Liste des categories</h1>
        <table>
            <thead>
                <tr> 
                    <th>Categorie</th>
                    <th>Date de création</th>
                    <th>date de mofication</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(categorie, index) in categories" :key="categorie.id">
                    <td  @click="categoryDetail(categorie.id)">{{ categorie.name }} {{ categorie.id }}</td>
                    <td>{{ dateCreatedformat[index] }}</td>
                    <td>{{ dateUpdatedformat[index] }}</td>
                </tr>
            </tbody>
        </table>
    </div>

</template>
<script>
    // import CategoryList from '@components/CategoryList.vue';
import { categoryService } from '@/_services';
export default{
    name: 'CategoryView',
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
    methods:{
        categoryDetail(id){
            console.log(id)
            this.$router.push({name: 'categoryDetail', params:{id:id}})

        },
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
}
</script>
<style>
table {
    margin-left: auto;
    margin-right: auto;
}
td, th{
    padding-right: 2em;
}
</style>