import { createApp } from 'vue'

//Components
import App from './App.vue'

//Vuetify

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light'
  }
})

createApp(App).use(vuetify).mount('#app')

