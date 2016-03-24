/**
 * Created by matto on 2/28/16.
 */

export const SELECT_STUDENT = 'SELECT_STUDENT'
export const SELECT_ANSWER = 'SELECT_ANSWER'
export const ADD_STUDENT = 'ADD_STUDENT'
export const SAVED_STUDENT = 'SAVED_STUDENT'

export const selectStudent = (studentIndex)=> {return { type: SELECT_STUDENT, studentIndex}}

export const setAnswer = (studentId, selectedStudentIndex, row_index, id) => {
  return (dispatch, getState) =>{
    dispatch({type: SELECT_ANSWER, row_index, id})
    const state = getState()
    const questionid= state.surveyReducer.students[state.surveyReducer.selectedStudentIndex].questions[row_index].questionId
    fetch('/api/answers', {
      method:'post',
      headers:{'Accept':'application/json','Content-Type':'application/json'},
      body:JSON.stringify({
        studentId,
        questionId: questionid,
        answer: id
      })
    })
  }
}

export const addStudent = (studentName) => {
  return (dispatch) => {
    //post to DB
    fetch(`/api/students`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          name: studentName,
          headerItems: [],
          questions: []
        }
      )
    }).then((res)=>{
      res.json().then((data)=>{
        // add student to store
        dispatch({
          type: SAVED_STUDENT, student: data
        })
      })

    });

  }
}


