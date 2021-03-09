import React, { useContext } from 'react';
import {
  FaCartArrowDown,
  FaHome,
  FaQuestionCircle,
  FaMailBulk,
  FaEvernote,
} from 'react-icons/fa';
import CurrencyContext from '../contexts/CurrencyContext';

import Logo from './Logo';
import NavItem from './NavItem';

const Navbar = () => {
  const { toggleCurrency } = useContext(CurrencyContext);
  return (
    <header className="bg-white black-80 tc pv4">
      <Logo icon={FaEvernote} color="#fff" />
      <h1 className="mt2 mb0 baskerville i fw1 f1">Buy Stuff</h1>
      <h2 className="mt2 mb0 f6 fw4 ttu tracked">
        Awesome deals @ affordable prices
      </h2>
      <nav className="bt bb tc mw7 center mt4">
        <NavItem title="Home" icon={<FaHome />} to="/" />
        <NavItem title="FAQ" icon={<FaQuestionCircle />} to="/faq" />
        <NavItem title="Contact Us" icon={<FaMailBulk />} to="/contact" />
        <NavItem title="Cart" icon={<FaCartArrowDown />} to="/cart" />
        <button
          onClick={toggleCurrency}
          className="f6 link dim br1 ph3 pv2 mb2 dib white bg-black"
        >
          Toggle Currency
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
