import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-blue/theme.css'; // choose your theme
import 'primevue/resources/primevue.min.css'; // core styles
import 'primeicons/primeicons.css'; // icons
import 'primeflex/primeflex.css'; // utility classes

const app = createApp(App);

app.use(PrimeVue);
app.mount('#app');
