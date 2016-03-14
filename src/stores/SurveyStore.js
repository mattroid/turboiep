/**
 * Created by matto on 2/28/16.
 */
import {createStore} from 'redux';
import reducer from '../actions/SurveyActions';

export default function configureStore() {
  const store = createStore(reducer);
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../actions/SurveyActions', () => {
      const nextRootReducer = require('../actions/SurveyActions');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store
}
