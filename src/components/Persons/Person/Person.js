import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classObj from './Person.css';
import WithClass from '../../../hoc/WithClass';
import Aux from '../../../hoc/Auxilary';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props);
        this.inputElement = React.createRef()
    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount');
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount');
        if (this.props.position === 0) {
            this.inputElement.current.focus();
        }
    }

    render() {
        console.log('[Person.js] Inside render');
        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and i'm {this.props.age} years old!</p>
                <input
                    ref={this.inputElement}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}/>
                <p>{this.props.children}</p>
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default WithClass(Person, classObj.Person);