import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.counter.value,
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
  handleIncrement = product => {
    console.log(product);
    this.setState({
      count: this.state.count + 1
    });

    console.log(this.state.count);
  };

  render() {
    return (
      <div>
        <img src={this.state.imageUrl} />
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>

        <div>{this.state.age}</div>

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
