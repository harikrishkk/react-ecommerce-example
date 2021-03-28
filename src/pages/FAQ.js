import React, { Component } from 'react';
import withToggle from '../hoc/withToggle';

const FAQ = ({ isOpen, toggle }) => {
  return (
    <article className="center mw5 mw6-ns br3 hidden ba b--black-10 mv4">
      <h1
        onClick={toggle}
        className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3 pointer"
      >
        Is it possibe to have 30 day returns?
      </h1>
      {isOpen && (
        <div className="pa3 bt b--black-10">
          <p className="f6 f5-ns lh-copy measure">
            Of course! There is a No Question asked 30 day refund policy for us.
          </p>
        </div>
      )}
    </article>
  );
};

export default withToggle(FAQ);
