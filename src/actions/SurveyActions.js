/**
 * Created by matto on 2/28/16.
 */
import {setAnswer, INITIAL_STATE} from '../core/survey';

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SELECT_ANSWER':
      return setAnswer(state, action);

  }
  return state;
}
