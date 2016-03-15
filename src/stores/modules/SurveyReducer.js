/**
 * Created by Matt.OConnor on 3/15/2016.
 */

import {selectStudent, setAnswer, addStudent, INITIAL_STATE} from '../../core/survey';
import {SAVED_STUDENT, SELECT_ANSWER, SELECT_STUDENT, ADD_STUDENT} from '../../actions/SurveyActions'

export default function SurveyReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SELECT_STUDENT:
      return selectStudent(state, action)
    case SELECT_ANSWER:
      return setAnswer(state, action)
    case ADD_STUDENT:
      return state
    case SAVED_STUDENT:
      return addStudent(state,action)
  }
  return state
}
