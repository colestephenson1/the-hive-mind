import React from 'react';
import './Header.css'



const Header = () => {
  return (
    <div className='header'>
      <div className='title-container'>
        <p>Welcome to The Hive Mind. We're Glad to Know Us.</p>
      </div>
      <div className='nav-bar'>
        <button>Guides</button>
        <p>Click One of the Archetypes Below to See a Decklist!</p>
        <button>The Goods</button>
      </div>
    </div>
  )
}

export default Header;
