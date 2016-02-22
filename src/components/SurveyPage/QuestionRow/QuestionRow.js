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

class SurveyPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: this.props.questions
    }
  }
  static propTypes = {
    className: PropTypes.string,
  }

  onSelected(question, e){
    let changedQuestions = this.state.questions.map((x,i) =>
      update(x, {checked: {$set: x.id==question.id}})
    )

    this.setState(update(this.state, {questions: {$set:changedQuestions}}))
  }

  render() {
    return (
      <div className={cx(s.QuestionRow)}>
        {this.state.questions.map((x, i) =>
              <Question question={x} onSelected={this.onSelected.bind(this)} />
            )
        }
      </div>
    )
  }
}

export default withStyles(SurveyPage, s)