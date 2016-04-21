import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import cx from 'classnames'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './RegisterStudent.scss'
import Link from '../../Link'
import { addStudent } from '../../../actions/SurveyActions'
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import TextField from 'material-ui/lib/text-field';

class RegisterStudent extends Component {

  static propTypes = {
    className: PropTypes.string,
    onAddStudent: PropTypes.func,
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value })
  }
  handleNameClicked() {
    this.props.onAddStudent(this.StudentName.getValue())
  }

  render() {
    return (
      <Card>
        <form className={cx(s.studentRegisterForm)}>
          <TextField hintText="Student Name" type="text" ref="studentName"/>

          <CardActions>
          <Link button primary to="/survey" onClick={this.handleNameClicked()}>
            Add Student
          </Link>
            </CardActions>
        </form>
      </Card>
    )
  }

}
const mapStateToProps = () => ({})
const mapDispatchToProps = (dispatch) =>
  ({
    onAddStudent: (studentName) =>
      dispatch(addStudent(studentName)),
  })

RegisterStudent = connect(mapStateToProps, mapDispatchToProps)(RegisterStudent);

export default withStyles(RegisterStudent, s)
