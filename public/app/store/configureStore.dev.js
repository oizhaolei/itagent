import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import reducer from '../reducers';

import DevTools from '../containers/DevTools';
import logger from '../reducers/middleware/logger.js';

export default function configureStore(initialState) {
  const finalCreateStore = compose(
    applyMiddleware(promise, logger),
    DevTools.instrument()
  )(createStore);

  const store = finalCreateStore(reducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
