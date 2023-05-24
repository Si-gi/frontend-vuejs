<template>
    <div>
        <h1> {{ name }}</h1>
        <table>
            <thead>
                <tr><th>Produit</th><th>Description</th><th>NutriScore</th></tr>
            </thead>
            <tbody >
                <tr v-for="product in products" :key="product.id">
                    <td  @click="articlesList(product.id)">{{ product.name }} </td>
                    <td>{{ product.description }}</td>
                    <td>{{ product.ecoscore }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import {categoryService} from '@/_services';
export default{
    name: 'ProductCategorie',
    props: ['id'],
    data(){
        return{
            name : '', 
            products: []
        }
    },
    mounted(){
        this.products = categoryService.getCategoryDetail(this.id)
            .then(res => {
                this.products = res.data.products
                this.name = res.data.name
            })
            .catch(err =>  console.log(err))

    },
    methods:{
        articlesList(id_product){
            this.$router.push({name: 'articleList', params:{id:id_product}})
            
        }
    }
}
</script>

<style>
ul, table {
    margin-left: auto;
    margin-right: auto;
}
td, th{
    padding-right: 2em;
}
</style>