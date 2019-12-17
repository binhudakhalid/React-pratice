import React, { Component } from "react";
import { BrowserRouter, Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Error from "./components/error";

const NewRoute = () => {
  return (
    <div>
      <p1>New Route /new</p1>
    </div>
  );
};

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 80 },
      { id: 2, value: 0 },
      { id: 3, value: 90 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };

  handleDelete = counterId => {
    console.log("eventlog called    ", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/new" component={NewRoute} />
              <Route path="/home" component={Home} />
              <Route path="/contact" component={Contact} />
              <Route path="/about" component={About} />
              <Route path="/count" component={About} />

              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>

        <React.Fragment>
          <NavBar
            counters={this.state.counters.filter(c => c.value > 0).length}
          />
          <main className="container">
            <Counters
              counters={this.state.counters}
              onReset={this.handleReset}
              onIncrement={this.handleIncrement}
              onDelete={this.handleDelete}
            />
          </main>
        </React.Fragment>
      </div>
    );
  }
}
export default App;
