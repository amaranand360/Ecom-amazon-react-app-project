import React from 'react'
import "./Card.css";

function Card(props) {
  return (
    <>
        <img className='image' src={props.image} alt="Error" />

    </>
  )
}

export default Card;
