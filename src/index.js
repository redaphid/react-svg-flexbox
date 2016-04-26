import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import routes from './config/routes';
import reducers from './reducers'
import {loadFlow} from './actions'
let store = createStore(reducers)

store.dispatch(loadFlow({uuid: 1}))

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
