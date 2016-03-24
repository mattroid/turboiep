import feathers from 'feathers'
import NeDb from 'nedb'
import bodyParser from 'body-parser'
import service from 'feathers-nedb'
import hooks from 'feathers-hooks'
import socketio from 'feathers-socketio'
import rest from 'feathers-rest'

const answerdb = new NeDb({
  filename: './db-data/answers',
  autoload: true
});
const studentdb = new NeDb({
  filename: './db-data/students',
  autoload: true
});

const app = feathers()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.configure(rest())
app.configure(socketio())
app.configure(hooks())

app.use('/students', service({Model:studentdb}))
app.use('/answers', service({Model:answerdb}))

export default app

const studentService = app.service('/students')
const answerService = app.service('/answers')
studentService.before({
  find(hook){
    //find all answers and map them to the questions
  },
  create(hook){
    if(hook.data.questions || hook.data.questions.length==0){
      hook.data.headerItems = getDefaultHeaderItems();
      hook.data.questions = getDefaultMathQuestions();
    }
  }
});
studentService.after({
  find(hook, next){
    //get answers for this student
    const studentId = hook.result[0]._id
    answerService.find({query: {studentId:studentId}}).then((answers)=>{
      //map answers to questions
      hook.result[0].questions.forEach((question)=>{
        answers.forEach((answer)=>{
          if(answer.questionId==question.questionId)
          question.questionItems.forEach((qitem)=>{
            if(qitem.id == answer.answer){
              qitem.checked=true
            } else {
              qitem.checked=false
            }
          })
        })
      })
      next()
    })

  }
})
const getDefaultHeaderItems = () => {
  return {
    questionText: "\u00a0",
    questionItems:
      [
        {id: 1, checked: false, questionText: "Emerging"},
        {id: 2, checked: false, questionText: "Begining"},
        {id: 3, checked: false, questionText: "Traditional"},
      ]
  }
}
const getDefaultMathQuestions = () => [
  {
    questionId: "1",
    questionText: "Rote Counting",
    questionType: "items",
    questionItems: [
      {id: 1, checked: false, questionText: "counts to 2 e.g. during  a game"},
      {id: 2, checked: false, questionText: "Counts to 5 e.g. during a game"},
      {id: 3, checked: false, questionText: "Counts to 10 e.g. during a game"},
    ]},
  {
    questionId: "2",
    questionText: "Counts Objects (1:1 Correspondence)",
    questionType: "items",
    questionItems: [
      {id: 1, checked: false, questionText: "Correctly counts two objects e.g. counts (while obtaining) 2 socks"},
      {id: 2, checked: false, questionText: "Correctly counts objects 1-5 e.g. counts out five playing cards"},
      {id: 3, checked: false, questionText: "Correctly counts objects 1-10 e.g. counts out ten playing cards"},
    ]},
  {
    questionId: "3",
    questionText: "Points to Numbers",
    questionType: "items",
    questionItems: [
      {id: 1, checked: false, questionText: "When needed points to #s 1-5 correctly e.g. points to a specific floor on an elevator when requested to do so"},
      {id: 2, checked: false, questionText: "When needed points to #s 1-10 correctly e.g. points to a specific floor on an elevator when requested to do so"},
      {id: 3, checked: false, questionText: "When needed points to #s 1-20 correctly e.g. points to a specific floor on an elevator when requested to do so"},
    ]},
  {
    questionId: "4",
    questionText: "Names Numbers",
    questionType: "items",
    questionItems: [
      {id: 1, checked: false, questionText: "In response to a picture of the number, indicates correct # name for #s 1-10 e.g. identifies page number from book"},
      {id: 2, checked: false, questionText: "In response to a picture of the number, indicates correct # name for #s 1-25 e.g. identifies page number from book"},
      {id: 3, checked: false, questionText: "In response to a picture of the number, indicates correct # name for #s 1-100 e.g. identifies page number from book"},
    ]},
  {
    questionId: "5",
    questionText: "Sequencing Numbers (FLS only)",
    questionType: "items",
    questionItems: [
      {id: 1, checked: false, questionText: "* Puts numerals 1-5 in order; tells which numeral comes after a given number less than 5"},
      {id: 2, checked: false, questionText: "* Puts numerals 1-10 in order. \n* tells which numeral comes before and after a given numeral less than 10"},
      {id: 3, checked: false, questionText: "* Ues ordinal numbers (first, second, third, etc.)"},
    ]},
  {
    questionId: "6",
    questionText: "Addition",
    questionType: "items",
    questionItems: [
      {id: 1, checked: false, questionText: "Adds any combination of single digit #s Example: 7+1=8 e.g. student has seven blocks and needs eight. \n* Adds using objects or fingers \n* Adds using calculator/computer \n* Adds using paper and writing implement"},
      {id: 2, checked: false, questionText: "Adds any combination of single digit #s Example: 7+1=8 e.g. student has seven blocks and needs seventeen. \n* Adds using objects or fingers \n* Adds using calculator/computer \n* Adds using paper and pencil"},
      {id: 3, checked: false, questionText: "Adds two double digit #s e.g. student has eleven blocks and needs twenty two"},
    ]},
  {
    questionId: "7",
    questionText: "Subtraction",
    questionType: "items",
    questionItems: [
      {id: 1, checked: false, questionText: "Subtracts any combination of single digit #s Example: 7-1=6 e.g. student has seven blocks and needs six \n* Subtracts using objects or fingers \n* Subtracts using calculator/computer \n* Subtracts using paper/pencil"},
      {id: 2, checked: false, questionText: "Subtracts any combination of single digit #s Example: 7-1=6 e.g. student has seventeen blocks and needs seven \n* Subtracts using objects or fingers \n* Subtracts using calculator/computer \n* Subtracts using paper/pencil"},
      {id: 3, checked: false, questionText: "Subtracts two double digit #s e.g. student has twenty two blocks and needs eleven"},
    ]},
  {
    questionId: "8",
    questionText: "Colors and Shapes",
    questionType: "items",
    questionItems: [
      {id: 1, checked: false, questionText: "Matches items by color and shape with identitical items e.g. matches functional item by color and shape\n* Matches objects to sample by color and shape\n* Matches pictures to sample by color and shape"},
      {id: 2, checked: false, questionText: "Sorts identical items into groups Example: size, color, shape e.g. forks, knives, and spoons in respective locations\n* Classifies objects by color\n* Classifies objects by shape\n* Classifies objects by size"},
      {id: 3, checked: false, questionText: "Sorts similar items with similar attributes into groups by color and shape\ne.g nuts and bolts by size and shape"},
    ]},
  {
    questionId: "9",
    questionText: "Counts Sets of Objects",
    questionType: "items",
    questionItems: [
      {id: 1, checked: false, questionText: "When requested student identifies a set of objects (selecting from 5 objects) e.g. Student can identify one place setting of silverware when choosing from 2 forks, 2 spoons, and 1 knife"},
      {id: 2, checked: false, questionText: "When requested student selects a set of objects (selecting from 10 objects) e.g. Student can identify grooming items (comb, brush, and hair dryer) from a group containing 7 other non-related items (fork, book, blocks, etc.)"},
      {id: 3, checked: false, questionText: "When requested student selects a set of objects (selecting from 20 objects) e.g. Student can identify grooming items (comb, brush and hair dryer) from a group containing 17 other non-related items (For, book, blocks, etc.)"},
    ]},
  {
    questionId: "10",
    questionText: "Uses Money",
    questionType: "items",
    questionItems: [
      {id: 1, checked: false, questionText: "Recognizes or points to most coins/bills by name/amount\ne.g. \"Give me a quarter and a dime for your pop\"\n* Trades or exchanges one item for another (e.g. ticket for lunch)\n* Recognizes that money has value in making purchases\n* Recognizes penny, nickel, dime, quarter, dollar"},
      {id: 2, checked: false, questionText: "Pay with next larger dollar amount to $5 given $1 bills (e.g. Pays $4 for $3.75 item)\n* Reads written monetary amounts\n* Waits for change"},
      {id: 3, checked: false, questionText: "Using bills and quarters, pays with closet coin combination e.g. basketball game hot dog for $1.59; student pays with $1.75\n* Makes change\n* Counts change from purchase"},
    ]},
  {
    questionId: "11",
    questionText: "Time Telling",
    questionType: "items",
    questionItems: [
      {id: 1, checked: false, questionText: "Identifies general time of day e.g. morning, night, lunchtime\n* ues cues to anticipate closure of activities\n* Associates activities with time of day\n* Compares time of occurrence of two events using \"first, then\"\n* Demonstrates understanding of day of the week by associating it with activities"},
      {id: 2, checked: false, questionText: "Reads digital clock/standard clock to the half hour e.g. on the half hour, student uses clock to transition to next activity on time\n* Uses wall clock or watch to identify time for routine activities\n* Associates activities with seasons of year and holidays\n* Compares time of occurrence of two events using terms \"before, after\""},
      {id: 3, checked: false, questionText: "Reads standard clock e.g. student uses clock to transition any time of day\n* Uses TV schedules\n* Reads and applies transportation schedules\n* uses personal calendar to keep track of birthdays, holidays, and special events"},
    ]},
  {
    questionId: "12",
    questionText: "Measurement (FLS only)",
    questionType: "items",
    questionItems: [
      {id: 1, checked: false, questionText: "Demonstrates understanding of general comparisons (more/less, first/last, big/small)"},
      {id: 2, checked: false, questionText: "Indicates simple comparissons of size or quantity (taller/shorter; bigger/smaller)"},
      {id: 3, checked: false, questionText: "* Uses more complex measurements (feet, inches, quart, gallon, pounds)\n* Selects appropriate tool to measure length, weight, volume and uses measuring tools correctly and accurately"},
    ]},
]
