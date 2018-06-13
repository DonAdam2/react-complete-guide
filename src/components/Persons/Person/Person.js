import React from 'react';

import classObj from './Person.css';

const person = (props) => {
  return (
      <div className={classObj.Person}>
          <p onClick={props.click}>I'm {props.name} and i'm {props.age} years old!</p>
          <input type="text" onChange={props.changed} value={props.name}/>
          <p>{props.children}</p>
      </div>
  )
};

export default person;