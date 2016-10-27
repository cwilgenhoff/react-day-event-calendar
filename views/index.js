import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import configureStore from './store/configureStore';
import layOutDay from './layOutDay';

window.reduxStore = configureStore();
window.layOutDay = layOutDay;

render((
  <Root store={window.reduxStore} />
  ),
  document.getElementById('app'));
