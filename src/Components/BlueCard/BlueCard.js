import React from 'react'
import './BlueCard.css'
import PropTypes from 'prop-types'


const BlueCard = ({images, name}) => {

  return (
    <img className='card' src={images.normal} alt={name}/>
  )

}


BlueCard.propTypes = {
  images: PropTypes.object,
  name: PropTypes.string,
}

export default BlueCard
