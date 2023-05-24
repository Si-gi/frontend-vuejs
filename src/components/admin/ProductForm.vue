<template>
        <div class="form-group">
                <label for="name">Nom</label>
                <input id="name" type="text" v-model="product.name">
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <input id="description" type="text" v-model="product.description">
            </div>
            <button type="submit">Sauvegarder</button>
</template>

<script>
export default{
    name: "ProductForm",
    props: [],
    data(){

    },
    computed(){

    },
    methods:{

    }
}
</script>

