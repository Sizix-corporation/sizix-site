<template>
  <div>
    <!-- Links -->
    <header class="flex justify-center gap-x-4 bg-black">
      <BtnLink name="Entreprise" link="/entreprise" />
      <BtnLink name="projets" link="/projets" />
      <BtnLink name="Team" link="/team" />
    </header>
    <!-- Content -->

    <div class="pb-16 bg-black">
      <div class="container flex justify-center mx-auto pt-16">
        <div>
          <p class="text-gray-500 text-lg text-center font-normal pb-3">
            Notre team
          </p>
          <h1
            class="xl:text-4xl text-3xl text-center text-white opacity-90 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto"
          >
            Les personnes talentueuses dans les coulisses de l'organisation
          </h1>
        </div>
      </div>
      <div class="w-full bg-black px-10 pt-10">
        <div class="container mx-auto">
          <div
            class="lg:flex md:flex sm:flex items-center flex-wrap md:justify-around sm:justify-around lg:justify-around"
          >
            <div
              class="sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 lg:w-2/5"
            >
              <div class="h-300 rounded overflow-hidden shadow-md bg-white">
                <div class="absolute -mt-20 w-full flex justify-center">
                  <div class="h-32 w-32">
                    <img
                      src="~/assets/Team/poupoinaka.png"
                      alt="Poupoin aka le pilotant de ce projet et est un Développeur full-satck"
                      class="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div class="px-6 mt-16">
                  <div class="font-bold text-3xl text-center pb-1">
                    Poupoin Aka
                  </div>
                  <p class="text-gray-800 text-sm text-center">
                   Créateur /  Développeur full-satck  
                  </p>
                  <p
                    class="text-center text-gray-600 text-base pt-3 font-normal"
                  >
                    Le code a été pour moi une alternative pour avoir une vie remplie , c'est pendant quelques temps que j'ai ce désir de partager avec le public mes idée et m'essayer à de nouvelle vision
                  </p>
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
  layouts: 'default',
  head: {
    title: 'Sizix team-Equipe',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "Vous êtes développeur ou encore vous souhaitez vous lancer au code ? sizix est ouvert et reçois tous types de dev , Vous avez juste à envoyez un email et vous serez ajouter à la communauté sizix et changer le gaming du code . Nous vous attendons !!!",
      },
    ],
  },
}
</script>
