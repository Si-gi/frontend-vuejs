<template>
    <h1>Ajout d'un produit {{ id_category }}</h1>
    <div>
        <SuccessOrNot :errors="this.errors" :savingSuccessfull="this.savingSuccessfull" :statusText="this.statusText"/>
        
        <form @submit.prevent="edit">
            <!-- <input id="name" type="text" v-model="product.category_id"> -->
            <div class="form-group">
                <label for="name">Nom</label>
                <input id="name" type="text" v-model="product.name">
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <input id="description" type="text" v-model="product.description">
            </div>
            <button type="submit">Sauvegarder</button>
        </form>
    </div>
</template>
<script>
import { ProductService } from '@/_services'
import { SuccessOrNot } from '@/components/admin/'
export default{
    name:'ProductEdit',
    components: [SuccessOrNot],
    props: ['id_category'],
    data(){
        return {
                product:{name: '', description : '', date_created: '', date_updated: '', category: this.id_category},
                errors: [],
                savingSuccessfull: false,
                statusText: '',
        }
    },
    computed(){
        console.log(this.id_category)
    },
    methods:{
        save(){
            this.product.date_created = this.product.date_updated = new Date().toJSON();

            ProductService.createProduct(this.product).then(res => {
                if (res.status == 201) {
                    this.statusText = res.statusText
                    this.savingSuccessfull = true
                }
            }).catch(err => {console.log(err)})
        }
    }
}
</script>