import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';



const app = createApp(App)

// * On fait en sorte qu'axios soit global à toute l'app
axios.defaults.baseURL = 'https://suppliers.depembroke.fr/api/suppliers';
app.config.globalProperties.$axios = axios;

app.use(router)

app.mount('#app')
