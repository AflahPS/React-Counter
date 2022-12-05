import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar.jsx";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (id) => {
    const counters = [...this.state.counters];
    const index = counters.findIndex((el) => el.id === id);
    console.log(index);
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (id) => {
    const counters = [...this.state.counters];
    const index = counters.findIndex((el) => el.id === id);
    console.log(index);
    if (counters[index].value > 0) {
      counters[index].value--;
    }
    this.setState({ counters });
  };

  handleDelete = (id) => {
    this.setState({
      counters: this.state.counters.filter((el) => el.id !== id),
    });
  };

  handleReset = (id) => {
    const counters = [...this.state.counters];
    counters.forEach((el) => (el.value = el.id === id ? 0 : el.value));
    this.setState({ counters });
  };

  handleResetAll = () => {
    const counters = this.state.counters.map((el) => {
      el.value = 0;
      return el;
    });
    this.setState({
      counters,
    });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar counters={this.state.counters} />
        <main className="container">
          <Counters
            onResetAll={this.handleResetAll}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
