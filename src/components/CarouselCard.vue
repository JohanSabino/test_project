<template>
  <div>
    <div id="forms">
    <v-form v-model='valid' autocomplete="off">
    <v-row>
      <v-col cols="12" md="3">
        <v-text-field
          v-model="searchTitle"
          label="Buscar por título"
          outlined
          prev-icon="mdi-chevron-left"
  next-icon="mdi-chevron-right"
  class="custom-carousel"
        ></v-text-field>
      </v-col>  
      <v-col cols="12" md="3">
        <v-text-field
          v-model="searchAcronym"
          label="Buscar por acrónimo"
          outlined
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="3">
        <v-text-field
          v-model="searchArea"
          label="Buscar por área"
          outlined
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="3">
        <v-text-field
          v-model="searchKeyword"
          label="Buscar por palabra clave en descripción"
          outlined
        ></v-text-field>
      </v-col>
    </v-row>
  </v-form>
</div>
    <div id="carousel">
    <v-carousel v-model="currentSlide" height="600" progress="secondary" hide-delimiters>
      <v-carousel-item
        v-for="test in filteredTests"
        :key="test.id"
      >
        <v-sheet height="100%">
          <div class="d-flex fill-height justify-center align-center">
            <div style="flex: 1; max-width: 60%;">
              <!-- Título más grande -->
              <div class="text-h4 font-weight-bold mb-4">
                {{ test.title }}
              </div>
              <!-- Acrónimo, área y descripción más pequeños -->
              <div class="text-h7">
                <div><strong>Acrónimo:</strong> {{ test.acronym }}</div>
                <div><strong>Área:</strong> {{ test.area }}</div>
                <div><strong>Descripción:</strong> {{ test.description }}</div>
                <div><strong>Ejemplares:</strong> {{ test.copies }}</div>
              </div>
            </div>
            <img :src="test.image" alt="Imagen" style="flex: 0 0 40%; max-width: 20%; height: auto;"/>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
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
      currentSlide: 0,
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
        if (this.nameTests.length > 0) {
          this.currentSlide = 0;
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  },
  computed: {
  filteredTests() {
    const titleQuery = this.searchTitle?.toLowerCase() || "";
    const acronymQuery = this.searchAcronym?.toLowerCase() || "";
    const areaQuery = this.searchArea?.toLowerCase() || "";
    const keywordQuery = this.searchKeyword?.toLowerCase() || "";

    return this.nameTests.filter(test => {
      return (
        (test.title?.toLowerCase() || "").includes(titleQuery) &&
        (test.acronym?.toLowerCase() || "").includes(acronymQuery) &&
        (test.area?.toLowerCase() || "").includes(areaQuery) &&
        (test.description?.toLowerCase() || "").includes(keywordQuery)
      );
    });
  }
}

}
</script>

<style scoped>

div #forms {

  padding: 1% 7% 0% 7%;
}

div #carousel {
  margin: 0px 80px 0px 80px ;
}
img{
  width: 10%;
}
v-col{
  border-radius: 10px;
}
.d-flex {
  display: flex;
  align-items: center; }

.text-h2 {
  font-size: 5rem; 
}
.text-h6 {
  font-size: 1.5rem;
}
.custom-carousel .v-btn {
  color: black !important;
}
</style>
