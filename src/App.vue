<template>
  <img class="unisimon_logo" alt="unisimon_logo" src="./assets/uso logo.png">
  <HeaderPage msg="INVENTARIO DE PRUEBAS DEL PROGRAMA DE PSICOLOGIA"/>
  <ContentPage/>
</template>

<script>
import HeaderPage from './components/HeaderPage.vue'
import ContentPage from './components/ContentPage.vue';

export default {
  name: 'App',
  components: {
    HeaderPage,
    ContentPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  margin-top: 0px;
}

.unisimon_logo {
  background-color: white;
  width: 30%;
}


</style>
