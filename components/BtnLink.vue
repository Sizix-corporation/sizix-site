<template>
    <NuxtLink :to='link' :class="pathName==link ? 'text-black text-opacity-90 bg-white'  : 'text-white bg-transparent'"  class=" btn  rounded-sm p-4 border-2 border-white ">{{name}} </NuxtLink>
</template>

<script>
export default {
    name:'BtnLink',
    props:{
        name:{type:String,required:true},
        link:{type:String,required:true},
    },
    data() {
        return {
            pathName:this.$nuxt.context.route.fullPath
        }
    },
}
</script>

<style>
.btn:hover{
    background-color: white;
    color: black;
    transition: all 500ms;
}

</style>