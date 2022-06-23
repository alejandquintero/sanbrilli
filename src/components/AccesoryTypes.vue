<template>
    <article v-for="(type, index) in types" :key="index" class="article">
        <img :src="type.img">
        <span> {{ type.description }} </span>
    </article>
</template>

<script>

export default{
    name: "AccesoryTypes",
    data(){
        return{ 
            types:[
                {
                    img: "bisuteria.webp",
                    description: "Collares",
                },
                {
                    img: "bisuteria.webp",
                    description: "Pulseras",
                },
                {
                    img: "bisuteria.webp",
                    description: "Zarcillos",
                },
                {
                    img: "bisuteria.webp",
                    description: "Anillos",
                }
            ],
        }
    }
}
</script>

<style scoped>

  .article{
    text-align: center;
    min-width: 140px;
    width: 30%;
    max-width: 350px;
    border-radius: 4px;
    /* box-shadow: 
      0 1px 10px #11111116,
      0 1px 10px #11111116 */
  }

  span{
    padding: 1rem 0;
    display: inline-block;
  }

</style>