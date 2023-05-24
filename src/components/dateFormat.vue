<template>
    {{  }}
</template>
<script>
export default{
    name:"dateFormat",
    computed:{
        dateCreatedformat(){
           return this.categories.map(m => 
                m.date_created.split('T')[0].split('-').reverse().join('/')
            )
        },
    }
}
</script>