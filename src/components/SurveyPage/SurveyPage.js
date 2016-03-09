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
import Link from '../Link'
import QuestionItems from './QuestionTypes/QuestionItems'
import Question1to4 from './QuestionTypes/Question1to4'
import {Table, Column, Cell} from 'fixed-data-table'
import update from 'react-addons-update'
import {connect} from 'react-redux'

class SurveyPage extends Component {

  static propTypes = {
    className: PropTypes.string,
    student: PropTypes.object
  }

  render() {
    console.log(JSON.stringify(this.props.student.questions.length))
    return (
      <div className={cx(s.questionList)}>
        <div>{this.props.student.name}</div>
        <h3>{'Functional Math'}</h3>
        <QuestionItems className={cx(s.questionHeaders)} question={this.props.student.headerItems} />
        {this.props.student.questions.map((x, i) => {
                    switch(x.questionType){
                      case "items":
                        return <QuestionItems key={i} rowIndex={i} question={x} />
                      case "1to4":
                        return <Question1to4 key={i} rowIndex={i} question={x} />
                    }
                }
            )
        }
      </div>
    )
  }

}
const mapStateToProps = (state)=>{
  return {
    student: state.students[state.selectedStudentIndex]
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {

  }
}
SurveyPage = connect(mapStateToProps,mapDispatchToProps)(SurveyPage);

export default withStyles(SurveyPage, s)
