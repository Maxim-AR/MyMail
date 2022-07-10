import React from 'react'
import logo from './../logo.png'
import './index.css'

export const Header = () => {
  
  



  return (
    <header className='header'>
        <div className='logo'>
            <img src={logo} alt='MAIL' className='logo__pic' />
        </div>
        <div className='search'>
            <input type='text' placeholder='Поиск' className='search__input'/>
        </div>
    </header>
  )
}
