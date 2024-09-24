import './assets/styles.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// import Vue3Modal from 'vue3-modal';
// import 'vue3-modal/dist/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Add icons to the library
library.add(faGithub, faLinkedin);

const app = createApp(App);
app.use(router);
// app.use(Vue3Modal);
app.component('font-awesome-icon', FontAwesomeIcon);  
AOS.init();
app.mount('#app');
