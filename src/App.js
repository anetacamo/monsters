import React from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      query: "",
    };
  }

  // when the component is putted on the page
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, query } = this.state;
    const monsterFiltered = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(query)
    );
    return (
      <div className="App">
        <h1>Monster Database</h1>
        <SearchBox
          placeholder="search monster"
          onInputChange={(e) =>
            this.setState({ query: e.target.value.toLowerCase() })
          }
        />
        <CardList monsters={monsterFiltered} />
      </div>
    );
  }
}

export default App;
