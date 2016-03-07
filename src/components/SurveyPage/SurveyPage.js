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
import QuestionRow from './QuestionRow'
import {Table, Column, Cell} from 'fixed-data-table'
import update from 'react-addons-update'
import {connect} from 'react-redux'

class SurveyPage extends Component {

  static propTypes = {
    className: PropTypes.string,
    student: PropTypes.object
  }

  render() {

    return (
      <div className={cx(s.questionList)}>
        <div>{this.props.student.name}</div>
        <QuestionRow className={cx(s.questionHeaders)} questions={this.props.student.headerQuestions} />
        {this.props.student.questionRows.map((x, i) =>
              <QuestionRow key={i} rowIndex={i} questions={x} />
            )
        }
      </div>
    )
  }

}
const mapStateToProps = (state)=>{
  return {
    student: state.students[0]
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {

  }
}
SurveyPage = connect(mapStateToProps,mapDispatchToProps)(SurveyPage);

export default withStyles(SurveyPage, s)
