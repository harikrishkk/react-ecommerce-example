import React, { Component } from 'react';

export default class ContactUs extends Component {
  state = {
    isOpen: false,
  };

  onToggle = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    return (
      <article className="center mw5 mw6-ns br3 hidden ba b--black-10 mv4">
        <h1
          onClick={this.onToggle}
          className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3 pointer"
        >
          {this.props.headerText}
        </h1>
        {this.state.isOpen && (
          <div className="pa3 bt b--black-10">
            <p className="f6 f5-ns lh-copy measure">{this.props.children}</p>
          </div>
        )}
      </article>
    );
  }
}
