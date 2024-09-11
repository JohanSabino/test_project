<template>
  <img alt="unisimon logo" src="./assets/uso logo.png">
  <headerPage msg="INVENTARIO DE PRUEBAS DEL PROGRAMA DE PSICOLOGIA"/>
</template>

<script>
import HeaderPage from './components/HeaderPage.vue'

export default {
  name: 'App',
  components: {
    HeaderPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
