/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Question.scss';
import Link from '../Link';
import {Table, Column, Cell} from 'fixed-data-table'

class Question extends Component {

  static propTypes = {
    questionText: PropTypes.string.isRequired
  };

  render() {
    const {rowIndex, field, data, ...props} = this.props
    return (
      <Cell {...props}>
        {data[rowIndex][field]}
      </Cell>
    );
  }

}

export default withStyles(Question, s);
