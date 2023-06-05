<template>
    <div>
        <SuccessOrNot :errors="errors" :savingSuccessfull="savingSuccessfull" :statusText="statusText"/>
        
        <form @submit.prevent="save">
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
    name:'ProductAdd',
    components: {SuccessOrNot},
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
                    console.log(res.data)
                    console.log(res.statusText)
                    this.statusText = res.statusText
                    this.savingSuccessfull = true
                    console.log(this.statusText)
                }
            }).catch(err => {console.log(err)})
        }
    }
}
</script>