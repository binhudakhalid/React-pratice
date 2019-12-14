import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
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

  render() {
    return (
      <div>
        <img src={this.state.imageUrl} />
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
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
