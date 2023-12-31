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
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faCampground } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';

import { faWaveSquare } from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(
  faYoutube,
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faMagnifyingGlass,
  faCartShopping,
  faArrowRight,
  faPlay,
  faCampground,
  faAngleRight,
  faStopwatch,
  faDumbbell,
  faBowlFood,

  faWaveSquare
);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
