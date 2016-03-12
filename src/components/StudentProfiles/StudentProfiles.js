/**
 * Created by matto on 3/11/16.
 */
import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './StudentProfiles.scss'
import {connect} from 'react-redux'

class StudentProfiles extends Component{
  static propTypes = {
    profiles: PropTypes.array
  }
  render () {

    return (
      <div>
        {this.props.profiles.map((x,i)=>{
          return <div>{x.name}</div>
        })}
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
  console.log(state.students.length)
  return {
    profiles: state.students
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
  }
}
StudentProfiles= connect(mapStateToProps,mapDispatchToProps)(StudentProfiles);

export default withStyles(StudentProfiles, s)
