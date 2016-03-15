/**
 * Created by matto on 2/28/16.
 */
import {selectStudent, setAnswer, addStudent, INITIAL_STATE} from '../core/survey';

export const SELECT_STUDENT = 'SELECT_STUDENT'
export const SELECT_ANSWER = 'SELECT_ANSWER'
export const ADD_STUDENT = 'ADD_STUDENT'

export const selectStudent = (studentIndex)=>return { type: SELECT_STUDENT, studentIndex}
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SELECT_STUDENT:
      return selectStudent(state, action)
    case SELECT_ANSWER:
      return setAnswer(state, action);
    case ADD_STUDENT:
      return addStudent(state,action);

  }
  return state;
}

