import React from 'react';
import BlueCard from '../BlueCard/BlueCard'
import Form from '../Form/Form'
import './CardRepo.css'
import PropTypes from 'prop-types'

const CardRepo = ({cards, filteredCards, filterByType}) => {


  const blueCards = cards.map(card => {
    return (
      <BlueCard key={card.name} images={card.image_uris} name={card.name}/>
    )
  })

  const filteredBlueCards = filteredCards.map(card => {
    return (
      <BlueCard key={card.name} images={card.image_uris} name={card.name}/>
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


CardRepo.propTypes = {
  cards: PropTypes.array,
  filteredCards: PropTypes.array,
  filterByType: PropTypes.func,
}

export default CardRepo;
