<template>
    <article v-for="(type, index) in types" :key="index" class="article">
        <router-link :to="type.view" >
            <img class="img" :src="type.img">
            <span> {{ type.description }} </span>
        </router-link>
    </article>
</template>

<script>

export default{
    name: "AccesoryTypes",
    data(){
        return{ 
            types:[
                {
                    img: "img/bisuteria.webp",
                    description: "Anillos",
                    view: "/anillos"
                },
                {
                    img: "img/bisuteria.webp",
                    description: "Collares",
                    view: "/collares"
                },
                {
                    img: "img/bisuteria.webp",
                    description: "Pulseras",
                    view: "/pulseras"         
                },
                {
                    img: "img/bisuteria.webp",
                    description: "Zarcillos",
                    view: "/zarcillos"
                }
            ],
        }
    }
}
</script>

<style scoped>

  .article{
    transition: transform .3s;
  }

  .img{
    transition : box-shadow .3s;
  }

  .article:hover{
    transform: translateY(-20px);
  }

  .article:hover img{
    box-shadow: 
        0 2px 10px #ffc83d77,
        0 2px 10px #ffc83d77
  }

  span{
    padding: 1rem 0;
    display: inline-block;
  }

</style>