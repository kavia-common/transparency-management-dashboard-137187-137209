import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// --- Nuxt UI integration removed: plugin not compatible with Vite SPA --- //

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
