import React from 'react';
import Person from './Person/Person';

const persons = (props) =>
    props.persons.map((arrayItem, index) => {
            return <Person click={() => props.clicked(index)}
                           name={arrayItem.name}
                           age={arrayItem.age}
                           key={arrayItem.id}
                           changed={(event) => props.changed(event, arrayItem.id)}/>
        }
    );

export default persons;