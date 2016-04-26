import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import routes from './config/routes';
import reducers from './reducers'
let store = createStore(reducers)

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
