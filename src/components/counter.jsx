import React, { Component } from "react";

export default class counter extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-3"
        >
          Delete
        </button>

        <button
          onClick={() => this.props.onDecrement(this.props.counter.id)}
          className="btn btn-warning btn-sm m-3"
        >
          Decrement
        </button>

        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter.id)}
          className="btn btn-success btn-sm m-3"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onReset(this.props.counter.id)}
          className="btn btn-secondary btn-sm m-3"
        >
          Reset
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-3 bg-";
    classes += this.props.counter.value === 0 ? "secondary" : "primary";
    return classes;
  }

  formatCount() {
    let { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}
