import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="vh-100 bg-white baskerville">
      <header className="tc ph5 lh-copy">
        <h1 className="f1 f-headline-l code mb3 fw9 dib tracked-tight light-purple">
          404
        </h1>
        <h2 className="tc f1-l fw1">
          Sorry, we can't find the page you are looking for.
        </h2>
      </header>
      <ul className="list tc pl0 w-100 mt5">
        <li className="dib">
          <Link
            className="f5 f4-ns link black db pv2 ph3 hover-light-purple"
            to="/"
          >
            Back to safety!
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default NotFound;
