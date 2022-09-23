import React from 'react';
import BlueCard from '../BlueCard/BlueCard'
import './CardRepo.css'

const CardRepo = ({cards}) => {
  console.log(cards[0])
  const blueCards = cards.map(card => {
    return (
      <BlueCard images={card.image_uris}/>
    )
  })

  return (
    <div className='cards-container'>
      {blueCards}
    </div>
  )
}


export default CardRepo;
