import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    people : [
      { name : "Daniel", age : 33},
      { name : "Antonia", age : 32},
      { name : "Maddie", age : 1}
    ]
  }

  switchNameHandler = () => {
  console.log("boom");
}

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>paragrah</p>
        <button onClick={this.switchNameHandler}>Sitch Name</button>
        <Person name={this.state.people[0].name} age={this.state.people[0].age}><p>hello world</p></Person>
        <Person name={this.state.people[1].name} age={this.state.people[1].age} />
        <Person name={this.state.people[2].name} age={this.state.people[2].age} />
      </div>
    );
    // return React.createElement('div', {className : 'App'}, React.createElement('h1', null,'whoo'))
  }
}

export default App;
