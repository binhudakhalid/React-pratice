import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
    age: 25
  };
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  getBadgeClasses() {
    let classes = "badge m-2  badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1
    });

    console.log(this.state.count);
  };

  addAge = () => {
    console.log("age");
    this.setState({
      age: this.state.age + 5
    });
  };

  render() {
    return (
      <div>
        <img src={this.state.imageUrl} />
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <div>{this.state.age}</div>
        <button
          onClick={this.addAge}
          style={{ backgroundColor: "red", color: "white" }}
        >
          Age
        </button>

        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag + "asda"}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Counter;
