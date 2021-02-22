import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavItem = ({ title, icon, to }) => {
  return (
    <Link
      className="f6 f5-l link bg-animate black-80 
           hover-bg-lightest-blue dib pa3 ph4-l"
      to={to}
    >
      <span> {icon}</span> {title}
    </Link>
  );
};

NavItem.propTypes = {
  icon: PropTypes.element.isRequired,
};

NavItem.defaultProps = {
  title: 'Home',
};

export default NavItem;
