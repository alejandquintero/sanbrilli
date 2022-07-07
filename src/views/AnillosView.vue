<template>
    <div class="anillos">
      <h1>ANILLOS ❤️</h1>
      <section class="section accessory__list">
        <AccesoryList></AccesoryList>
      </section>
    </div>
</template>

<script>
  import AccesoryList from '@/components/AccesoryList.vue';

  export default{
  name: 'AnillosView',
  data(){
    return{
      show: false
    }
  },
  components:{
    AccesoryList
  }
}
</script>

<style scoped>

  h1{
    letter-spacing: 2px;
    font-size: 5vw;
    font-weight: 100;
    margin: 2rem 0;
  }
  .section{
    margin: auto;
    width: var(--main-width);
  }

@media screen and (min-width: 640px) {
  h1{
    font-size: 2.5rem;
  }
}

</style>