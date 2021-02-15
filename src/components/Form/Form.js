import React from 'react';
import classes from './Form.module.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import Navigation from '../Navigation/Navigation';

const cities = ['Tel Aviv', 'Jerusalm', 'Haifa', 'Eilat', 'Herzlia']
let counter = 0;

const Form = props => {

    const handleInput = event => {
        let input = event.target.value;
        event.target.value = (contains_heb(input)) ? input : input.substring(0, input.length - 1);
    }
    const contains_heb = (char) => {
        return (/[\u0590-\u05FF]/).test(char.charAt(char.length - 1));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let newStudent = {
            id: Date.now(),
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            dob: document.getElementById("dob").value,
            idIL: document.getElementById("idIL").value,
            city: document.getElementById("city").value
        }

        props.onAddedStudent(newStudent);
        props.history.push('/Students');
    }

    return (
        <div>
            <Navigation />
            <form onSubmit={handleSubmit} className={classes.Main} >
                <div className={classes.FormContainer}>
                    <h2 className={classes.Title}>Add Student</h2>
                    <div className={classes.InputContainer}>
                        <div className={classes.InputSubContainer}>
                            <div >
                                <div>
                                    <label htmlFor="idIL" className={classes.Label} />
                                               Id
                                </div>
                                <input
                                    autoFocus
                                    className={classes.Input}
                                    required
                                    type="text"
                                    name="idIL"
                                    id="idIL"
                                    dir="RTL"
                                    maxLength={9}
                                    pattern="[0-9]{9}" />
                            </div>
                            <div>
                                <div>
                                    <label htmlFor="firstName" className={classes.Label} />
                                              First Name
                                </div>
                                <input
                                    className={classes.Input}
                                    required
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    maxLength={20}
                                    dir="RTL"
                                    onInput={handleInput}
                                />
                            </div>

                            <div>
                                <div>
                                    <label htmlFor="lastName" className={classes.Label} />
                                             Last Name
                                </div>
                                <input
                                    className={classes.Input}
                                    required
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    dir="RTL"
                                    onInput={handleInput}
                                    maxLength={20} />
                            </div>

                            <div>
                                <div>
                                    <label htmlFor="dob" className={classes.Label} />
                                                 Date Of Birth
                                </div>
                                <input
                                    className={classes.Input}
                                    required
                                    type="date"
                                    name="dob"
                                    id="dob" />
                            </div>

                            <div>
                                <div>
                                    <label htmlFor="city" className={classes.Label} />
                                                        City
                                </div>
                                <select className={classes.Input} id="city" name="city" defaultValue="Tel Aviv">
                                    {cities.map((city, index) => <option value={city} key={index}>{city}</option>)}
                                </select>

                            </div>
                        </div>
                    </div>

                    <button className={classes.Button}>Save</button>
                </div>

            </form>
        </div>
    )
};


const mapStateToProps = state => {
    return {
        counter: state.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddedStudent: (newStudent) => dispatch({ type: actionTypes.ADD_STUDENT, newStudent })
        // onRemovedStudent: (id) => dispatch({type: actionTypes.REMOVE_PERSON, personId: id})
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);


