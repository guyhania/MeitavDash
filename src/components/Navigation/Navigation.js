import React from 'react';
import classes from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const nav = props => {
    return (
        <nav className={classes.MenuContainer}>
            <div className={classes.Menu}>
                <div>
                    <div className={classes.Link}><NavLink to={"/"} exact>Add New Student</NavLink></div>
                </div>
                <div>
                    <div className={classes.Link}><NavLink to={"/Students"}>View Students</NavLink></div>
                </div>
            </div>
        </nav>
    )
}

export default nav;