import logo from './assets/bemobil.jpg';
import React, { Component } from 'react';

function Bemobile() {
  return <img style={{position:"absolute", top:'190%', left:0, right:0, width:"100%", height:"60%", zIndex:10}} src={logo} alt="Logo" />;
}

export default Bemobile;