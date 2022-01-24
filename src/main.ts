import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from 'pinia'
const pinia = createPinia()

const app = createApp(App)

//挂载到vue根实例
app.use(pinia)

app.mount('#app')

