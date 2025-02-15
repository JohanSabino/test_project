<template>
  <v-container>
    <v-card class="pa-4">
      <!-- Campo de entrada de la pregunta -->
      <v-textarea
        v-model="prompt"
        label="Escribe tu pregunta"
        outlined
        rows="3"
        clearable
      ></v-textarea>

      <!-- Botón para enviar la pregunta -->
      <v-btn @click="sendRequest" :loading="isLoading" color="secondary" class="mt-2">
        Consultar
      </v-btn>

      <!-- Respuesta de la IA con scroll si es necesario -->
      <v-card v-if="response" class="mt-4 pa-3 response-container">
        <h3 class="text-h6 mb-2">Respuesta de la IA:</h3>
        <div class="response-content">
          <pre class="response-text">{{ response }}</pre>
        </div>
      </v-card>

      <!-- Mensaje de error si ocurre algún problema -->
      <v-alert v-if="error" type="error" class="mt-4">
        {{ error }}
      </v-alert>
    </v-card>
  </v-container>
</template>

<script>
import { ref } from "vue";
import { askGemini } from "../services/iaService";

export default {
  name: "AsideIa",
  setup() {
    const prompt = ref("");
    const response = ref("");
    const isLoading = ref(false);
    const error = ref("");

    async function sendRequest() {
      if (!prompt.value.trim()) {
        error.value = "Por favor, escribe una pregunta.";
        return;
      }
      isLoading.value = true;
      error.value = "";
      response.value = "";

      try {
        response.value = await askGemini(prompt.value);
      } catch (err) {
        error.value = "Error al obtener respuesta de la IA.";
        console.error(err);
      } finally {
        isLoading.value = false;
      }
    }

    return { prompt, response, isLoading, error, sendRequest };
  }
};
</script>

<style scoped>
/* Contenedor de la respuesta con scroll */
.response-container {
  background: #f5f5f5;
  border-radius: 8px;
  padding: 10px;
  max-height: 400px;  /* Altura máxima */
  overflow-y: auto;   /* Scroll cuando exceda */
}

/* Formato del texto de la respuesta */
.response-text {
  white-space: pre-wrap;
  word-wrap: break-word;
  font-size: 14px;
}

/* Ajustes responsivos */
@media (max-width: 600px) {
  .response-container {
    max-height: 300px; /* Reducir altura en móviles */
    padding: 8px;
  }
}
</style>
