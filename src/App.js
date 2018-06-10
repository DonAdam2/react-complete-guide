import React, {Component} from 'react';
import classObj from './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {id: 'adf3', name: 'Max', age: 28},
            {id: 'dfg4', name: 'Manu', age: 29},
            {id: 'fgh6', name: 'stephanie', age: 26}
        ],
        showPersons: false
    };

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
        let persons = null;

        let btnClass = '';

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((arrayItem, index) => {
                            return <Person click={() => this.deletePersonHandler(index)}
                                           name={arrayItem.name}
                                           age={arrayItem.age}
                                           key={arrayItem.id}
                                           changed={(event) => this.nameChangedHandler(event, arrayItem.id)}/>
                        }
                    )}
                </div>
            );
            btnClass = classObj.Red;
        }

        const classes = [];

        if (this.state.persons.length <= 2) {
            classes.push(classObj.red);
        }
        if (this.state.persons.length <= 1) {
            classes.push(classObj.bold);
        }

        return (
                <div className={classObj.App}>
                    <h1>Hi, i'm a React App</h1>
                    <p className={classes.join(' ')}>This is really working!</p>
                    <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>
                    {persons}
                </div>
        );
    }
}

export default App;
