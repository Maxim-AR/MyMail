import React from 'react'
import './style.css'

export const Search = ({handleChange}) => {


  return (
    <div className='search'>
        <input onChange={handleChange} />
    </div>
  )
}
