import { createApp } from 'vue'
import App from './App.vue'
import './main.css'

import router from './router'
import { magnetic } from './directives/magnetic.js'

const app = createApp(App)
app.use(router)
app.directive('magnetic', magnetic)

app.mount('#app')
