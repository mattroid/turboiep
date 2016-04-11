/**
 * Created by matto on 2/28/16.
 */
import update from 'react-addons-update'
import _ from 'underscore'

const INITIAL_STATE = {
  students: [],
  selectedStudentIndex: 0,
}
const getStudents = () => {
  const students = fetch('/api/students')
  return students
}
const selectStudent = (state, action) =>
  update(state, { selectedStudentIndex: { $set: action.studentIndex } })

const addStudent = (state, action) => {
  const newState = update(
    state,
    { students: { $push: [action.student] },
    selectedStudentIndex: { $set: state.students.length },
  })
  return newState
}
const setAnswer = (state, action) => {
  const newRowQuestions = _.map(
    state.students[state.selectedStudentIndex]
      .questions[action.row_index]
      .questionItems, (o) => {
    let x = _.clone(o)
    x.checked = o.id === action.id ? !o.checked : false
    return x
  })
  let newstate = update(state, {
    students:
        { [state.selectedStudentIndex]:
          { questions:
            {
              [action.row_index]:
                { questionItems:
                  { $set: newRowQuestions },
                }
            }
          }
        }
  })
  return newstate
}
export {
  getStudents,
  addStudent,
  setAnswer,
  selectStudent,
  INITIAL_STATE
}
