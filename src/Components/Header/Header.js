import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css'



const Header = () => {
  return (
    <div className='header'>
      <div className='title-container'>
        <h1>Welcome to The Hive Mind. Come Learn All There is to Know About Blue.</h1>
      </div>
      <div className='nav-bar'>
        <Link to='/guides'><button className='nav-button'>Guides</button></Link>
        <Link to='/cardrepo'><button className='nav-button'>The Goods</button></Link>
      </div>
    </div>
  )
}

export default Header;
