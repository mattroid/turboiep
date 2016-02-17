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

  constructor(props){
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
        Student Profile
        <Table
          rowHeight={30}
          rowsCount={this.state.questions.length}
          width={300}
          height={300}
          headerHeight={50}
        >
          <Column
            header={<Cell>Area</Cell>}
            //cell={<Question data={this.state.questions} field="QuestionText" />}
            cell={({rowIndex,...props})=>(
              <Cell {...props}>{this.state.questions[rowIndex]["QuestionText"]}</Cell>
            )}
          />
        </Table>

      </div>
    )
  }

}

export default withStyles(SurveyPage, s)
