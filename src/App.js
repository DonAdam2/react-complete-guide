import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {id: 'adf3',name: 'Max', age: 28},
            {id: 'dfg4',name: 'Manu', age: 29},
            {id: 'fgh6',name: 'stephanie', age: 26}
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
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

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
        }

        return (
            <div className="App">
                <h1>Hi, i'm a React App</h1>
                <p>This is really working!</p>
                <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
                {persons}
            </div>
        );
    }
}

export default App;
