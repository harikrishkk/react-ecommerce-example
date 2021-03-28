import React from 'react';

const Logo = ({ icon, color }) => {
  const LogoIcon = icon;
  return (
    <span className="bg-black-80 ba b--black dib pa1 w2 h2 br-100 ">
      <LogoIcon color={color} size="1.8rem" />
    </span>
  );
};

export default Logo;
