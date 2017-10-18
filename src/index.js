import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/store';
import registerServiceWorker from './registerServiceWorker';
import DevTools from './containers/DevTools';
import * as actions from './actions/actions-countries'

ReactDOM.render(
  <Provider store={store}>
    <div>
      <DevTools/>
    </div>
  </Provider>
  , document.getElementById('root'));

store.dispatch(actions.getCountries());
registerServiceWorker();
