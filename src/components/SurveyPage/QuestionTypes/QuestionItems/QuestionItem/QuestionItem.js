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
import s from './QuestionItem.scss'

class QuestionItem extends Component {
  static propTypes = {
    className: PropTypes.string,
    itemText: PropTypes.string,
    isSelected: PropTypes.bool,
    onSelected: PropTypes.func,
  }

  constructor() {
    this.handleClick.bind(this)
  }

  handleClick() {
    this.props.onSelected();
  }

  render() {
    return (
        <div
          onClick={this.handleClick}
          className={cx(s.questionItem, { [s.active]: this.props.isSelected })}
        >
          {this.props.itemText}
        </div>
    )
  }

}

export default withStyles(QuestionItem, s)
