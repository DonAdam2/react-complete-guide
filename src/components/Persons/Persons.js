import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
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

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] inside componentWillReceiveProps', nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[UPDATE Persons.js] inside shouldComponentUpdate', nextProps, ' ', nextState);
    //     return  nextProps.persons !== this.props.persons ||
    //             nextProps.changed !== this.props.changed ||
    //             nextProps.clicked !== this.props.clicked;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] inside componentWillUpdate', nextProps, ' ', nextState);
    }

    componentDidUpdate() {
        console.log('[Persons.js] Inside componentDidUpdate');
    }

    render() {
        console.log('[Persons.js] Inside render');
        return this.props.persons.map((arrayItem, index) => {
                return <Person click={() => this.props.clicked(index)}
                               name={arrayItem.name}
                               position={index}
                               age={arrayItem.age}
                               key={arrayItem.id}
                               changed={(event) => this.props.changed(event, arrayItem.id)}/>
            }
        );
    }
}

export default Persons;