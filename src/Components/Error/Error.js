import React from 'react';
import {Link} from 'react-router-dom'
import './Error.css'

const Error = () => {
  return (
    <Link to='/'><h2>Error. Path not valid. Please Click this to Return Home.</h2></Link>
  )
}


export default Error;
