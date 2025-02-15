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

<style scoped>
/* Ajuste de tamaño del título */
h1 {
  font-size: 35px;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 15px;
}

/* Estilos del párrafo */
p {
  font-size: 20px;
  line-height: 1.5;
  text-align: center;
  color: #555;
}

/* Hacer que el texto se vea bien en móviles */
@media (max-width: 600px) {
  h1 {
    font-size: 28px; /* Reduce el tamaño en pantallas pequeñas */
  }
  
  p {
    font-size: 18px;
    padding: 0 10px;
  }
}
</style>
