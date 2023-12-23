import { createApp } from 'vue'
import App from './App.vue'

import './assets/tailwind.css'

// importing AOS css style globally
import 'aos/dist/aos.css'


const app = createApp(App)

app.mount('#app')

