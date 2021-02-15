import React from 'react';
import classes from './Student.module.css';

const student = props => {
    return (
        <div className={classes.Student} onClick={props.clicked}>
            <p><strong>ID:</strong> {props.idIL}</p>
            <p><strong>Name</strong>: {props.firstName} {props.lastName}</p>
            <p><strong>Date Of Birth:</strong> {props.dob}</p>
            <p><strong>City:</strong> {props.city}</p>
        </div>
    )
};

export default student;