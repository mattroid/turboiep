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
import s from './Question.scss'
import QuestionItem from './QuestionItem'
import {Table, Column, Cell} from 'fixed-data-table'
import update from 'react-addons-update'
import {connect} from 'react-redux'
import {setAnswer} from '../../../../actions/SurveyActions'

class Question extends Component {
  static propTypes = {
    className: PropTypes.string,
    onSelection: PropTypes.func,
    rowIndex: PropTypes.number,
    studentId: PropTypes.string,
    studentIndex: PropTypes.number,
    question: PropTypes.object
  }

  render() {
    let qItems = this.props.question.questionItems || [];
    return (
      <div className={cx(this.props.className, s.questionRow)}>
        <QuestionItem isSelected={false} itemText={this.props.question.questionText}  />
        {qItems.map((x, i) =>
              <QuestionItem key={i} isSelected={x.checked} itemText={x.questionText} onSelected={e=>{this.props.onSelection(this.props.studentIndex,this.props.rowIndex, x.id)}} />
            )
        }
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return {
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    onSelection: (studentId, studentIndex, row_index, id) =>{
      dispatch(setAnswer(studentId, studentIndex,row_index,id))
    }
  }
}
Question = connect(null,mapDispatchToProps)(Question);

export default withStyles(Question, s)
