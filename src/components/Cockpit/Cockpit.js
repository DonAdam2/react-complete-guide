import React from 'react';

import classObj from './Cockpit.css';

const cockpit = (props) => {
    const classes = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass = classObj.Red;
    }

    if (props.persons.length <= 2) {
        classes.push(classObj.red);
    }
    if (props.persons.length <= 1) {
        classes.push(classObj.bold);
    }

    return (
        <div className={classObj.Cockpit}>
            <h1>Hi, i'm a React App</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;