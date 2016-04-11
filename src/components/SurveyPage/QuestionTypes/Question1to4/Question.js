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
import { connect } from 'react-redux'

class Question extends Component {
  static propTypes = {
    className: PropTypes.string,
    onSelected: PropTypes.func,
    rowIndex: PropTypes.number,
    question: PropTypes.object,
  }

  render() {
    return (
      <div className={cx(this.props.className, s.questionRow)}>
        <QuestionItem isSelected={false} itemText={this.props.question.questionText} />
        {[1, 2, 3, 4].map((x, i) =>
              <QuestionItem key={i} isSelected={false} itemText={x} onSelected={() =>
                {this.props.onSelection(this.props.rowIndex, x)}
              } />
            )
        }
      </div>
    )
  }
}
const mapStateToProps = () => {
  return {}
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSelection: (row_index, id) =>
      dispatch({ type: 'SELECT_ANSWER', row_index, id })
  }
}
Question = connect(null, mapDispatchToProps)(Question);

export default withStyles(Question, s)
