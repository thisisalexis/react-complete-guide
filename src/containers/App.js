import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
//import Radium, {StyleRoot} from 'radium';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';

class App extends Component {

  //initialices
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    
    // se puede inicializar el state in here, pero no con setState, sino con this.state = {...}
    //this.state = {......}

  }

  //when props change
  static getDerivedStateFromProps(props, state) {
    
    console.log('[App.js] getDerivedStateFromProps')
    console.log(props);
    
    return state;
  }

  /*
  componentWillMount() {
    //Esto pronto estará en desuso
  }*/

  //Aqui es donde puedo hacer peticiones http
  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldCOmponentUpdate');
    return true;
  } 

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  state = {
    persons: [
      { id: 'culo_1', name: 'ALexis', age: 34 },
      { id: 'culo_2', name: 'Esperanza', age: 59 },
      { id: 'culi_3', name: 'Luis Miguel', age: 25 }
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
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

  loginHandler = () => {
    this.setState({authenticated: true});
  };

  nameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    } ); 
    
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
       changeCounter: prevState.changeCounter + 1
      }
    });
  } 

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    console.log('[App.js] render()');
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
            <Persons persons={this.state.persons} 
              clicked={ this.deletePersonHandler } 
              changed={ this.nameChangeHandler }
              isAuthenticated={ this.state.authenticated } />
      );

      style.backgroundColor = '';

    }

    return (
      /*<StyleRoot>*/
        <Aux className="App">
            <h1>{this.props.appTitle}</h1>
            
            <button value="Remove cockpit" 
              onClick={ 
                () => { 
                  this.setState( { showCockpit: false } );
                } 
              } 
            >Remove cockpit</button>
            
            <AuthContext.Provider 
              value={ { authenticated: this.state.authenticated, login: this.loginHandler } } >
              { 
                this.state.showCockpit ? (
                  <Cockpit 
                    showPersons={this.state.showPersons} 
                    personsLength={this.state.persons.length}
                    clicked={this.togglePersonHandler}
                   />
                ) : null 
              }
              
              { persons }
            </AuthContext.Provider>
        </Aux>
      /*</StyleRoot>*/
    );
  }
}

//export default Radium(App);
export default withClass(App, 'App');
