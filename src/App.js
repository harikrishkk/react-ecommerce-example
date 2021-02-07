import React, { Component } from 'react';
import Person from './components/Person';
export default class App extends Component {
  state = {
    name: 'Hari',
    job: 'Developer',
  };

  changeJob = () => {
    console.log('CLicked button');
    this.setState({
      job: 'Tester',
    });
  };
  render() {
    return (
      <div>
        <Person details={this.state} onJobChange={this.changeJob} />
      </div>
    );
  }
}

// STate is mutable
// Prop is immutable
