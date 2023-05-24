<template>
    <div>
        <h1> Liste des articles du produit {{ name }}</h1>
        <h3> Ce produit à un score nutritif {{ ecoscore }}</h3>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prix</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody >
                    <tr v-for="article in articles" :key="article.id">
                        <td>
                            {{ article.name }}
                        </td>
                        <td>
                            {{ article.price }}
                            
                        </td>
                        <td>
                            {{ article.description }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { ProductService } from '@/_services'

export default{
    name: "ArticleView",
    props: ['id'],
    data(){
        return{
            ecoscore : '',
            name: '',
            articles: []
        }
    },
    computed:{
        dateCreatedformat(){
           return this.articles.map(m => 
                m.date_created.split('T')[0].split('-').reverse().join('/')
            )
        },
        dateUpdatedformat(){
           return this.articles.map(m => 
            m.date_updated.split('T')[0].split('-').reverse().join('/')
            )
        },
    },
    mounted(){
        this.articles = ProductService.getProductDetail(this.id)
            .then(res => {
                console.log(res)
                this.articles = res.data.articles
                this.name = res.data.name
                this.ecoscore = res.data.ecoscore
            })
            .catch(err =>  console.log(err))

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