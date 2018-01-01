import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


import { createStore } from 'redux';
import { merchantsReducer } from './reducers/index';
import { StoreState } from './types/index';

const store = createStore<StoreState>(merchantsReducer);


ReactDOM.render( 
  <Provider store={store}> 
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
