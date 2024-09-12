<template>
  <v-carousel
    height="400"
    progress="primary"
    hide-delimiters
  >
    <v-carousel-item
      v-for="(test, i) in nameTests"
      :key="i"
    >
      <v-sheet
        height="100%"
      >
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2">
            {{ test }}
          </div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
//import CardTest from './CardTest.vue';

  export default {
    data () {
      return {
        nameTests: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
          'asdasda',
          'asdasda',
          'asdasda',
          'asdasda',
          'asdasda',
          'asdasda',
          'asdasda',
          'asdasda',
          'asdasda',
        ],
      }
    },
    components: {
      //CardTest
    }
  }
</script>