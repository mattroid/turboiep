/**
 * Created by matto on 2/28/16.
 */
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../actions/SurveyActions';

export default function configureStore() {
  const store = createStore(reducer, applyMiddleware(thunk));
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../actions/SurveyActions', () => {
      const nextRootReducer = require('../actions/SurveyActions');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store
}
