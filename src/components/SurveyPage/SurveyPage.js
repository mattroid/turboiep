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

class SurveyPage extends Component {

  static propTypes = {
    className: PropTypes.string,
  }

  constructor(props) {
    super(props)
    this.state = {
      questionRows: [[
        {id: 1, checked: false, questionText: "Students demonstrate limited to no mastery of knowledge and skills related to essentialized standards that do not meet proficiency."},
        {id: 2, checked: false, questionText: "Students demonstrate inconsistent or partial mastery of knowledge and skills related to essentialized standards that do not meet proficiency"},
        {id: 3, checked: false, questionText: "Students demonstrate adept knowledge and skills related to essentialized standards that meet proficiency."},
        {id: 4, checked: false, questionText: "Students demonstrate exceptional knowledge and skills related to essentialized standards that exceed the requirements for proficiency"},
        ],[
        {id: 1, checked: false, questionText: "Students demonstrate limited to no mastery of knowledge and skills related to essentialized standards that do not meet proficiency."},
        {id: 2, checked: false, questionText: "Students demonstrate inconsistent or partial mastery of knowledge and skills related to essentialized standards that do not meet proficiency"},
        {id: 3, checked: false, questionText: "Students demonstrate adept knowledge and skills related to essentialized standards that meet proficiency."},
        {id: 4, checked: false, questionText: "Students demonstrate exceptional knowledge and skills related to essentialized standards that exceed the requirements for proficiency"},
        ], [
        {id: 5, checked: false, questionText: "Performance indicates that the student has limited to no understanding of academic concepts aligned to essentialized standards"},
        {id: 6, checked: false, questionText: "Performance indicates an inconsistent or partial understanding of academic concepts aligned to essentialized standards"},
        {id: 7, checked: false, questionText: "Performance indicates consistent understanding of academic concepts aligned to essentialized standards."},
        {id: 8, checked: false, questionText: "Performance indicates superior understanding of academic concepts aligned to essentialized standards."}
        ]
      ]
    }
  }

  render() {

    return (
      <div>
        {this.state.questionRows.map((x, i) =>
              <QuestionRow questions={x} />
            )
        }
      </div>
    )
  }
}

export default withStyles(SurveyPage, s)
