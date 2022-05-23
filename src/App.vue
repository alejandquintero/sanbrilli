<template>
  <header class="header">
    <LogoSanBrilli></LogoSanBrilli>
    <aside class="aside">
      <div @click="menuActive" class="container-icon-menu ">
        <i class="icon-menu" :class="iconStyle"></i>
      </div>
    </aside>
  </header>
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
  <footer class="footer"><h4>Footer</h4></footer>
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
        menu : false
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
        return !this.menu ? '' : 'icon-menu--active';
      },
      navStyle(){
        return !this.menu ? '' : 'nav--active';
      }
    }
  }
</script>

<style>

#app {
  min-height: 100vh;
  color: var(--text-primary-color);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
  /* border-right: 3rem solid #fff; */
}

.header{
  width: 100%;
  padding: 1rem 0;
  background-color: var(--bg-primary-color);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;   
  box-shadow: 0 1px 15px #11111116;
}
.aside{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  width: 3rem;
  position:absolute;
  top: 0;
  right: 0;
  height:100%;
  z-index: 10;
  margin-right: 2rem;
}

.container-icon-menu{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 2px;
  width: 3rem;
  height: 40px;
  cursor: pointer;
}

.icon-menu{
  position: relative;
  display:block;
  width: 100%;
  height: 3px;
}

.icon-menu::before, 
.icon-menu::after{
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

.icon-menu::after{
  top: -5px
}

.icon-menu--active::before,
.icon-menu--active::after{
  top: 0;
  transform: rotate(45deg)
}

.icon-menu--active::after{
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
  position: absolute;
  top: 0;
  right: 0;
  height: 40vh;
  font-family: 'AnonymousPro';
  /* box-shadow: 0 1px 15px #11111116; */
  box-shadow: 0 1px 8px #11111120;
  transform: translateY(-110%);
  transition: transform .3s;
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
  height: 5rem;
  width: 100%;
  margin-top: auto;
  text-align: center;
  line-height: 35px;
  box-shadow: 0 -1px 15px #11111116;
}

</style>
