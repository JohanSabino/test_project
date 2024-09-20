<template>
  <div>
    <v-text-field
      v-model="searchQuery"
      label="Buscar por título, acrónimo o área"
      outlined
      clearable
    ></v-text-field>

    <v-carousel height="700" progress="primary" hide-delimiters>
      <v-carousel-item
        v-for="test in filteredTests"
        :key="test.id"
      >
        <v-sheet height="100%">
          <div class="d-flex fill-height justify-center align-center">
            <div style="flex: 1; max-width: 60%;">
              <div class="text-h2">
                <div>{{ test.title }}</div>
                <div><strong>Acrónimo:</strong> {{ test.acronym }}</div>
                <div><strong>Área:</strong> {{ test.area }}</div>
                <div><strong>Descripción:</strong> {{ test.description }}</div>
                <div><strong>Ejemplares:</strong> {{ test.copies }}</div>
              </div>
            </div>
            <img :src="test.image" alt="Imagen" style="flex: 0 0 40%; max-width: 25%; height: auto;" />
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nameTests: [],
      searchQuery: '' // Campo de búsqueda
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch('/datatest.json'); // Manteniendo la ruta original
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data); // Log para verificar el JSON
        this.nameTests = data; // Asigna el JSON al array
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  },
  computed: {
    filteredTests() {
      const query = this.searchQuery.toLowerCase();
      return this.nameTests.filter(test => {
        return (
          test.title.toLowerCase().includes(query) ||
          test.acronym.toLowerCase().includes(query) ||
          test.area.toLowerCase().includes(query)
        );
      });
    }
  }
}
</script>

<style scoped>
.d-flex {
  display: flex;
  align-items: center; /* Centra verticalmente */
}
</style>
