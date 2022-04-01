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
import VueGoodTablePlugin from 'vue-good-table-next';

// import the styles
import 'vue-good-table-next/dist/vue-good-table-next.css'

const app = createApp(App)
app.use(router)
app.use(VueGoodTablePlugin);
import 'bootstrap/dist/js/bootstrap'

app.mount('#app')
