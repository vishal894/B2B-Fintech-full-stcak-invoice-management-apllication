import React from 'react';
import logo from '../assets/companyLogo.svg';

function CompHeader() {
  return (
    <div id='compLogo'>
        <img src={logo} alt="Logo" />
        <b id='compName'>ABC Products </b>
    </div>  
  )
}

export default CompHeader;