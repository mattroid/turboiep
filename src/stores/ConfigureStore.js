/**
 * Created by matto on 2/28/16.
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './modules/reducer';
import fetch from '../core/fetch';

let initialStudent = undefined;

export default async function configureStore() {
  if (!initialStudent) {
    const response = await fetch(`/api/students`);
    initialStudent = await response.json();
  }

  const store = createStore(reducer,
    { surveyReducer:
      {
        students: initialStudent,
        selectedStudentIndex:0
      }
    },
    applyMiddleware(thunk)
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./modules/reducer', () => {
      const nextRootReducer = require('./modules/reducer');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
