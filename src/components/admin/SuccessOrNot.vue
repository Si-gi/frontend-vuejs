<template>
        <p v-if="errors.length">
            <b>Erreurs</b>
            <ul>
                <li v-for="error in errors" :key="error.id">
                    {{ error }}
                </li>
            </ul>
        </p>
        <div class="success"> 
            
            {{ this.statusText }} 
        </div>
</template>

<script>
export default{
    name:"SuccessOrNot",
    props: ['errors','savingSuccessfull', 'statusText'],

}
</script>