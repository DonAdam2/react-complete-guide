import React, {Component} from 'react';
import classObj from './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
    constructor(props) {
        super(props);
        console.log('[App.js] Inside Constructor', props);
        this.state = {
            persons: [
                {id: 'adf3', name: 'Max', age: 28},
                {id: 'dfg4', name: 'Manu', age: 29},
                {id: 'fgh6', name: 'stephanie', age: 26}
            ],
            showPersons: false
        };
    }

    componentWillMount() {
        console.log('[App.js] Inside componentWillMount');
    }

    componentDidMount() {
        console.log('[App.js] Inside componentDidMount');
    }

    /* state = {
         persons: [
             {id: 'adf3', name: 'Max', age: 28},
             {id: 'dfg4', name: 'Manu', age: 29},
             {id: 'fgh6', name: 'stephanie', age: 26}
         ],
         showPersons: false
     };*/

    nameChangedHandler = (event, personId) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === personId;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons});
    };

    deletePersonHandler = (personIndex) => {
        // const newPersons = this.state.persons.slice();
        const newPersons = [...this.state.persons];
        newPersons.splice(personIndex, 1);
        this.setState({persons: newPersons});
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

    render() {
        console.log('[App.js] Inside render');
        let persons = null;

        if (this.state.showPersons) {
            persons = (<Persons persons={this.state.persons}
                                clicked={this.deletePersonHandler}
                                changed={this.nameChangedHandler}/>
            );
        }

        return (
            <div className={classObj.App}>
                <Cockpit appTitle={this.props.title}
                         showPersons={this.state.showPersons}
                         persons={this.state.persons}
                         clicked={this.togglePersonsHandler}/>
                {persons}
            </div>
        );
    }
}

export default App;
