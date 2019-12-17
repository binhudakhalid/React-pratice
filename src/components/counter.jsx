import React, { Component } from "react";

class Counter extends Component {
  state = {
    //  count: this.props.counter.value,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  };

  formatCount() {
    const { count } = this.props.counter.value;
    return count === 0 ? "Zero" : this.props.counter.value;
  }

  getBadgeClasses() {
    let classes = "badge m-2  badge-";
    classes += this.props.counter.count === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    return (
      <div>
        <img src={this.state.imageUrl} />
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        <button
          //  onClick={() => this.handleIncrement({ id: 1 })}
          onClick={() => this.props.onIncrement(this.props.counter)}
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
