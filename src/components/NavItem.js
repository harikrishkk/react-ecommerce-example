import React from 'react';
import PropTypes from 'prop-types';

const NavItem = ({ title, icon }) => {
  return (
    <a
      className="f6 f5-l link bg-animate black-80 
           hover-bg-lightest-blue dib pa3 ph4-l"
      href="/"
    >
      <span> {icon}</span> {title}
    </a>
  );
};

NavItem.propTypes = {
  icon: PropTypes.element.isRequired,
};

NavItem.defaultProps = {
  title: 'Home',
};

export default NavItem;
