import React from 'react';
import './Tempo.css'
import {Link} from 'react-router-dom'

const Tempo = () => {

  let decklist = ' Decklist: \n 4x Delver of Secrets \n 4x Faerie Miscreant \n 4x Moon-Circuit Hacker \n 4x Spellstutter Sprite \n 4x Ninja of the Deep Hours \n 4x Faerie Seer \n 4x One of Mind \n 4x Mutagenic Growth \n 2x Force Spike \n 4x Snap \n 4x Counterspell \n 18x Island'
  let description = 'Ah, so youve decdided to play blue, but still want to attack with creatures. Well alright, here is the juice: \nTempo is all about putting pressure on your opponent while disrupting their means of stopping you. This list is a deck called Mono Blue Delver, so named for the card Delver of Secrets. The goal is to establish an early flipped Delver while protecting it with cheap, efficient counterspells and bounce spells. Protect the queen at all costs and you should find youself on her winning side. Watch here as Andrea Mengucci, Pro Tour Champion, takes you through five matches using this decklist. He is a master at pressing advantage just enough to demand inefficient interaction form his opennent. At the sime time, he never overextends beyond a position he can protect.'

  return (
    <div className='large-container'>
      <div className='decklist-container'>
        <p className='decklist'>{decklist}</p>
        <iframe title='tempo-video' className='youtube' src='https://www.youtube.com/embed/AagHruSU8U8'></iframe>
      </div>
      <div className='descrip-container'>
        <p className='descrip'>{description}</p>
        <Link to='/'><button className='home-button'>Go Home</button></Link>
      </div>
    </div>
  )

}


export default Tempo;
