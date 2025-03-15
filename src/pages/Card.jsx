import React from 'react'
import useGlobalReducer from '../hooks/useGlobalReducer'

const Card = () => {
    const {store, dispatch} = useGlobalReducer();
  return (
    <div>
        <h1>Card: {store.saludo}</h1>
    </div>
  )
}

export default Card