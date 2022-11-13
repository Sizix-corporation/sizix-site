<template>
   <nav class="flex justify-between md:p-6  text-white ">
        <NuxtLink to='/' class="grid grid-cols-2  items-center">    
            <img src="~/assets/logo.webp" class="col-span-1 w-12 h-12 mb-2 " alt="logo sizix corporation ">
            <h1 class="col-span-1 font-bold text-md md:text-lg lg:text-2xl  tracking-widest mb-2">SIZIX</h1>
            <span class="col-span-full font-semibold text-sm md:text-md lg:text-lg  opacity-95">corporation </span>
        </NuxtLink>
        <NuxtLink class='grid items-center font-semibold text-sm md:text-md lg:text-lg' to='/abonner'>S'abonner</NuxtLink >
   </nav>

  
</template>

<script>
export default {
    name:'NavBar'

}
</script>

