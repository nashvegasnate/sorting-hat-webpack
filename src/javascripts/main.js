import screenInit from './components/screenInit';

import domEvents from './helpers/domEvents';

import '../styles/main.scss';

const init = () => {
  screenInit();
  domEvents();
};

init();
