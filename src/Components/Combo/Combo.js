import React from 'react';
import '../Tempo/Tempo.css'
import {Link} from 'react-router-dom'

const Combo = () => {
  let decklist = ' 4x Brainstorm \n 4x Ponder \n 4x Preordain\n 4x High Tide \n 4x Time Spiral \n 4x Merchant Scroll \n 3x Predict \n 3x Cunning Wish \n 1x Intuition \n 3x Turnabout \n 4x Force of Will \n 3x Flusterstorm \n 4x Thought Scour \n 1x Flooded Strand \n 12x Island \n 1x Misty Rainforest \n 1x Polluted Delta \n 1x Scalding Tarn \n 2x Prismatic Vista'
  let description = "Now it's time to embrace the chaos. Welcome to blue combo. Combo likes to lie in wait, sculpting its hand and prolonging the game until the time where it is ready to strike, unloading every card it has in one turn to win the game. This deck is called High Tide. It uses the titular card to cause all islands to tap for an additional U until the end of turn. The pilot then uses a variety of spells to untap lands and draw more cards, netting positive mana for every spell cast. Then, through many of these interactions chained together, the pilot has an indeterminate amount of blue mana to cast a Blue Sun's Zenith or Brain Freeze to mill the opponent out. Watch as Anuraag Das plays a five-round league with the deck. Witness its explosive capabilities."
  return (
    <div className='large-container'>
      <div className='decklist-container'>
        <p className='decklist'>{decklist}</p>
        <iframe className='youtube' width="900" height="500" src='https://www.youtube.com/embed/e2rm7iJ5fAI'></iframe>
      </div>
      <div className='descrip-container'>
        <p className='descrip'>{description}</p>
        <Link to='/'><button className='home-button'>Go Home</button></Link>
      </div>
    </div>
  )
}


export default Combo;
