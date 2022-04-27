import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Steps from 'primevue/steps';

const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.component('Steps', Steps);
app.mount('#app');
// createApp(App).use(router).mount('#app')//

