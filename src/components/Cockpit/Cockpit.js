import React from 'react';

import classObj from './Cockpit.css';
import Aux from '../../hoc/Auxilary';

const cockpit = (props) => {
    const classes = [];
    let btnClass = classObj.button;
    if (props.showPersons) {
        btnClass = [classObj.button, classObj.Red].join(' ');
    }

    if (props.persons.length <= 2) {
        classes.push(classObj.red);
    }
    if (props.persons.length <= 1) {
        classes.push(classObj.bold);
    }

    return (
        <Aux>
            <h1>{props.appTitle}</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
            <button onClick={props.login}>Log in</button>
        </Aux>
    );
};

export default cockpit;