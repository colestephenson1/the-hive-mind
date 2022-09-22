import React from 'react';
import '../Tempo/Tempo.css'
import {Link} from 'react-router-dom'

const Control = () => {
  let decklist = ' 4x Ledger Shredder \n 4x Murktide Regent \n 2x Snapcaster Mage \n 2x Subtlety \n 4x Archmages Charm \n 4x Consider \n 4x Coutnerspell \n 1x Dismember \n 1x Force of Negation \n 2x Gut Shot \n 2x Spell Pierce \n 2x Spell Snare \n 4x Thought Scour \n 4x Mishras Bauble \n 2x Dress Down \n 2x Flooded Strand \n 10x Island \n 1x Misty Rainforest \n 1x Oboro, Palace in the Clouds \n 1x Otawara, Soaring City \n 2x Polluted Delta \n 1x Scalding Tarn'
  let description = "Welcome to the finer things in life. As all MTG players eventually come to discover, the best way to play Magic is to not play at all. What I mean is, blue's core identity is to be responsive to the opponent's game actions. When it comes to this archetype, it's all about taking it slowly and methodically. Draw a card, play a land, pass the turn. Deal with whatever you opponent plays, rinse and repeat. Out-resource your opponent with two-for-one interactions and draw spells, gas them out of resources, and come over the top with big swingy finishers they won't be able to deal with. In this video, hall of famer Gabriel Nassif (a lauded control player) demonstrates these core concepts with mastery. Watch as he meticulously chooses when he plays his spells and what spells he chooses to play. It's all done with consideration to the game state, what he might be reading for his opponents hand, and his life total. You wont find a better teacher."
  return (
    <div className='large-container'>
      <div className='decklist-container'>
        <p className='decklist'>{decklist}</p>
        <iframe className='youtube' width="900" height="500" src='https://www.youtube.com/embed/-IWLzwFajjo'></iframe>
      </div>
      <div className='descrip-container'>
        <p className='descrip'>{description}</p>
        <Link to='/'><button className='home-button'>Go Home</button></Link>
      </div>
    </div>
  )
}


export default Control;
