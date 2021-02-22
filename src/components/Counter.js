import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    console.log('1. Called constructor');
  }
  state = {
    count: 0,
  };
  componentDidMount() {
    console.log('--> componentDidMount');
  }

  componentDidUpdate() {
    console.log('--> componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('Unmounting..');
  }

  shouldComponentUpdate() {
    return true;
  }

  updateCounter = () => {
    console.log('Updating count...', this.state.count);

    this.setState((prevState) => {
      return {
        count: this.state.count + 1,
      };
    });

    // this.setState({
    //   count: this.state.count + 1,
    // });
  };

  render() {
    console.log('2. render');
    return (
      <div>
        <p> Counter {this.state.count} </p>
        <button onClick={this.updateCounter}> + </button>
      </div>
    );
  }
}
