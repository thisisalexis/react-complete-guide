import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';


class App extends Component {
  
  state = {
    persons: [
      { id: 'culo_1', name: 'ALexis', age: 34 },
      { id: 'culo_2', name: 'Esperanza', age: 59 },
      { id: 'culi_3', name: 'Luis Miguel', age: 25 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { id: 'culo_1', name: 'ALexis', age: 34 },
        { id: 'culo_2', name: 'Esperanza', age: 59 },
        { id: 'culi_3', name: 'Luis Miguel', age: 25 }
      ]
    });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    
    this.setState({ showPersons: !doesShow })
  }

  nameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex( p => {
      return p.id == id;
    } ); 
    
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  } 

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
      /*':hover': { 
        backgroundColor: 'lightgreen',
        color: 'black'
       }*/
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <div>

            { 
              this.state.persons.map( (person, index) => {
                return <Person 
                  click={() => this.deletePersonHandler(index) } 
                  changed={(event) => this.nameChangeHandler(event, person.id)}
                  name={person.name} 
                  age={person.age}
                  key={person.id} />              
              }) 
            }
          </div>
      );

      style.backgroundColor = '';

    }

    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }


    return (
      /*<StyleRoot>*/
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button 
            style={style}
            onClick={this.togglePersonHandler}>Toggle persons</button>
            { persons }
        </div>
      /*</StyleRoot>*/
    );
  }
}

//export default Radium(App);
export default App;
