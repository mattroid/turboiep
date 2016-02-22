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
import withStyles from '../../../../node_modules/isomorphic-style-loader/lib/withStyles'
import s from './Question.scss'
import {Table, Column, Cell} from 'fixed-data-table'

class Question extends Component {

  static propTypes = {
    question: PropTypes.object.isRequired,
    className: PropTypes.string,
    onSelected: PropTypes.func
  }
  handleClick(event){
    this.props.onSelected(this.props.question);
  }

  render() {
    return (
        <div onClick={this.handleClick.bind(this)}
             className={cx(s.question, {[s.active]:this.props.question.checked})}>
          {this.props.question.questionText}
        </div>
    )
  }

}

export default withStyles(Question, s)
