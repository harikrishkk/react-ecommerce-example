import React from 'react';

const Person = (props) => {
  const { name, job } = props.details;

  console.log('Rerendering Person component ');
  return (
    <article className="center mw5 mw6-ns br3 hidden ba b--black-10 mv4">
      <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">
        {name}
      </h1>
      <div className="pa3 bt b--black-10">
        <p className="f6 f5-ns lh-copy measure">{job}</p>
        <button onClick={props.onJobChange}> Change job </button>
      </div>
    </article>
  );
};

export default Person;
