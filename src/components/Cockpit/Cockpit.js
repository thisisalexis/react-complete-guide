import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css'

import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
    const authContext = useContext(AuthContext);
    const toggleBtnRef = useRef(null);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');

        
        //const timer = setTimeout(() => {
        //    alert('Saved data to cloud!');
        //}, 1000);

        toggleBtnRef.current.click();

        return () => {
            //clearTimeout(timer);
            console.log('[Cockpit.js] Cleanup work in useEffect');
        }

    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
    
        return () => {
            console.log('[Cockpit.js] Cleanup work in 2nd useEffect');
        }
    
    });

    let assignedClasses = [];

    let btnClass = '';

    if (props.showPerson) {
        btnClass = classes.Red
    }


    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }

    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.cockpit}>
        
            <h1>Hi, I'm a React App</h1>
        
            <p className={assignedClasses.join(' ')}>This is really working!</p>
        
            <button 
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}>Toggle persons</button>
        
            
            <button onClick={ authContext.login }>Log In</button>
            
        </div>
    );
};

export default cockpit;