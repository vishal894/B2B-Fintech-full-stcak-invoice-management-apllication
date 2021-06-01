import React from 'react';
import logo from '../assets/hrclogo.svg';
import CompHeader from '../components/CompHeader'

function Header() {
  return (
      <div id='container'>
        <CompHeader />
        <img id='hrcLogo'src={logo} alt="Logo" />
      </div>
  )
}

export default Header;