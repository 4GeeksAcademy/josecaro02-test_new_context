import React from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import Contacts from './Contacts';
import Card from './Card';
import Landing from './Landing';


const Services = () => {
  const { store, dispatch } = useGlobalReducer()
  return (
    <>
      <div>Services</div>
      <div className='d-flex justify-content-between'>
        <h1>Services {store.saludo}</h1>
        <Card />
        <Contacts />

        <Landing />
      </div>
    </>
  )
}

export default Services