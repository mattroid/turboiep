/**
 * Created by matto on 2/28/16.
 */

export const SELECT_STUDENT = 'SELECT_STUDENT'
export const SELECT_ANSWER = 'SELECT_ANSWER'
export const ADD_STUDENT = 'ADD_STUDENT'
export const SAVED_STUDENT = 'SAVED_STUDENT'

export const selectStudent = (studentIndex)=> {return { type: SELECT_STUDENT, studentIndex}}
export const setAnswer = (row_index, id) => {return {type: SELECT_ANSWER, row_index, id}}

export const addStudent = (studentName) => {
  return (dispatch) => {
    //post to DB
    fetch(`/api/students/add`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          name: studentName
        }
      )
    }).then((res)=>{
      console.log(JSON.stringify(res.json()))
      // add student to store
      dispatch({
        type: SAVED_STUDENT, student: res.body
      })
    });

  }
}


