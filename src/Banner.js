import logo from './assets/banner1.jpg';
import React from 'react';

function Header() {
  return <img style={{width:"100%", height:"100%", zIndex:-1}} src={logo} alt="Logo" />;
}

export default Header;