/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './SurveyPage.scss'
import QuestionItems from './QuestionTypes/QuestionItems'
import Question1to4 from './QuestionTypes/Question1to4'
import { connect } from 'react-redux'

class SurveyPage extends Component {

  static propTypes = {
    className: PropTypes.string,
    student: PropTypes.object,
    selectedStudentIndex: PropTypes.number,
  }

  render() {
    this.student = this.props.student || { name: '', headerItems: [], questions: [] }
    this.selectedIndex = this.props.selectedStudentIndex || 0
    return (
      <div className={cx(s.questionList)}>
        <div>{this.student.name }</div>
        <h3>{'Functional Math'}</h3>
        <QuestionItems className={cx(s.questionHeaders)} question={this.student.headerItems} />
        {this.student.questions.map((x, i) => {
          switch (x.questionType) {
            case 'items':
              return (<QuestionItems
                key={i}
                studentId={this.student._id}
                studentIndex={this.selectedIndex}
                rowIndex={i}
                question={x}
              />)
            case '1to4':
              return (<Question1to4
                key={i}
                studentIndex={this.selectedIndex}
                rowIndex={i}
                question={x}
              />)
            default:
              return <div>{'No question type available'}</div>
          }
        }
            )
        }
      </div>
    )
  }

}
const mapStateToProps = (state) =>
  ({
    selectedStudentIndex: state.surveyReducer.selectedStudentIndex,
    student: state.surveyReducer.students[state.surveyReducer.selectedStudentIndex],
  })

const mapDispatchToProps = () => ({})

SurveyPage = connect(mapStateToProps, mapDispatchToProps)(SurveyPage);

export default withStyles(SurveyPage, s)
