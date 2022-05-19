<template>
  <header class="header">
    <div class="logo-title">
      <h1 class="logo-title__title">San Brilli</h1>
      <h6 class="logo-title__subtitle">ACCESORIOS</h6>
      <div class="stars">
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
      </div>
    </div>
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
  export default {
    name: "App",
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

@font-face{
    font-family: 'BellaBoo';
    src: url('./assets/fonts/bellaboo-1.ttf');
}

@font-face {
  font-family: 'AnonymousPro';
  src: url('./assets/fonts/AnonymousPro-Regular.ttf');
}

@font-face {
  font-family: 'AnonymousProBold';
  src: url('./assets/fonts/AnonymousPro-Bold.ttf');
}

:root{
  --bg-primary-color: #f8f8f8;
  --bg-secondary-color: #111;
  --text-primary-color: #111;
}

*{
  box-sizing: border-box;
}

body{
    margin: 0;
}

#app {
  min-height: 100vh;
  color: var(--text-primary-color);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* border-right: 3rem solid #fff; */
  color: #000000;
  text-align: center;

}

.header{
    width: 100%;
    height: 6rem;
    background-color: var(--bg-primary-color);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;   
    box-shadow: 0 1px 15px #11111116;
}

.logo-title{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.logo-title__title{
    font-size: 3rem;
    font-family: 'BellaBoo';
    margin: 0;
}

.logo-title__subtitle{
    transform: translateY(-7.5px);
    font-family: 'AnonymousPro';
    font-weight: 100;
    letter-spacing: 3.2px;
    margin: 0;
}

.stars{
  width: 25px;
  height: 25px;
  position: absolute;
  top: 0;
  right: 0;
}

.star{
  background-color: #f7d610;
  position: absolute;
  width: 12px;
  height: 12px;
  clip-path: polygon(50% 0, 60% 20%, 68% 30%, 80% 40%, 100% 50%, 80% 60%, 68% 70%, 60% 80%, 50% 100%, 40% 80%, 32% 70%, 20% 60%, 0% 50%, 20% 40%, 32% 30%, 40% 20%);
}

.star:first-child{
  transform: translate(3px, -6px);
}

.star:nth-child(2){
  width: 8px;
  height: 8px;
  transform: translate(14px, 1px);
}
.star:last-child{
  width: 6px;
  height: 6px;
  transform: translate(18px, -5px);
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
  height:6rem;
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
  padding: 5rem;
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
