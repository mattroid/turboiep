import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './RegisterStudent.scss'
import update from 'react-addons-update'
import Link from '../../Link'

class RegisterStudent extends Component {

  static propTypes = {
    className: PropTypes.string,
  }

  constructor(props) {
    super(props)
    this.setState({name: ""})
  }
  handleNameChange(e){
    this.setState({name: e.target.value})
  }

  render() {
    return (
      <div>
        <form className={cx(s.studentRegisterForm)}>
          <input placeholder="Student Name" type="text" onChange={this.handleNameChange} />
          <input type="submit" value="Add Student" />
          <Link to="/survey" student={this.state} >Add Student</Link>
        </form>
      </div>
    )
  }

}

export default withStyles(RegisterStudent, s)
