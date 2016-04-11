/**
 * Created by matto on 3/11/16.
 */
import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './StudentProfiles.scss'
import { connect } from 'react-redux'
import Link from '../Link'
import { selectStudent } from '../../actions/SurveyActions'
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';

class StudentProfiles extends Component {
  static propTypes = {
    profiles: PropTypes.array,
    onProfileSelected: PropTypes.func,
  }

  render() {
    return (
      <div>
        {this.props.profiles.map((x, i) => {
          return (<Card key={i}>
                  <CardHeader title={x.name} />
                  <CardText>
                  </CardText>
                  <CardActions>
                    <Link to="/survey" button primary
                          onClick={
                            (e) => this.props.onProfileSelected(i)
                            }
                          key={i}>{'open'}</Link>
                  </CardActions>
                </Card>)
        })}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    profiles: state.surveyReducer.students
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onProfileSelected: (index) => {dispatch(selectStudent(index))}
  }
}
StudentProfiles = connect(mapStateToProps, mapDispatchToProps)(StudentProfiles);

export default withStyles(StudentProfiles, s)
