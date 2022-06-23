<template>
    <swiper
        :slidesPerView="1"
        :spaceBetween="10"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :navigation="true"
        :pagination="{
          dynamicBullets: true,
          clickable: true,
        }"
        :breakpoints="{
          '640': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '768': {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          '1024': {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>
            <img src="https://koketta.es/img/cms/cuatro-debajo-slider/pendientes-cat-home-04-2022.jpg" alt="accesorio">
            <span class="span">Descripcion</span>
        </swiper-slide>
        <swiper-slide>
            <img src="https://koketta.es/img/cms/cuatro-debajo-slider/anillos-cat-home-04-2022.jpg" alt="accesorio">
            <span class="span">Descripcion</span>
        </swiper-slide>
        <swiper-slide>
            <img src="https://koketta.es/img/cms/slider/chica-derecha-slider-abril-2022.jpg" alt="accesorio">
            <span class="span">Descripcion</span>
        </swiper-slide>
        <swiper-slide>
            <img src="https://scontent-mad1-2.cdninstagram.com/v/t51.29350-15/281241605_132230775829602_3173342645202742507_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=afTpXfVNg0MAX_SkRD2&_nc_ht=scontent-mad1-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9us0ZryxSG448TCgSthI9isVhoQdy6GNM0ooag2IC6BQ&oe=629756CE" alt="accesorio">
            <span class="span">Descripcion</span>
        </swiper-slide>
      </swiper>
</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from "swiper/vue";

  // Import Swiper styles
  import "swiper/css";

  import "swiper/css/pagination";
  import "swiper/css/navigation";

  // import required modules
  import { Autoplay, Pagination, Navigation } from "swiper";

export default {
    name: "CarouselNews",
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay, Pagination, Navigation],
      };
    },
  };

</script>

<style scoped>
    
    .swiper {
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        flex-direction: column;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
    .swiper-slide img {
        display: block;
        width: 100%;
        object-fit: cover;
    }
    .span{
        padding-top: 1rem;
        padding-bottom: 2rem;
    }
</style>
