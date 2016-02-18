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
import Question from '../Question'
import {Table, Column, Cell} from 'fixed-data-table'

class SurveyPage extends Component {

  static propTypes = {
    className: PropTypes.string,
  }

  constructor(props) {
    super(props)
    this.state = {
      questions: [
        {QuestionText: "Q1"},
        {QuestionText: "Q2"}
      ]
    }
  }

  render() {

    return (
      <div>
        {this.state.questions.map((x, i) =>
          <Question className={"inactive"} questionText={x.QuestionText}/>
        )
        }
      </div>
    )
  }
}

export default withStyles(SurveyPage, s)
