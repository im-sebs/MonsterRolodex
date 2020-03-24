import React, { Component } from "react";
import { CardList } from "./components/card-list/CardList";
import { SearchBox } from "./components/search-box/SearchBox";
import "./App.css";

class App extends Component {
  state = {
    monsters: [],
    searchField: ""
  };

  //Methods
  handleChange = e => this.setState({ searchField: e.target.value });

  //Lifecycle Methods
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monster"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
