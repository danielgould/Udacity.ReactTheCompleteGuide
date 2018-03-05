import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Validation from './Validation/Validation';
import CharComponent from './CharComponent/CharComponent'; 

class App extends Component {

  state = {
    people : [
      { id : 1, name : "Daniel", age : 33},
      { id : 2, name : "Antonia", age : 32},
      { id : 3, name : "Maddie", age : 1}
    ],
    showPerson : false,
    characters : null
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

  onChangeEventHandler = (event) =>{
    this.setState({characters : event.target.value});
  }

  removeCharacter = (index) => {
    debugger;
    var chars = [...this.state.characters];
    var newChars = chars.splice(index, 1);

    this.setState({characters : newChars});
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

  let charsList = null;
  if(this.state.characters){
    charsList = this.state.characters.split('').map((c, index) => {
      return <CharComponent key={index} letter={c} click={() => this.removeCharacter(index)} />
    })
  }


    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <input type="text" onChange={this.onChangeEventHandler.bind(this)} />  
        <Validation length={this.state.characters === null ? 0 : this.state.characters.length} minLength="5"></Validation>
        {charsList}
        <button style={style}  
          onClick={() => {this.togglePersonHandler()}}>Toggle People</button>
        {personList}
      </div>  
    );
  }
}

export default App;
