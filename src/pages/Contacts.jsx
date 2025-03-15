import React from 'react'
import useGlobalReducer from '../hooks/useGlobalReducer'

const Contacts = () => {
    const { store, dispatch } = useGlobalReducer()
    return (
        <div className='bg-dark text-white'>
            <h2>Contactos</h2>
            <button className="btn btn-secondary" onClick={() => {
                dispatch({
                    type: "changeStore"
                })
            }}>Change!</button>
        </div>
    )
}

export default Contacts