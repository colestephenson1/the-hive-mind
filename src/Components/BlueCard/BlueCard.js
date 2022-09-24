import React from 'react'
import './BlueCard.css'


const BlueCard = ({images, name}) => {

  return (
    <img className='card' src={images.normal} alt={name}/>
  )

}


export default BlueCard
