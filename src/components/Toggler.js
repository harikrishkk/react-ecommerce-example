import React, { Component } from 'react';
export default class Toggler extends Component {
  state = {
    isOpen: false,
  };
  toggle = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };
  render() {
    return (
      <article className="center mw5 mw6-ns br3 hidden ba b--black-10 mv4">
        <h1
          onClick={this.toggle}
          className="f4 bg-near-white br3 
          br--top black-60 mv0 pv2 ph3 pointer"
        >
          {this.props.headerText}
        </h1>
        {this.props.render(this.state.isOpen)}
      </article>
    );
  }
}
