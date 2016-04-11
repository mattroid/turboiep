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
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';

class ProfileSummaryPage extends Component {
  static propTypes = {
    className: PropTypes.string,
    student: PropTypes.object,
    summary: PropTypes.string,
  }

  render() {
    const studentName = (this.props.student.name || '[No Student Selected]')
    return (
      <Card >
        <CardHeader title={`Summary for ${studentName}`} />
        <CardText>
          {this.props.summary}
        </CardText>
      </Card>
    );
  }

}
const mapStateToProps = (state) =>{

    student: state.surveyReducer.students[state.surveyReducer.selectedStudentIndex]
  }

const mapDispatchToProps = (dispatch) => {
  return {
    onProfileSelected: (index) => {dispatch(selectStudent(index))}
  }
}

ProfileSummaryPage = connect(mapStateToProps, mapDispatchToProps)(ProfileSummaryPage);

export default withStyles(ProfileSummaryPage, s);

