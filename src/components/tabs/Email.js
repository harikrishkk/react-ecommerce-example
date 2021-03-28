import React from "react";
import useToggle from "../../hooks/useToggle";

const Email = () => {
  const { isOpen, toggle } = useToggle(false);
  return (
    <article className="center mw5 mw6-ns br3 hidden ba b--black-10 mv4">
      <h1
        onClick={toggle}
        className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3"
      >
        Email addresses
      </h1>
      {isOpen && (
        <div className="pa3 bt b--black-10">
          <p className="f6 f5-ns lh-copy measure">help@mycompany.com</p>
          <p className="f6 f5-ns lh-copy measure">hr@mycompany.com</p>
          <p className="f6 f5-ns lh-copy measure">careers@mycompany.com</p>
        </div>
      )}
    </article>
  );
};
export default React.memo(Email);
