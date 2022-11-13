<template>
     <div class="relative ">
      <!-- Links -->
      <header class="flex justify-center gap-x-4 bg-black mt-8 sm:my-4">
         <BtnLink name='Entreprise' link='/entreprise'/>
         <BtnLink name='projets' link='/projets' />
         <BtnLink name='Team' link='/team'/>
      </header>
      <!-- Content-->
      <div class="grid grid-cols-6 gap-x-4 gap-y-8 text-white bg-black  py-20 lg:py-24 xl:py-28 w-full px-6 ">
           <h2 class="col-span-full text-center text-md md:text-lg lg:text-xl xl:text-2xl font-bold mb-4"> Retrouvez nos projets Sizix</h2>
           <CardProject v-for="(item, index) in listProject" :key="index" class="col-span-full md:col-span-3 xl:col-span-2" :srcimg="require(`~/assets/${item.namelogo}`)" :title='item.title' :createdat='item.createdat' :linksite='item.linksite'  :linkinstagram='item.linkinstagram'   :linkfacebook='item.linkfacebook' :online='item.online' :description='item.description' />
      </div>
     
     </div>
</template>

<script>
export default {
  name: 'ProjetsPage',
  layouts:'default',

  data() {
     return {
          listProject:[
                 {
                    namelogo:'logo.webp',
                    title:'Bitomax',
                    online:true,
                    createdat:'Janvier 2022',
                    linksite:'https://google.com',
                    linkinstagram:'https://google.com',
                    linkfacebook:'https://google.com',
                    description:'bitomax est une boutique en ligne beaucoup plus extravertie. Il met les magasins en contact avec leurs clients en utilisant beaucoup plus de simplicité .',
                 },
                 {
                    namelogo:'logoText.webp',
                    title:'Scalejob',
                    online:false,
                    createdat:'juillet 2023',
                    linksite:'https://google.com',
                    linkinstagram:'https://google.com',
                    linkfacebook:'https://google.com',
                    description:'fgsdgm dolor sit amet consectetur adipisicing elit. Pariatur amet ipsam asperiores ut fugit, tenetur dignissimos dolorum molestiae quasi error reiciendis qui mollitia in nobis a! Quae dolorum placeat porro.',
                 },
                 {
                    namelogo:'logoText.webp',
                    title:'Fable',
                    online:false,
                    createdat:'janvier 2025',
                    linksite:'https://google.com',
                    linkinstagram:'https://google.com',
                    linkfacebook:'https://google.com',
                    description:'fgsdgm dolor sit amet consectetur adipisicing elit. Pariatur amet ipsam asperiores ut fugit, tenetur dignissimos dolorum molestiae quasi error reiciendis qui mollitia in nobis a! Quae dolorum placeat porro.',
                 },

          ]
     }
  },

}
</script>
<style scoped>
h2{
    letter-spacing: 0.75rem;
}
</style>