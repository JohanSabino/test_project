<template>
  <div>
    <v-row>
      <v-col cols="12" md="1">
      </v-col>
      <v-col cols="12" md="10">
        <div id="header">
          <HeaderPage msg="INVENTARIO DE PRUEBAS - PSICOMETRÍA"/>
        </div> 
      </v-col>
      <v-col cols="12" md="1"> 
        <v-btn class="toggle-theme" @click="toggleTheme">🌙</v-btn>
      </v-col>
  </v-row>
  <v-row id="body">
    <v-col cols="12" md="8">
      <ContentPage/>
    </v-col>
    <v-col cols="12" md="4">
      <div class="aside-container">
        <AsideIa/> 
        </div>
    </v-col>

    
  </v-row>
    
  </div>
</template>

<script>
import { useTheme } from 'vuetify'
import HeaderPage from './components/HeaderPage.vue'
import ContentPage from './components/ContentPage.vue';
import AsideIa from './components/AsideIa.vue'
export default {
  name: 'App',
  components: {
    HeaderPage,
    ContentPage,
    AsideIa,
  },
  setup() {
    const theme = useTheme()

    function toggleTheme() {
      theme.global.name.value = theme.global.name.value === 'dark' ? 'light' : 'dark'
    }

    return { toggleTheme }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 0px;
}

#header {
  justify-content: space-between;
  align-items: center;
}

.toggle-theme {
  position: fixed;
  top: 20px;
  right: 30px;
  z-index: 1000;
  background-color: #444;
  color: white;
  border-radius: 50%;
  padding: 10px;
  transition: 0.3s;
}

.toggle-theme:hover {
  background-color: #222;
}
.aside-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%; /* Ocupa toda la altura de la columna */
}
</style>
