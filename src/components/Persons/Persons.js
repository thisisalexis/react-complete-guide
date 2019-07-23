import React, { Component } from 'react';

import Person from './Person/Person.js'

class Persons extends Component { 

  static getDerivedStateFromProps(props, state) {
    
    console.log('[Persons.js] getDerivedStateFromProps')
    
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    if (nextProps.persons !== this.props.persons) {
      return true; //Obligado tru o false
    } else {
      return false;
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Person.js] getSnapshotBeforeUpdate');
  }

  render () {

    console.log('[Persons.js] Render persons');
  
    return this.props.persons.map( (person, index) => {
      return (<Person 
        click={() => this.props.clicked(index) } 
        changed={(event) => this.props.changed(event, person.id)}
        name={person.name} 
        age={person.age}
        key={index}
         />   
      );    
    });

  }

  componentDidUpdate() {
    console.log('[Persons.js] componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

}

export default Persons;