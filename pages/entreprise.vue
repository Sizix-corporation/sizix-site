<template>
     <div class="bg-black">
     <!-- Links -->
     <header class="flex justify-center gap-x-4 bg-black mt-8 sm:my-4">
        <BtnLink name='Entreprise' link='/entreprise'/>
        <BtnLink name='projets' link='/projets' />
        <BtnLink name='Team' link='/team'/>
     </header>
      <!-- Content -->
      <div class=" grid grid-cols-6  text-white py-6 lg:py-8 px-6 gap-4">
            <figure class="col-span-full flex flex-col items-center mb-4 sm:mb-6">
                <img src="~/assets/logo.webp" class="w-16 h-16 mb-6 " alt="logo sizix corporation ">
                <legend class="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold ">Sizix Corporation</legend>
            </figure>
            <div class='col-span-full  sm:col-start-2 sm:col-end-6  xl:col-start-3  xl:col-end-5'>
                <h2 class="text-md md:text-lg lg:text-xl xl:text-2xl font-bold mb-4">L'innovation à la porte</h2>
                <blockquote class='mb-4' >
                    <dfn class="not-italic">Sizix corporation est une start-up  évoluant depuis le début de  l'année 2024 dans le domaine de la technologie et solution IT.  </dfn>
                    <p>
                        Son objectif principal est de  produire des outils et infrastructures pour permettre aux personnes de mieux gérer leurs quotidiens , Ses solutions peuvent être de 
                        plusieurs formes à savoir des applications web ou applications mobile .  L'idée est de créer un environnement ou tout le monde pourra se concentrer sur ses objetifs 
                        pricipaux sans avoir à se soucier des problèmes de la société .
                    </p>
                </blockquote>
                <h2 class="text-md md:text-lg lg:text-xl xl:text-2xl font-bold ">Pourquoi le nom Sizix ?  </h2>
                <blockquote class='py-4'>
                    <p>
                        Sizix d'abord pour représenter le nom de nos six (6) x . Chaque x réprensente une qualité au sein de notre équipe en occurrence l'innovation , la complicité ,
                        le travail , la technologie , la confiance et la solution . Toutes ces différentes quatiltés  au seins d'une équipe visant un but  commun  et dont le projet appartient au 
                        utilisateurs forment une corporation . 
                    </p>
                </blockquote>
                <h2 class="text-md md:text-lg lg:text-xl xl:text-2xl font-bold mb-4">Vous souhaitez investir ?  </h2>
                <blockquote class='pt-4'>
                    <p>
                        Vous appreciez le projet Sizix , vous aimez l'aventure et vous souhaitez nous rejoindre ? <br>
                        <a href="#" class="underline">je veux devenir actionnaire Sizix</a>
                    </p>
                </blockquote>

            </div>
      </div>

     </div>
</template>

<script>
export default {
  name: 'EntreprisePage',
  layouts:'default',

}
</script>

