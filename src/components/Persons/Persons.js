import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside Constructor', props);
    }

    componentWillMount() {
        console.log('[Persons.js] Inside componentWillMount');
    }

    componentDidMount() {
        console.log('[Persons.js] Inside componentDidMount');
    }

    render() {
        console.log('[Persons.js] Inside render');
        return this.props.persons.map((arrayItem, index) => {
                return <Person click={() => this.props.clicked(index)}
                               name={arrayItem.name}
                               age={arrayItem.age}
                               key={arrayItem.id}
                               changed={(event) => this.props.changed(event, arrayItem.id)}/>
            }
        );
    }
}

export default Persons;