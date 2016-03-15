/**
 * Created by matto on 3/11/16.
 */
import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './StudentProfiles.scss'
import {connect} from 'react-redux'
import Link from '../Link'
import {selectStudent} from '../../actions/SurveyActions'

class StudentProfiles extends Component{
  static propTypes = {
    profiles: PropTypes.array,
    onProfileSelected: PropTypes.func
  }
  render () {
    return (
      <div>
        {this.props.profiles.map((x,i)=>{
          return <div key={i}><Link to="/survey" onClick={(e)=> this.props.onProfileSelected(i)} key={i}>{x.name}</Link></div>
        })}
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return {
    profiles: state.surveyReducer.students
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    onProfileSelected: (index) => {dispatch(selectStudent(index))}
  }
}
StudentProfiles= connect(mapStateToProps,mapDispatchToProps)(StudentProfiles);

export default withStyles(StudentProfiles, s)
