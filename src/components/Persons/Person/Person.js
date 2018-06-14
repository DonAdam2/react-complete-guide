import React, {Component} from 'react';

import classObj from './Person.css';

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
            <div className={classObj.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and i'm {this.props.age} years old!</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
                <p>{this.props.children}</p>
            </div>
        )
    }
}

export default Person;