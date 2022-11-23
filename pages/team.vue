<template>
     <div >
      <!-- Links -->
      <header class="flex justify-center gap-x-4 bg-black">
         <BtnLink name='Entreprise' link='/entreprise'/>
         <BtnLink name='projets' link='/projets' />
         <BtnLink name='Team' link='/team'/>
      </header>
      <!-- Content -->
      
    <div class="pb-16 bg-black">
        <div class="container flex justify-center mx-auto pt-16">
            <div>
                <p class="text-gray-500 text-lg text-center font-normal pb-3">Notre team</p>
                <h1 class="xl:text-4xl text-3xl text-center text-white opacity-90 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">Les personnes talentueuses dans les coulisses de l'organisation</h1>
            </div>
        </div>
        <div class="w-full bg-black px-10 pt-10">
            <div class="container mx-auto">
                <div class="lg:flex md:flex sm:flex items-center  flex-wrap md:justify-around sm:justify-around lg:justify-around">

                    <div class=" sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24  lg:w-2/5">
                        <div class="h-300 rounded overflow-hidden shadow-md bg-white">
                            <div class="absolute -mt-20 w-full flex justify-center">
                                <div class="h-32 w-32">
                                    <img src="~/assets/Team/poupoinaka.png" alt="Poupoin aka le pilotant de ce projet et est un Développeur full-satck" class="rounded-full object-cover h-full w-full shadow-md" />
                                </div>
                            </div>
                            <div class="px-6 mt-16">
                                <div class="font-bold text-3xl text-center pb-1">Poupoin Aka</div>
                                <p class="text-gray-800 text-sm text-center">Développeur full-satck</p>
                                <p class="text-center text-gray-600 text-base pt-3 font-normal">Our services encompass the assessment and repair of property damage caused by water, fire, smoke, or mold. We can also be a part of the restoration.</p>
                            </div>
                        </div>
                    </div>
                    <div class=" sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24  lg:w-2/5">
                        <div class="rounded overflow-hidden shadow-md bg-white">
                            <div class="absolute -mt-20 w-full flex justify-center">
                                <div class="h-32 w-32">
                                    <img src="~/assets/Team/poupoinaka.png" alt="Poupoin aka " class="rounded-full object-cover h-full w-full shadow-md" />
                                </div>
                            </div>
                            <div class="px-6 mt-16">
                                <div class="font-bold text-3xl text-center pb-1">Amani Flavien</div>
                                <p class="text-gray-800 text-sm text-center">Développeur back-end</p>
                                <p class="text-center text-gray-600 text-base pt-3 font-normal">An avid open-source developer who loves to be creative and inventive. I have 20 years of experience in the field.</p>
                            </div>
                        </div>
                    </div>
                    <div class="sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24  lg:w-2/5">
                        <div class="rounded overflow-hidden shadow-md bg-white">
                            <div class="absolute -mt-20 w-full flex justify-center">
                                <div class="h-32 w-32">
                                    <img src="https://cdn.tuk.dev/assets/blond-man-happy-expression_1194-2873.jpg" alt="" class="rounded-full object-cover h-full w-full shadow-md" />
                                </div>
                            </div>
                            <div class="px-6 mt-16">
                                <div class="font-bold text-3xl text-center pb-1">Kady Bamba</div>
                                <p class="text-gray-800 text-sm text-center">Responsable comptable</p>
                                <p class="text-center text-gray-600 text-base pt-3 font-normal">Product designer with interests in immersive computing and XR, political ventures, and emerging technologies. Able to take ideas and give them a life.</p>
                           
                            </div>
                        </div>
                    </div>
                    <div class=" sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24  lg:w-2/5">
                        <div class="rounded overflow-hidden shadow-md bg-white">
                            <div class="absolute -mt-20 w-full flex justify-center">
                                <div class="h-32 w-32">
                                    <img src="https://cdn.tuk.dev/assets/photo-1570211776045-af3a51026f4a.jfif" alt="" class="rounded-full object-cover h-full w-full shadow-md" />
                                </div>
                            </div>
                            <div class="px-6 mt-16">
                                <div class="font-bold text-3xl text-center pb-1">Djegou Manuel</div>
                                <p class="text-gray-800 text-sm text-center">Responsable communication </p>
                                <p class="text-center text-gray-600 text-base pt-3 font-normal">A UX designer is the voice of the customer. Our job is to look beyond the business goals. We don't just experience user interface but also questions it.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


 
     </div>
</template>

<script>
export default {
  name: 'TeamPage',
  layouts:'default',

}
</script>

