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
        {QuestionText: "Students demonstrate limited to no mastery of knowledge and skills related to essentialized standards that do not meet proficiency."},
        {QuestionText: "Students demonstrate inconsistent or partial mastery of knowledge and skills related to essentialized standards that do not meet proficiency"},
        {QuestionText: "Students demonstrate adept knowledge and skills related to essentialized standards that meet proficiency."},
        {QuestionText: "Students demonstrate exceptional knowledge and skills related to essentialized standards that exceed the requirements for proficiency"},
        {QuestionText: "Performance indicates that the student has limited to no understanding of academic concepts aligned to essentialized standards"},
        {QuestionText: "Performance indicates an inconsistent or partial understanding of academic concepts aligned to essentialized standards"},
        {QuestionText: "Performance indicates consistent understanding of academic concepts aligned to essentialized standards."},
        {QuestionText: "Performance indicates superior understanding of academic concepts aligned to essentialized standards."}

      ]
    }
  }

  render() {

    return (
      <div>
        {this.state.questions.map((x, i) =>
              <Question className={cx(s.inactive)} questionText={x.QuestionText}/>
            )
        }
      </div>
    )
  }
}

export default withStyles(SurveyPage, s)
