<template>
  <div>
    <v-row>
      <v-col cols="3">
        <v-text-field
          v-model="searchTitle"
          label="Buscar por título"
          outlined
          clearable
        ></v-text-field>
      </v-col>

      <v-col cols="3">
        <v-text-field
          v-model="searchAcronym"
          label="Buscar por acrónimo"
          outlined
          clearable
        ></v-text-field>
      </v-col>

      <v-col cols="3">
        <v-text-field
          v-model="searchArea"
          label="Buscar por área"
          outlined
          clearable
        ></v-text-field>
      </v-col>

      <v-col cols="3">
        <v-text-field
          v-model="searchKeyword"
          label="Buscar por palabra clave en descripción"
          outlined
          clearable
        ></v-text-field>
      </v-col>
    </v-row>

    <v-carousel height="700" progress="primary" hide-delimiters>
      <v-carousel-item
        v-for="test in filteredTests"
        :key="test.id"
      >
        <v-sheet height="100%">
          <div class="d-flex fill-height justify-center align-center">
            <div style="flex: 1; max-width: 60%;">
              <!-- Título más grande -->
              <div class="text-h2 font-weight-bold mb-4">
                {{ test.title }}
              </div>
              <!-- Acrónimo, área y descripción más pequeños -->
              <div class="text-h6">
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
      searchTitle: '', // Campo de búsqueda por título
      searchAcronym: '', // Campo de búsqueda por acrónimo
      searchArea: '', // Campo de búsqueda por área
      searchKeyword: '', // Campo de búsqueda por palabra clave
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
      const titleQuery = this.searchTitle.toLowerCase();
      const acronymQuery = this.searchAcronym.toLowerCase();
      const areaQuery = this.searchArea.toLowerCase();
      const keywordQuery = this.searchKeyword.toLowerCase();

      return this.nameTests.filter(test => {
        return (
          test.title.toLowerCase().includes(titleQuery) &&
          test.acronym.toLowerCase().includes(acronymQuery) &&
          test.area.toLowerCase().includes(areaQuery) &&
          test.description.toLowerCase().includes(keywordQuery)
        );
      });
    }
  }
}
</script>

<style scoped>
.d-flex {
  display: flex;
  align-items: center; }

.text-h2 {
  font-size: 5rem; 
}
.text-h6 {
  font-size: 1.5rem;
}
</style>
