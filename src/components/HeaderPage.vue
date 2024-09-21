<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Bienvenido/a <br> Acá podrá encontrar el inventario de pruebas actuales   
      en el laboratorio de psicometría, 
      disponibles para uso académico e investigativo.
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 45px;
}

p {
  font-size: 25px;

}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
