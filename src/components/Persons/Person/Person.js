import React, {Component} from 'react';

import classObj from './Person.css';
import WithClass from '../../../hoc/WithClass';
import Aux from '../../../hoc/Aux';

class Person extends Component{
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props);
    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount');
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount');
    }

    render() {
        console.log('[Person.js] Inside render');
        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and i'm {this.props.age} years old!</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
                <p>{this.props.children}</p>
            </Aux>
        )
    }
}

export default WithClass(Person, classObj.Person);