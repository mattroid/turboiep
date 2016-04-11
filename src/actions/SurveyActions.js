/**
 * Created by matto on 2/28/16.
 */

export const SELECT_STUDENT = 'SELECT_STUDENT'
export const SELECT_ANSWER = 'SELECT_ANSWER'
export const ADD_STUDENT = 'ADD_STUDENT'
export const SAVED_STUDENT = 'SAVED_STUDENT'

export const selectStudent = (studentIndex) => { SELECT_STUDENT, studentIndex } // eslint-disable-line no-unused-expressions, no-sequences, max-len

export const setAnswer = (studentId, selectedStudentIndex, rowIndex, id) =>
  (dispatch, getState) => {
    dispatch({ type: SELECT_ANSWER, rowIndex, id })
    const state = getState()
    const questionid = state.surveyReducer.students[state.surveyReducer.selectedStudentIndex]
                       .questions[rowIndex]
                       .questionId
    fetch('/api/answers', {
      method: 'post',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        studentId,
        questionId: questionid,
        answer: id,
      }),
    })
  }

export const addStudent = (studentName) =>
  (dispatch) => {
    // post to DB
    fetch(`/api/students`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
          name: studentName,
          headerItems: [],
          questions: [],
        }
      ),
    }).then((res) => {
      res.json().then((data) => {
        // add student to store
        dispatch({
          type: SAVED_STUDENT, student: data,
        })
      })
    });
  }
