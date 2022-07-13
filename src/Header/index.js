import React from 'react'
import logo from './../logo.png'
import './index.css'

export const Header = ({children}) => {
  


  return (
    <header className='header'>
        <div className='header__logo'>
            <img src={logo} alt='MAIL' className='logo__pic' />
            <h1>MAIL</h1>
        </div>
        <div>
          {children}
        </div>
    </header>
  )
}
