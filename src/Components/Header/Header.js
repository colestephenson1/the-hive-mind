import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css'
import PropTypes from 'prop-types'



const Header = ({clearState}) => {
  return (
    <div className='header'>
      <div className='title-container'>
        <Link to='/'><h1 className='greeting'>Welcome to The Hive Mind. Come Learn All There is to Know About Blue.</h1></Link>
      </div>
      <div className='nav-bar'>
        <Link to='/guides'><button className='nav-button' onClick={() => clearState()}>Guides</button></Link>
        <Link to='/cardrepo'><button className='nav-button' onClick={() => clearState()}>The Goods</button></Link>
      </div>
    </div>
  )
}

Header.propTypes = {
  clearState: PropTypes.func
}

export default Header;
