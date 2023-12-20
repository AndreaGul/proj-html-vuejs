import { createApp } from 'vue';
//file di partenza stili progetto
import './style.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

//file di partenza Vue
import App from './App.vue';

// font awesome

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */

import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(faMagnifyingGlass, faCartShopping);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
