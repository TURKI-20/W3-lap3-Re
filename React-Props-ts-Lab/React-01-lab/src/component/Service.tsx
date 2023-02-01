import React from 'react'

interface Services {
    Services: string,
    price: number,
}

function Service(props:Services) {
  return (
    <div className='content'>
        <h2>Services : {props.Services}</h2>
        <h4>price: {props.price} it is free</h4>
    </div>
  )
}

export default Service