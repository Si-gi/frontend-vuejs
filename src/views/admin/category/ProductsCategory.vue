<template>
    <div>
        <ProductMenu :categorie_id="id"/>
        <title></title>
        <h1>Catégorie: {{ categorie.name }}</h1>
        <table>
            <thead>
                <tr>
                    <th>Produit</th>
                    <th>Description</th>
                    <th> Actif</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product, index in products" :key="product.id">
                    <td>{{ product.name }}</td>
                    <td>{{ product.description }}</td>
                    <td >{{isActif[index]}}</td>
                    <td>V</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { ProductMenu } from '@/components/admin'
import { categoryService } from '@/_services';
export default {
    name:'ProductsCategory',
    components: { ProductMenu },
    props:['id'],
    data(){
        return{
            categorie: {id: this.id, name:""},
            products: []
        }
    },
    mounted(){
        categoryService.getCategoryDetail(this.id)
            .then(res => {
                this.categorie.name = res.data.name
                this.products = res.data.products
                console.log(res)
                // this.categorie = res.data.results
           })
            .catch(err =>  console.log(err))
    },
    computed:{
        isActif(){
            return this.products.map(p => 
                {
                    if (p.active){
                        return "Actif"
                    } else {
                        return "Inactif"
                    }
                }
            )
        }
    }
}
</script>