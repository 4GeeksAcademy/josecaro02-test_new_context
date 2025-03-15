import React from 'react'
import useGlobalReducer from '../hooks/useGlobalReducer'


const Landing = () => {
    const {store, dispatch} = useGlobalReducer()
  return (
    <div>
        <h1>Landing</h1>
        <button className='btn btn-info'
        onClick={()=>{
            dispatch({
                type: "changeStore",
                payload: {message: "message from landing page!"}
            })
        }}
        >
        Change Store
        </button>
    </div>
  )
  
}

export default Landing;