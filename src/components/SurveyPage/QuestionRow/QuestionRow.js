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
import s from './QuestionRow.scss'
import Question from '../Question'
import {Table, Column, Cell} from 'fixed-data-table'
import update from 'react-addons-update'
import {connect} from 'react-redux'

class QuestionRow extends Component {
  static propTypes = {
    className: PropTypes.string,
    onSelected: PropTypes.func,
    rowIndex: PropTypes.number,
    questions: PropTypes.array
  }

  //onSelected(question, e){
  //  let changedQuestions = this.state.questions.map((x,i) =>
  //    update(x, {checked: {$set: x.id==question.id}})
  //  )
  //  this.setState(update(this.state, {questions: {$set:changedQuestions}}))
  //}

  render() {
    return (
      <div className={cx(this.props.className, s.questionRow)}>
        {this.props.questions.map((x, i) =>
              <Question key={i} question={x} onSelected={e=>{this.props.onSelection(this.props.rowIndex, x.id)}} />
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
    onSelection: (row_index, id) =>{
      dispatch({type: 'SELECT_ANSWER',row_index, id})
    }
  }
}
QuestionRow = connect(mapStateToProps,mapDispatchToProps)(QuestionRow);

export default withStyles(QuestionRow, s)
