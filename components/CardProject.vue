<template>
 
    <div class="relative card bg-gray-900 bg-opacity-70 rounded-lg p-16   transition duration-700 ">
        <div class="logo_card h-1/2 w-full bg-gradient-to-tl to-gray-900  from-black bg-opacity-65 grid  items-center justify-center  from-slate-800 p-8 mb-2 shadow-xl">
            <img :src="srcimg" :alt="title" class="w-12 h-12 ">
        </div>
        <div  class="relative  description_card h-1/2  w-full bg-gradient-to-tl to-gray-900  from-black bg-opacity-65 grid grid-cols-1 content-between from-slate-800 p-8 shadow-xl  ">
           
                <div class="pb-12 flex justify-between">
                    <div class="flex-col gap-y-2">
                        <h2 class="text-white font-semibold text-sm sm:text-md ">{{title.toUpperCase()}}</h2>
                        <i class="text-indigo-700 not-italic text-base md:text-sm">{{createdat}}</i>
                    </div>
                    <div v-if="online" class="flex items-center gap-x-2">
                        <i class=" w-2 h-2 bg-green-600 rounded-full"></i>
                        <span class="text-white"> En ligne</span>
                    </div>
                    <div v-else class="flex items-center gap-x-2">
                        <i class=" w-2 h-2 bg-gray-600 rounded-full"></i>
                        <span class="text-white"> En développement</span>
                    </div>
                 
                </div>
                <div class="flex  gap-4">
                    <a :href="linksite" class="text-white ">Visiter </a>
                    <a :href="linkinstagram" class="text-white ">Instagram</a>
                    <a :href="linkfacebook" class="text-white ">Facebook</a>
                </div>
        </div>
        <blockquote class="relative w-full h-1/2 explain  ">
            {{description}}
        </blockquote>
    </div>
    
</template>

<script>
export default {
    name:'CardProject',
    props:{
        srcimg:{type:String,required:true},
        title:{type:String,required:true},
        online:{type:Boolean,required:true},
        createdat:{type:String,required:true},
        linksite:{type:String,required:true},
        linkinstagram:{type:String,required:true},
        linkfacebook:{type:String,required:true},
        description:{type:String,required:true}
    },
    
}
</script>

<style scoped>
a,span,blockquote{
    font-size: 0.7rem;
}

@media only screen and (max-width: 640px){
    a,span,blockquote{
    font-size: 0.5rem;
    }
    h2,i{
        font-size:0.7rem;
    }
}

.card:hover .logo_card {
    animation-name: animation_card_logo;
    animation-duration: 500ms;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

.card:hover .description_card{
    animation-name: animation_card_description;
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-delay: 500ms;
    animation-fill-mode: forwards;
}

.logo_card {
    transform: rotate(-25deg); 
}
.description_card {
    transform: rotate(25deg);   
     
}
.explain{
    visibility: hidden;
    top:-25%;
}
.card:hover .explain{
    animation-name: animation_explain;
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-delay: 1.5s;
    animation-fill-mode: forwards;
}

@keyframes animation_explain {
    from{
        visibility: initial;
        opacity: 0;
       
    }
    to{
        visibility:visible;
        opacity: 1;
    }
}

@keyframes animation_card_logo {
    from{
        transform: rotate(-25deg); 
    }
    to{
        transform: rotate(0deg);
    }   
}
@keyframes animation_card_description {
    from{
        transform: rotate(25deg); 
    }
    70%{
        transform: rotate(0deg);
        top: 0px;  
    }
    to{
       top:-50%;
       transform: rotate(0deg);
    }   
}


</style>