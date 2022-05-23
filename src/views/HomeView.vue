<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <div>
    <div class="container__img">
      <img class="main__img" src="../assets/images/pic.jpg" alt="collar">
    </div>
    <h2>EL BRILLO QUE NECESITAS</h2>
    <section class="img section">
      <article class="article">
         <img src="../assets/images/pic.jpg" alt="collar">
         <span>Collares</span>
      </article>
      <article class="article">
         <img src="../assets/images/pic.jpg" alt="collar">
         <span>Pulseras</span>
      </article>      
      <article class="article">
         <img src="../assets/images/pic.jpg" alt="collar">
         <span>zarcillos</span>
      </article>      
      <article class="article">
         <img src="../assets/images/pic.jpg" alt="collar">
         <span>Anillos</span>
      </article>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// export default {
//   name: 'HomeView',
//   components: {
//     HelloWorld
//   }
// }
</script>

<style scoped>
  
  h2{
    letter-spacing: 2px;
    font-size: 5vw;
    font-weight: 100;
  }
  
  img{
    max-width: 100%;
    display: block;
  }

  .main__img{
    width: 100%;
    height: 45vh;
    display: block;
    object-fit: cover;
    object-position: center;
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
    margin-bottom: 10px;
  }

  h2{
    margin: 0 0 15px 0;
  }

  .section{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    width: 100%;
    margin-bottom: 10px;
  }

  .article{
    text-align: center;
    min-width: 170px;
    width: 30%;
    max-width: 350px;
    border-radius: 4px;
    box-shadow: 
      0 1px 10px #11111116,
      0 1px 10px #11111116
  }

</style>
