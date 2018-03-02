import React from 'react';
import './Person.css';

const person = (props) => {
    return(
        <div className="Person">
            <div onClick={props.click}>My name is {props.name} and I am {props.age}</div>
            <div>{props.children}</div>
            <input type="text" onChange={props.changed} value={props.name}/> 
        </div>
    );
}

export default person;