import React from 'react';
import {Link} from 'react-router-dom'
import './Guides.css'

const Guides = () => {

  return (
    <div className='guides-container'>
      <div className='content-container'>
        <h2 className='guide-title'>Click Of the Links Below to Visit a Trusted Resource and Learn More!</h2>
        <a href="https://magic.wizards.com/en/articles/archive/making-magic/true-blue-revisited-2015-07-20" target="_blank">True Blue Visited by Mark Rosewater (lead MTG designer)</a>
        <a href="https://magic.wizards.com/en/articles/archive/how-build/how-build-blue-2016-11-28" target="_blank">How to Build with Blue by Quinn Murphy</a>
        <a href="https://humanparts.medium.com/the-mtg-color-wheel-c9700a7cf36d" target="_blank">How the ‘Magic: The Gathering’ Color Wheel Explains Humanity by Duncan Sabien</a>
        <a href="https://www.youtube.com/watch?v=YkdKY3YxXDM" target="_blank">Explaining the Magic Color Pie and What All Colors Are Good At (YouTube)</a>
        <a href="https://www.youtube.com/watch?v=_SJWQkWBj6c" target="_blank">Purpose in Discovery | Blue Color Philosophy | Definitive Edition (YouTube)</a>
        <Link to='/'><button className='home-button'>Go Home</button></Link>
      </div>
    </div>
  )

}


export default Guides;
