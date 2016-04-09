/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ProfileSummaryPage.scss';
import { connect } from 'react-redux'
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

class ProfileSummaryPage extends Component {
  static propTypes = {
    className: PropTypes.string,
    student: PropTypes.object,
    summary: PropTypes.string
  }

  render() {
    return (
      <Card >
        <CardHeader title={'Summary for ' + (this.props.student.name || '[No Student Selected]')} />
        <CardText>
          {this.props.summary}
        </CardText>
      </Card>
    );
  }

}
const mapStateToProps = (state) => {
  return {
    student: state.surveyReducer.students[state.surveyReducer.selectedStudentIndex]
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onProfileSelected: (index) => {dispatch(selectStudent(index))}
  }
}
ProfileSummaryPage = connect(mapStateToProps, mapDispatchToProps)(ProfileSummaryPage);

export default withStyles(ProfileSummaryPage, s);

