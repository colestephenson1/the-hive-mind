import React from 'react'
import './BlueCard.css'


const BlueCard = ({images}) => {

  return (
    <img className='card' src={images.normal}/>
  )

}


export default BlueCard
