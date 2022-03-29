import { createApp } from 'vue'
import App from './App.vue'
import OpenPage from './components/OpenPage'
import IngatlanKinalat from './components/IngatlanKinalat'

import { createRouter, createWebHistory} from 'vue-router'

import 'bootstrap/dist/css/bootstrap.css'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: OpenPage},
        {path: '/offers', component: IngatlanKinalat}
    ]
})
const app = createApp(App)
app.use(router)
import 'bootstrap/dist/js/bootstrap'

app.mount('#app')
