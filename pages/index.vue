<template>
     <div class="relative ">
      <!-- Links -->
      <div class="flex flex-col my-28 lg:my-32 xl:my-36 w-full p-6 ">
        <NuxtLink   class='link  relative z-30 text-right text-white text-5xl transition duration-700 ease-in-out  hover:opacity-70 sm:text-7xl md:text-8xl lg:text-9xl py-2'  to='/team' ><span class="font-bold fleche  absolute">←</span> TEAM</NuxtLink >
        <NuxtLink  class='link relative  z-30 text-right text-white text-5xl transition duration-700 ease-in-out hover:opacity-70  sm:text-7xl md:text-8xl lg:text-9xl py-2' to='/projets' ><span class="font-bold fleche absolute ">←</span>PROJETS</NuxtLink >
        <NuxtLink  class='link relative  z-30 text-right text-white text-5xl transition duration-700 ease-in-out hover:opacity-70 sm:text-7xl md:text-8xl lg:text-9xl  py-2' to='/entreprise' ><span class="font-bold fleche  absolute">←</span>ENTREPRISE </NuxtLink >
      </div>

     </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layouts:'default',

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');

 .text-right{
  font-family: 'Poppins', sans-serif;
 }
 .fleche{
  visibility: hidden;
  left:10%;
  
 }
 .link:hover .fleche{
  visibility: visible;
  animation-name: animation_fleche;
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
 }
 @keyframes animation_fleche {
     from{
        left:25%;
     }
     to{
       left:18%;
     }
 }


</style>