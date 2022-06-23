<template>

  <header class="header" :class="cargado">
    <LogoSanBrilli></LogoSanBrilli>
  </header>

  <div @click="inputActive" class="container__search">
    <label for="search" class="container__input__search">
      <input class="search" type="text" v-model="search" id="search" placeholder="Buscar...">
      <div class="container__icon-search">
        <img src="./assets/img/icons8-search.svg" alt="Logo de búsqueda">
      </div>
    </label>
  </div>

  <div @click="menuActive" class="container__icon__menu">
      <i class="icon__menu" :class="iconStyle"></i>
  </div>

  <div> {{ search }} </div>
  
  <main class="main">
    <nav class="nav" :class="navStyle" @click="navActive">
      <router-link to="/">HOME</router-link>
      <router-link to="/about">ABOUT</router-link>
      <router-link to="/collares">COLLARES</router-link>
      <router-link to="/pulseras">PULSERAS</router-link>
      <router-link to="/zarcillos">ZARCILLOS</router-link>
    </nav>
    <router-view/>
  </main>
  <footer class="footer">
    <a target="_blank" href="https://www.instagram.com/sanbrilli_accesorios/" class="footer__container__instagram">
      <div class="container__img__instagram">
        <img src="./assets/img/icon-instagram.svg" alt="Logo de instagram">
      </div>
      <h4 class="footer__title">@sanbrilli_accesorios</h4>
    </a>
    <p class="paragraph footer__paragraph">Todos los derechos reservados - 2022</p>
  </footer>
</template>

<script>
  import LogoSanBrilli from './components/LogoSanBrilli.vue';

  export default {
    name: "App",
    components: {
      LogoSanBrilli
    },
    data(){
      return{
        menu : false,
        inputSearch: false,
        search: "",
        show: [],
        array:["Collar001", "Collar002", "Collar003"]
      }
    },
    methods: {
      menuActive(){
        this.menu = !this.menu;
      },
      navActive(){
        this.menu = false;
      }
    },
    computed:{
      iconStyle(){
        return !this.menu ? '' : 'icon__menu--active';
      },
      navStyle(){
        return !this.menu ? '' : 'nav--active';
      }
    },
    watch:{
      search(oldValue){
        console.log(this.array.filter(element => element.includes(oldValue))); //Hay que mostrarlo en otro componente
      }
    },
    mounted(){
      document.body.classList.add('cargado');
    }
  }
</script>

<style>

img{
  max-width: 100%;
  display: block;
}

a{
  text-decoration: none;
  color: #111;
}

#app {
  min-height: 100vh;
  color: var(--text-primary-color);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
  position: relative;
}

.header{
  padding: 1rem 0 2rem 0;
  background-color: var(--bg-primary-color);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
  height: var(--height-header-aside);
  box-shadow: 0 1px 15px #11111116;
  z-index: 5;
}
.container__search{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: inherit;
  height: var(--height-header-aside);
  width: 100%;
  z-index: 10;
}

.container__input__search{
  position: absolute;
  bottom: 5px;
  width: 250px;
  height: 30px;
}

.search{
  width: 100%;
  height: 25px;
  border-radius: 8px;
  outline: none;
  padding: .5rem 1.5rem .5rem 1rem;
  border: 1px solid #33333322;
  font-family: 'AnonymousPro';
  transition : height .5s;
}

.container__icon-search{
  width: 15px;
  height: 15px;
  position: absolute;
  top: .3rem;
  right: .5rem;
}

.container__icon__menu{
  display: flex;
  position: fixed;
  right: 1.5rem;
  justify-content: center;
  align-items: center;
  padding: 10px 2px;
  width: 3rem;
  height: var(--height-header-aside);
  cursor: pointer;
  z-index: 15;
}

.icon__menu{
  position: relative;
  display:block;
  width: 100%;
  height: 3px;
}

.icon__menu::before, 
.icon__menu::after{
  content: '';
  display: block;
  background-color: var(--bg-secondary-color);
  position: absolute;
  top: 5px;
  border-radius: 5px;
  width: 100%;
  height: 2px;
  transition : all .2s;
}

.icon__menu::after{
  top: -5px
}

.icon__menu--active::before,
.icon__menu--active::after{
  top: 0;
  transform: rotate(45deg)
}

.icon__menu--active::after{
  transform: rotate(-45deg)
}

.nav {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  padding: 30px;
  background-color: var(--bg-primary-color);
  min-width: 200px;
  width: 15%;
  position: fixed;
  top: 0;
  right: 0;
  height: 40vh;
  font-family: 'AnonymousPro';
  box-shadow: 0 1px 8px #11111120;
  transform: translateY(-110%);
  transition: transform .3s;
  z-index: 10;
}

.nav--active{
  transform: translateY(0);
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
nav a.router-link-exact-active {
  color: #42b983;
}

main{
  font-family: 'AnonymousPro';
}

.footer{
  background-color: var(--bg-primary-color);
  padding: 1.5rem 0;
  width: 100%;
  margin-top: auto;
  text-align: center;
  line-height: 35px;
  box-shadow: 0 -1px 15px #11111116;
  font-family: 'AnonymousPro';
  font-size: .85rem;
}

.footer__title{
  margin: 0;
}
.footer__container__instagram{
  display: flex;
  justify-content: center;
  align-items : center;
  gap: .2rem;
}

.container__img__instagram{
  width: 25px;
  height: 25px;
}

.paragraph{
  margin: 0;
}


@media screen and (min-width: 768px) {
  .header, 
  .container__search,
  .container__icon__menu{
    height: var(--height2-header-aside);
  }

  .header{
      padding: 1rem 0;
  }

  .container__input__search{
    left: 1.5rem;
    bottom: auto;
    width: 25%;
    max-width: 300px;
  }

  .search{
    height: 35px;
  }

  .container__icon-search{
    top: .6rem;
  }
}



</style>
