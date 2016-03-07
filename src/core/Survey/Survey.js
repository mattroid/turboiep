/**
 * Created by matto on 2/28/16.
 */
import update from 'react-addons-update'
import _ from 'underscore'

const INITIAL_STATE = {
  students:
    [
        {
          name:"Evorie O'Connor",
          headerQuestions: [
            {id: 0, checked: false, questionText: "\u00a0"},
            {id: 1, checked: false, questionText: "Level 1"},
            {id: 2, checked: false, questionText: "Level 2"},
            {id: 3, checked: false, questionText: "Level 3"},
            {id: 4, checked: false, questionText: "Level 4"}
            ],
          questionRows: [[
            {id: 0, checked: false, questionText: "\u00a0"},
            {id: 1, checked: false, questionText: "Students demonstrate limited to no mastery of knowledge and skills related to essentialized standards that do not meet proficiency."},
            {id: 2, checked: false, questionText: "Students demonstrate inconsistent or partial mastery of knowledge and skills related to essentialized standards that do not meet proficiency"},
            {id: 3, checked: false, questionText: "Students demonstrate adept knowledge and skills related to essentialized standards that meet proficiency."},
            {id: 4, checked: false, questionText: "Students demonstrate exceptional knowledge and skills related to essentialized standards that exceed the requirements for proficiency"},
            ],[
            {id: 0, checked: false, questionText: "\u00a0"},
            {id: 1, checked: false, questionText: "Students demonstrate limited to no mastery of knowledge and skills related to essentialized standards that do not meet proficiency."},
            {id: 2, checked: false, questionText: "Students demonstrate inconsistent or partial mastery of knowledge and skills related to essentialized standards that do not meet proficiency"},
            {id: 3, checked: false, questionText: "Students demonstrate adept knowledge and skills related to essentialized standards that meet proficiency."},
            {id: 4, checked: false, questionText: "Students demonstrate exceptional knowledge and skills related to essentialized standards that exceed the requirements for proficiency"},
            ], [
            {id: 0, checked: false, questionText: "\u00a0"},
            {id: 5, checked: false, questionText: "Performance indicates that the student has limited to no understanding of academic concepts aligned to essentialized standards"},
            {id: 6, checked: false, questionText: "Performance indicates an inconsistent or partial understanding of academic concepts aligned to essentialized standards"},
            {id: 7, checked: false, questionText: "Performance indicates consistent understanding of academic concepts aligned to essentialized standards."},
            {id: 8, checked: false, questionText: "Performance indicates superior understanding of academic concepts aligned to essentialized standards."}
            ]
          ]
        }
      ]
}
const setAnswer = (state, action)=> {
  let newRowQuestions = _.map(state.students[0].questionRows[action.row_index],(o)=>{
    let x = _.clone(o)
    x.checked = o.id==action.id ? true : false
    return x
  })
  let newstate = update(state,{
      students:
        {0:
          {questionRows:
            {[action.row_index]: {$set: newRowQuestions}
            }
          }
        }
  })
  return newstate
}
export {setAnswer, INITIAL_STATE }

