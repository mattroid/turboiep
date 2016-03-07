/**
 * Created by matto on 2/28/16.
 */
import {createStore} from 'redux';
import reducer from '../actions/SurveyActions';

export default function makeStore() {
  return createStore(reducer);
}
