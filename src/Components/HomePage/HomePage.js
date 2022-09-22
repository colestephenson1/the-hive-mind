import React from 'react'
import {Link} from 'react-router-dom'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className='home-page-container'>
      <h2>Click One of the Cards Below to See a Decklist! Left is Tempo, Center is Control, Right is Combo.</h2>
      <div className='image-container'>
        <Link to='/tempo'><img className='decklist-path-image' src='https://c1.scryfall.com/file/scryfall-cards/art_crop/front/1/1/11bf83bb-c95b-4b4f-9a56-ce7a1816307a.jpg?1562826346' alt='delver-of-secrets'/></Link>
        <Link to='/control'><img className='decklist-path-image' src='https://c1.scryfall.com/file/scryfall-cards/art_crop/front/3/0/30f6fca9-003b-4f6b-9d6e-1e88adda4155.jpg?1562847413' alt='cryptic-command'/></Link>
        <Link to='/combo'><img className='decklist-path-image' src='https://c1.scryfall.com/file/scryfall-cards/art_crop/front/2/0/2047963c-3761-4d21-834a-674762248b77.jpg?1590511804' alt='high-tide'/></Link>
      </div>
    </div>
  )
}




export default HomePage;
