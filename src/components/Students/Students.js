import React, { Component } from 'react';
import classes from './Students.module.css';
import Student from './Student/Student';
import Navigation from '../Navigation/Navigation';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

class Students extends Component {
    render() {
        return (
            <>
                <Navigation />
                <div className={classes.Container}>
                    <div className={classes.SubContainer}>
                        <h2 className={classes.Title}>Students List</h2>
                        <div className={classes.StudentsContainer}>
                            <div className={classes.Students}>
                                {this.props.sts.map(student => (
                                    <Student
                                        key={student.id}
                                        firstName={student.firstName}
                                        lastName={student.lastName}
                                        dob={student.dob}
                                        idIL={student.idIL}
                                        city={student.city}
                                        clicked={() => this.props.onRemovedStudent(student.id)} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )}}

        const mapStateToProps = state => {
    return {
        sts: state.students
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRemovedStudent: (id) => dispatch({ type: actionTypes.REMOVE_STUDENT, studentId: id })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Students);