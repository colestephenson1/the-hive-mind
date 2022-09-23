import React from 'react';
import BlueCard from '../BlueCard/BlueCard'
import Form from '../Form/Form'
import './CardRepo.css'

const CardRepo = ({cards, filteredCards, filterByType}) => {


  const blueCards = cards.map(card => {
    return (
      <BlueCard images={card.image_uris}/>
    )
  })

  const filteredBlueCards = filteredCards.map(card => {
    return (
      <BlueCard images={card.image_uris}/>
    )
  })

  const which = filteredCards.length ? filteredBlueCards : blueCards

  return (

    <div className='big-container'>
      <Form filterByType={filterByType}/>
      <div className='cards-container'>
        {which}
      </div>
    </div>
  )
}


export default CardRepo;
