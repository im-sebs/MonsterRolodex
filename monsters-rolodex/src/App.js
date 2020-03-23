import React, { Component } from "react";
import { CardList } from "./components/card-list/CardList";
import "./App.css";

class App extends Component {
  state = {
    monsters: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
        <CardList name="this.name"></CardList>
      </div>
    );
  }
}

export default App;
