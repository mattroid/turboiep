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
          headerItems: {
            questionText: "\u00a0",
            questionItems:[
                {id: 1, checked: false, questionText: "Level 1"},
                {id: 2, checked: false, questionText: "Level 2"},
                {id: 3, checked: false, questionText: "Level 3"},
                {id: 4, checked: false, questionText: "Level 4"}
            ]
          },
          questions: [
            {
              questionText: "foo",
              questionType: "items",
            questionItems: [
            {id: 1, checked: false, questionText: "Students demonstrate limited to no mastery of knowledge and skills related to essentialized standards that do not meet proficiency."},
            {id: 2, checked: false, questionText: "Students demonstrate inconsistent or partial mastery of knowledge and skills related to essentialized standards that do not meet proficiency"},
            {id: 3, checked: false, questionText: "Students demonstrate adept knowledge and skills related to essentialized standards that meet proficiency."},
            {id: 4, checked: false, questionText: "Students demonstrate exceptional knowledge and skills related to essentialized standards that exceed the requirements for proficiency"},
            ]},
            {
              questionText: "some 1 to 4 question",
              questionType: "1to4",
              questionItems: [
              ]}
          ]
        }
      ]
}
const setAnswer = (state, action)=> {
  let newRowQuestions = _.map(state.students[0].questions[action.row_index].questionItems,(o)=>{
    let x = _.clone(o)
    x.checked = o.id==action.id ? true : false
    return x
  })
  let newstate = update(state,{
      students:
        {0:
          {questions:
            {[action.row_index]: {questionItems: {$set: newRowQuestions}}
            }
          }
        }
  })
  return newstate
}
export {setAnswer, INITIAL_STATE }

