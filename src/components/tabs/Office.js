import React from "react";
import useToggle from "../../hooks/useToggle";
const Office = () => {
  const { isOpen, toggle } = useToggle();
  return (
    <article className="center mw5 mw6-ns br3 hidden ba b--black-10 mv4">
      <h1
        onClick={toggle}
        className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3"
      >
        Offices Locations
      </h1>
      {isOpen && (
        <div className="pa3 bt b--black-10">
          <p className="f6 f5-ns lh-copy measure">123 St Center, Toronto</p>
          <p className="f6 f5-ns lh-copy measure">
            99 Bay St. Downtown, Toronto
          </p>
          <p className="f6 f5-ns lh-copy measure">100 St Main, Ottawa</p>
        </div>
      )}
    </article>
  );
};

export default Office;
