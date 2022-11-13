<template>
    <div v-if="error.statusCode === 404" >
        <div class="flex items-center justify-center py-12">
           
            <div class=" flex items-center justify-center mx-4 md:w-2/3">
                <div class="flex flex-col items-center py-16">
                    <img class="px-4 hidden md:block" src="~/assets/404large.png" />
                    <img class="md:hidden" src="~/assets/404small.png" />
                    <h1 class="px-4 pt-8 pb-4 text-center text-5xl font-bold leading-10 text-white ">OUPS!</h1>
                    <p class="px-4 pb-10 text-base leading-none text-center text-white opacity-90">Aucun signal ici ! nous ne pouvons pas trouver la page que vous recherchez</p>
                    <NuxtLink to="/" class="mx-4 h-10 w-44  text-center pt-2 rounded-md text-white text-base bg-indigo-700 hover:bg-indigo-800 ">Retour à l'acceuil</NuxtLink>
                </div>
            </div>
        </div>
        
    </div>

</template>

<script>
export default {
  name:'ErrorPage',
  layout: 'default',
  props: {error: {type:Object,required:true}},

}
</script>