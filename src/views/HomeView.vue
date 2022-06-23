<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <div>
    <div class="container__img">
      <img class="main__img" src="../assets/img/image.webp" alt="collar">
    </div>
    <h2>EL BRILLO QUE NECESITAS 😊</h2>
    <section class="section accessory__types">
      <AccesoryTypes></AccesoryTypes>
    </section>
    <h2>NOVEDADES 🥰</h2>
    <section class="section container__carousel" >
       <CarouselNews></CarouselNews>
    </section>
  </div>
</template>

<script>
//import HelloWorld from '@/components/HelloWorld.vue'ç
  import CarouselNews from '@/components/CarouselNews.vue';
  import AccesoryTypes from '@/components/AccesoryTypes.vue';

  export default{
    name: 'HomeView',
    components:{
      CarouselNews ,
      AccesoryTypes
    }
  }

</script>

<style scoped>
  
  h2, h3{
    letter-spacing: 2px;
    font-size: 5vw;
    font-weight: 100;
    margin: 2rem 0;
  }
  
  img{
    max-width: 100%;
    display: block;
  }

  .main__img{
    width: 100%;
    /* height: 45vh;
    display: block;
    object-fit: cover;
    object-position: top; */
  }

  div{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .container__img{
    width: 100%;
  }

  .section{
    width: 80%;
  }

  .accessory__types{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
  }
  
@media screen and (min-width: 700px) {
  h2{
    font-size: 2.5rem;
  }
}
</style>
