import React from 'react';

const person = (props) => {
    return(
        <div>
            <div>My name is {props.name} and I am {props.age}</div>
            <div>{props.children}</div>
        </div>
    );
}

export default person;