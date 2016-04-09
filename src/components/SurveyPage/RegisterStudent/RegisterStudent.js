import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import cx from 'classnames'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './RegisterStudent.scss'
import update from 'react-addons-update'
import Link from '../../Link'
import { addStudent } from '../../../actions/SurveyActions'
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import TextField from 'material-ui/lib/text-field';

class RegisterStudent extends Component {

  static propTypes = {
    className: PropTypes.string,
    onAddStudent: PropTypes.func
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value })
  }

  render() {
    return (
      <Card>
        <form className={cx(s.studentRegisterForm)}>
          <TextField hintText="Student Name" type="text" ref={(s) => this.StudentName = s} />

          <CardActions>
          <Link button primary to="/survey" onClick={(e) => {
            this.props.onAddStudent(this.StudentName.getValue())
          }
          }>Add Student</Link>
            </CardActions>
        </form>
      </Card>
    )
  }

}
const mapStateToProps = (state) => {
  return {}
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAddStudent: (studentName) => {
      dispatch(addStudent(studentName))
    }
  }
}

RegisterStudent = connect(mapStateToProps, mapDispatchToProps)(RegisterStudent);

export default withStyles(RegisterStudent, s)
