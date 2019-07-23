import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';


import './Person.css';
import Aux from '../../../hoc/Aux';


class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] Rendering');
    /*const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };*/

        return (
            <Aux>

                    { 
                        this.context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>
                    }

                <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                    key="i3"
                    //ref= { (inputEl) => { this.inputElement = inputEl } }
                    ref={this.inputElementRef}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} />
            </Aux>
        );
    }
}


Person.prototypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

//export default Radium(person);
export default Person;