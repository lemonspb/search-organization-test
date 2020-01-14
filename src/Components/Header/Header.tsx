import React from 'react';
import Logo from '../../Images/logo.png'
import './Header.scss'
const Header: React.FC = () => {
  return (
    <header className="header">
      <img src={Logo} alt="" className='header__logo'/>  
    </header>
  );
}

export default Header;
