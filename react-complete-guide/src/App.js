import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    people : [
      { id : 1, name : "Daniel", age : 33},
      { id : 2, name : "Antonia", age : 32},
      { id : 3, name : "Maddie", age : 1}
    ],
    showPerson : false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.people.findIndex((p) => {
      return p.id === id;
    });

    const person = {...this.state.people[personIndex]}

    person.name = event.target.value;

    const people = [...this.state.people];
    people[personIndex] = person;

    this.setState({
      people : people
    })
  } 

  togglePersonHandler = () => {
    this.setState({
      showPerson : !this.state.showPerson
    });
}

  deletePersonHandler = personIndex =>{
    const people = [...this.state.people];
    people.splice(personIndex, 1);
    this.setState({people : people})
  }

  render() {

    const style = {
      backgroundColor : "white",
      font: 'inherit',
      border: '1px solid blue',
      padding: '10px',
      cursor: 'pointer'
    }

  let personList = null;
  if(this.state.showPerson){
    personList = (
      <div>
        {this.state.people.map((p, index) => {
          return <Person
              click={() => {this.deletePersonHandler(index)}} 
              name={p.name} 
              age={p.age} 
              key={p.id}
              changed={(event) => {this.nameChangedHandler(event,p.id)}}/>
        })}
    </div>
    )
  }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is a paragraph</p>
        <button style={style}  
          onClick={() => {this.togglePersonHandler()}}>Toggle People</button>
        {personList}
      </div>  
    );
  }
}

export default App;
