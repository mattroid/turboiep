import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import cx from 'classnames'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './RegisterStudent.scss'
import update from 'react-addons-update'
import Link from '../../Link'

class RegisterStudent extends Component {

  static propTypes = {
    className: PropTypes.string,
  }

  handleNameChange(e){
    this.setState({name: e.target.value})
  }

  render() {
    return (
      <div>
        <form className={cx(s.studentRegisterForm)}>
          <input placeholder="Student Name" type="text" ref={(s)=>this.StudentName = s} />
          <input type="submit" value="Add Student" />
          <Link to="/survey" onClick={(e)=> onAddStudent(this.StudentName.value)}>Add Student</Link>
        </form>
      </div>
    )
  }

}
const mapStateToProps = (state)=>{
  return {}
}
const mapDispatchToProps = (dispatch)=>{
  return {
    onAddStudent: (studentName)=>{
      dispatch({type:"ADD_STUDENT", studentName})
    }
  }
}
RegisterStudent = connect(mapStateToProps,mapDispatchToProps)(RegisterStudent);

export default withStyles(RegisterStudent, s)
